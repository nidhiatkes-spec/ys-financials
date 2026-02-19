import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15 },
    }),
  };

  /* -------------------- Animated Counter -------------------- */

  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end]);

    return <span>{count}+</span>;
  };

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden">

      {/* -------------------- NAVBAR -------------------- */}

      <nav className="fixed w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-[#005696]">
            YS Financials
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
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

          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 flex flex-col items-center gap-4">
            {["about", "services", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* -------------------- HERO -------------------- */}

      <section className="pt-32 pb-40 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-[#0f172a]">
              Smart Financial Decisions
              <span className="text-[#005696]"> Start Here.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Strategic wealth management and financial advisory tailored
              to long-term success and stability.
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-10 bg-[#005696] text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
            >
              Get Free Consultation
            </button>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
            className="rounded-3xl shadow-2xl"
            alt=""
          />
        </div>
      </section>

      {/* -------------------- STATS -------------------- */}

      <section className="py-20 bg-[#005696] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-12">
          <div>
            <h2 className="text-4xl font-bold">
              <Counter end={500} />
            </h2>
            <p className="mt-2 text-sm opacity-80">Clients Served</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              <Counter end={120} />
            </h2>
            <p className="mt-2 text-sm opacity-80">Cr Managed Assets</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              <Counter end={15} />
            </h2>
            <p className="mt-2 text-sm opacity-80">Years Experience</p>
          </div>
        </div>
      </section>

      {/* -------------------- SERVICES -------------------- */}

      <section id="services" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Investment Advisory",
              "Loan & Funding",
              "Tax Planning",
              "Retirement Planning",
              "Wealth Management",
              "Stocks & Bonds Consulting",
            ].map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition border"
              >
                <h3 className="font-semibold text-lg text-[#0f172a]">
                  {service}
                </h3>
                <p className="mt-4 text-gray-600 text-sm">
                  Professional, structured and research-driven financial
                  strategies tailored for your growth.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- LOGO SLIDER -------------------- */}

      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex gap-16 text-gray-400 font-medium">
          {["HDFC", "ICICI", "Axis", "Kotak", "SBI", "Tata"].map((logo, i) => (
            <div key={i} className="text-2xl opacity-70">
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- TESTIMONIALS -------------------- */}

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold mb-16">
            What Clients Say
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-12 rounded-3xl shadow-lg"
          >
            <p className="text-lg text-gray-600 italic">
              "YS Financials completely transformed how I manage my
              investments. Highly professional and transparent."
            </p>
            <h4 className="mt-6 font-semibold text-[#005696]">
              — Corporate Client
            </h4>
          </motion.div>
        </div>
      </section>

      {/* -------------------- CONTACT -------------------- */}

      <section id="contact" className="py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-12 rounded-3xl shadow-2xl border">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Get In Touch
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
              <button className="bg-[#005696] text-white py-4 rounded-lg shadow-lg hover:-translate-y-1 transition">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- FOOTER -------------------- */}

      <footer className="py-12 text-center bg-[#0f172a] text-gray-300 text-sm">
        © 2026 YS Financials. All Rights Reserved.
      </footer>

      {/* -------------------- MARQUEE CSS -------------------- */}

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
