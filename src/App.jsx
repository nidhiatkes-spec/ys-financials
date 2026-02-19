import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fade = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="font-sans text-[#111827] bg-white">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-wide">
            YS Financials
          </h1>

          <div className="hidden md:flex gap-10 text-sm font-medium">
            <button onClick={() => scrollToSection("about")} className="hover:text-[#005696] transition">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-[#005696] transition">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-[#005696] transition">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl leading-tight font-semibold max-w-4xl">
              Strategic Financial Advisory
              <span className="text-[#005696]"> Built on Trust.</span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 max-w-2xl leading-relaxed">
              We provide structured wealth management, investment planning,
              and financial consulting designed for long-term stability
              and disciplined growth.
            </p>

            <div className="mt-10">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#005696] text-white px-8 py-4 rounded-md text-sm tracking-wide hover:bg-[#00497a] transition"
              >
                Request Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="relative -mt-20 z-10">
  <div className="max-w-6xl mx-auto px-6">
    <div className="bg-white shadow-2xl rounded-3xl p-10 grid md:grid-cols-4 gap-10 text-center border border-gray-100">
      {[
        { number: "500+", label: "Clients Served" },
        { number: "₹120Cr+", label: "Assets Managed" },
        { number: "15+", label: "Years Experience" },
        { number: "98%", label: "Client Retention" },
      ].map((item, i) => (
        <div key={i}>
          <h3 className="text-3xl font-bold text-[#005696]">
            {item.number}
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ABOUT */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-6">
              A Disciplined Approach to Wealth
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our advisory philosophy is built on clarity, research, and
              long-term partnerships. We focus on capital preservation,
              strategic asset allocation, and tax-efficient structures
              tailored to each client’s objectives.
            </p>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1565514158740-064f34bd6cfd"
            alt=""
            className="rounded-lg shadow-lg"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-20">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "Investment Advisory",
                desc: "Research-driven portfolio strategies aligned with risk and growth objectives.",
              },
              {
                title: "Wealth Management",
                desc: "Structured capital allocation and long-term wealth planning.",
              },
              {
                title: "Tax & Retirement Planning",
                desc: "Optimized structures for tax efficiency and retirement stability.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
      <section className="py-32 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-semibold text-center mb-20">

      <section className="py-32">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
    <div>
      <h2 className="text-4xl font-semibold mb-6">
        Structured Financial Planning for Modern Investors
      </h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        We integrate portfolio management, tax strategy, and risk
        assessment into one cohesive plan tailored to your goals.
      </p>
      <ul className="space-y-4 text-gray-600">
        <li>✔ Asset Allocation Strategy</li>
        <li>✔ Risk Optimization</li>
        <li>✔ Performance Monitoring</li>
        <li>✔ Annual Portfolio Review</li>
      </ul>
    </div>

    <img
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
      alt="Financial Dashboard"
      className="rounded-3xl shadow-2xl"
    />
  </div>
</section>

      Why Clients Trust Us
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      {[
        {
          title: "Research Driven",
          desc: "Every decision is backed by structured market analysis and risk assessment."
        },
        {
          title: "Transparent Advisory",
          desc: "Clear communication, no hidden agendas, and client-first strategy."
        },
        {
          title: "Long-Term Partnership",
          desc: "We focus on sustainable growth rather than short-term gains."
        }
      ].map((item, i) => (
        <div key={i} className="bg-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Connect With Us
          </h2>

          <div className="bg-white p-12 shadow-sm border border-gray-100 rounded-md">
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-200 p-4 rounded-md focus:outline-none focus:border-[#005696]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-200 p-4 rounded-md focus:outline-none focus:border-[#005696]"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="border border-gray-200 p-4 rounded-md focus:outline-none focus:border-[#005696]"
              />
              <button className="bg-[#005696] text-white py-4 rounded-md text-sm tracking-wide hover:bg-[#00497a] transition">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#005696] text-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <p className="text-2xl leading-relaxed italic">
      “YS Financials transformed our long-term wealth planning.
      Their disciplined and transparent approach gives us complete confidence.”
    </p>
    <h4 className="mt-10 text-lg font-semibold">
      — Managing Director, Private Equity Firm
    </h4>
  </div>
</section>


      {/* FOOTER */}
      <footer className="py-16 border-t border-gray-100 text-center text-sm text-gray-500">
        © 2026 YS Financials. All rights reserved.
      </footer>
    </div>
  );
}
