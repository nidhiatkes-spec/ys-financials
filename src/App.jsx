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

      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        alert("Invalid response from server");
        return;
      }

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

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
      },
    }),
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-800" style={{ fontFamily: "Inter, sans-serif" }}>
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md border-b ${
        scrolled ? "py-3 shadow-lg bg-white/95" : "py-6 bg-white/80"
      }`}>
        <div className="max-w-7xl px-6 mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-[#005696]">
              YS Financials
            </h1>
            <p className="text-xs text-[#8DC63F] tracking-widest uppercase">
              Your Financial Doctor
            </p>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {["services", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative group capitalize hover:text-[#005696]"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#005696] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-32"></div>

      {/* HERO */}
      <section className="py-32 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
              Smart Financial Decisions
              <span className="text-[#005696]"> Start Here.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Strategic wealth management and financial advisory services designed
              for long-term growth and financial security.
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-10 bg-[#005696] text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
              alt="Finance"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#005696] mb-4">
            Our Services
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "Investment Advisory",
            "Loan & Funding Solutions",
            "Tax Planning",
            "Retirement Planning",
            "Wealth Management",
            "Stock & Bond Consulting",
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              <div className="text-3xl font-bold text-[#005696] mb-4">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-semibold text-[#005696] mb-6">
              About YS Financials
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We provide structured financial advisory services focused on clarity,
              transparency, and sustainable wealth creation. Our approach is client-first,
              long-term oriented, and performance driven.
            </p>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-xl border">
            <h3 className="text-2xl font-semibold text-[#005696] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower clients with reliable financial strategies that build
              security, stability, and measurable long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-semibold text-[#005696] mb-6">
              Contact Us
            </h2>
            <p className="text-gray-600">
              Ready to structure your financial future? Let’s connect.
            </p>
          </div>

          <div className="bg-gray-50 p-12 rounded-3xl shadow-xl border">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#005696]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#005696]"
              />

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#005696]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#005696] text-white py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Book Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center bg-[#0f172a] text-gray-400 text-sm">
        © 2026 YS Financials. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;
