import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative font-sans text-gray-800 bg-white overflow-x-hidden">

      {/* ===== Floating Gradient Background ===== */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      {/* ===== NAVBAR ===== */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-wide text-[#005696]">
            YS Financials
          </h1>

          <div className="hidden md:flex gap-10 text-sm font-medium">
            {["about", "services", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-[#005696] transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="pt-40 pb-32 relative">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl leading-tight font-semibold">
              Modern Financial Strategy
              <span className="text-[#005696]"> Simplified.</span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed">
              Intelligent wealth management, structured investment planning,
              and advisory solutions built for long-term clarity and growth.
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-10 bg-[#005696] text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Book a Consultation
            </button>
          </motion.div>

          <motion.img
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Finance Dashboard"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Financial Planning"
            className="rounded-2xl shadow-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-6">
              Disciplined Wealth Management
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We combine research-driven analysis, structured capital
              allocation, and long-term partnerships to ensure financial
              stability and sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-20 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Investment Advisory",
                desc: "Research-driven portfolio strategies aligned with your financial objectives.",
              },
              {
                title: "Wealth Management",
                desc: "Strategic asset allocation focused on long-term value creation.",
              },
              {
                title: "Tax & Retirement Planning",
                desc: "Optimized structures for tax efficiency and retirement stability.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-32">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-14 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h2 className="text-3xl font-semibold mb-10 text-center">
              Let’s Start a Conversation
            </h2>

            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005696]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005696]"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005696]"
              />
              <button className="bg-[#005696] text-white py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Submit Inquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 border-t border-gray-100 text-center text-sm text-gray-500">
        © 2026 YS Financials. All rights reserved.
      </footer>
    </div>
  );
}
