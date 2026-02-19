import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Consultation request submitted.");
    setFormData({ name: "", email: "", message: "" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-[#0f172a] text-white scroll-smooth">

      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#0f172a]/80 backdrop-blur-lg shadow-xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            YS <span className="text-[#facc15]">Financials</span>
          </h1>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {["services", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-[#facc15] transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-40"></div>

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative py-32"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] to-[#0f172a] -z-10"></div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Strategic Financial
            <span className="block text-[#facc15]">
              Growth & Wealth Planning
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Empowering individuals and businesses with intelligent investment
            strategies and disciplined financial planning.
          </p>

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-10 bg-[#facc15] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Schedule Consultation
          </button>
        </div>
      </motion.section>

      {/* STATS */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            { number: "500+", label: "Clients Served" },
            { number: "₹50Cr+", label: "Assets Managed" },
            { number: "10+", label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
              className="bg-[#1e293b] p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-4xl font-bold text-[#facc15]">
                {stat.number}
              </h3>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Our <span className="text-[#facc15]">Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Investment Advisory",
              "Wealth Management",
              "Retirement Planning",
              "Tax Optimization",
              "Loan & Funding",
              "Stock & Bond Consulting",
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1e293b] p-10 rounded-2xl shadow-xl border border-[#334155]"
              >
                <h3 className="text-xl font-semibold text-[#facc15] mb-4">
                  {service}
                </h3>
                <p className="text-gray-400">
                  Comprehensive and strategic financial solutions tailored for
                  sustainable growth.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-[#facc15]">YS Financials</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We provide transparent, disciplined, and strategic financial
              advisory designed to help clients build sustainable wealth and
              long-term financial security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1e293b] p-12 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-[#facc15] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-400">
              To empower clients with clarity, precision, and data-driven
              strategies that build generational wealth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Let’s Build Your <span className="text-[#facc15]">Future</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-[#1e293b] p-12 rounded-3xl shadow-2xl space-y-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#facc15] outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#facc15] outline-none"
              required
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we assist you?"
              className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#facc15] outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#facc15] text-black py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Book Consultation
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-[#1e293b]">
        © 2026 YS Financials. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
