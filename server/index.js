
console.log("Starting backend...");
require("dotenv").config();
const rateLimit = require("express-rate-limit");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const helmet = require("helmet");

const allowedOrigins = [
  "http://localhost:5173", // development
  "https://ys-financials.vercel.app" // production
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));



const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: "Too many requests from this IP, please try again later."
});

app.use(limiter);
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

const { body, validationResult } = require("express-validator");

app.post(
  "/contact",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("message").trim().isLength({ min: 5 }).withMessage("Message too short")
  ],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, message } = req.body;

      const newInquiry = new Contact({
        name,
        email,
        message
      });

      await newInquiry.save();

      res.status(200).json({ message: "Inquiry saved successfully" });

    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }
);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`)
);
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

