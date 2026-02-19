import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => (
  <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-900">
        YS Financials
      </h1>
      <div className="space-x-6 hidden md:flex font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/services" className="hover:text-blue-600">Services</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-800 text-white text-center px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Empowering Your Financial Growth
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Strategic wealth management, insurance advisory, and financial intelligence solutions tailored to your success.
      </p>
      <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
        Get Started
      </button>
    </motion.div>
  </section>
);

const Services = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Insurance Advisory",
          "Wealth Management",
          "Investment Planning",
          "Tax Planning",
          "Retirement Solutions",
          "Corporate Financial Consulting",
        ].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              {service}
            </h3>
            <p className="text-gray-600">
              Professional financial solutions designed to maximize growth and security.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-12">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Client-Centric Approach",
          "Expert Financial Advisors",
          "Long-Term Wealth Strategy",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-8 bg-gray-100 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              {item}
            </h3>
            <p className="text-gray-600">
              We prioritize your financial goals with tailored advisory and proven strategies.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-12">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <p className="italic text-gray-600">
            "YS Financials transformed our investment strategy and secured our financial future."
          </p>
          <h4 className="mt-4 font-semibold text-blue-800">– Corporate Client</h4>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <p className="italic text-gray-600">
            "Professional, knowledgeable, and trustworthy financial partners."
          </p>
          <h4 className="mt-4 font-semibold text-blue-800">– Individual Investor</h4>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-blue-900 text-white py-10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">YS Financials</h3>
        <p className="text-gray-300">
          Empowering financial growth through intelligence and strategy.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <p>Email: info@ysfinancials.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <>
    <Hero />
    <Services />
    <WhyChooseUs />
    <Testimonials />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
