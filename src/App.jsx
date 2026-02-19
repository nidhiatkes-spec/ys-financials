import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ys-financials.onrender.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Server connection failed");
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white text-gray-800 font-inter">

      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 shadow-lg bg-white/95 backdrop-blur-md"
            : "py-6 bg-white/80"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
              YS Financials
            </h1>
            <p className="text-xs tracking-widest text-[#8DC63F] uppercase">
              Your Financial Doctor
            </p>
          </div>

          <div className="hidden md:flex space-x-8 font-medium">
            {["services", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative capitalize hover:text-[#1e3a8a] transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-36"></div>

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 md:py-40 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Smart Financial Decisions
              <span className="text-[#facc15]"> Start Here.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-lg">
              Strategic guidance. Transparent advice. Confident decisions.
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-10 bg-[#facc15] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
            >
              Get Free Consultation
            </button>
          </div>

          <motion.img
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
            alt="Financial Planning"
            className="rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Comprehensive financial solutions tailored to your long-term goals.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Mutual Funds & Investment Advisory",
              "Loan & Funding Solutions",
              "Tax & Financial Planning",
              "Retirement Planning",
              "Wealth Management",
              "Stocks & Bonds Consulting",
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">
                  {service}
                </h3>
                <p className="text-gray-600">
                  Expert advisory and strategic planning to optimize your
                  financial growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
              About YS Financials
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We simplify complex financial decisions through disciplined
              planning, transparent advice, and strategic investment
              management.
            </p>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
            <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower clients with clarity, structured strategies, and
              sustainable financial growth.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-12">
            Schedule a Consultation
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-12 rounded-3xl shadow-2xl space-y-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] outline-none"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] outline-none"
              required
            />

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we assist you?"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1e3a8a] outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#1e3a8a] text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Book Free Consultation
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center border-t text-gray-500">
        © 2026 YS Financials. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
