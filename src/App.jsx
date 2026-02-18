import React, { useEffect, useState, useRef } from "react";


function App() {
  const [scrolled, setScrolled] = useState(false);
  const sectionsRef = useRef([]);
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    console.log("STATUS:", response.status);

    const text = await response.text();
    console.log("RAW RESPONSE:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      alert("Invalid JSON response from server");
      return;
    }

    if (!response.ok) {
      alert(data.errors?.[0]?.msg || data.message || "Bad Request");
      return;
    }

    alert(data.message || "Success");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.log("Fetch error:", error);
    alert("Server connection failed");
  }
};




  /* NAVBAR SHRINK */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* SCROLL FUNCTION */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="bg-white text-gray-800 transition-colors duration-500"
      style={{ fontFamily: "Inter, sans-serif" }}
    >

      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          scrolled ? "py-3 shadow-md" : "py-6"
        } bg-white/90 border-gray-200 backdrop-blur-sm`}
      >
        <div className="max-w-7xl px-5 flex justify-between items-center mx-auto">

          {/* LOGO */}
          <div className="leading-tight">
            <h1 className="text-3xl font-semibold tracking-wide text-[#005696]">
              YS Financials
            </h1>

            <div className="w-40 h-[2px] bg-[#8DC63F] mt-2 mb-2"></div>

            <p className="text-xs text-[#8DC63F] tracking-widest uppercase">
              Your Financial Doctor
            </p>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {["services", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative group capitalize hover:text-[#00AEEF] transition"
              >
                {item}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00AEEF] group-hover:w-full transition-all duration-300"></span>

              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-36"></div>

      {/* HERO */}
      <section className="relative py-24 md:py-40 overflow-hidden">


        <div
          className="absolute inset-0 opacity-10 animate-pulse"
          style={{
            backgroundImage:
              "linear-gradient(to right, #00AEEF 1px, transparent 1px), linear-gradient(to bottom, #00AEEF 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">



          <div>

            <h1
              className="text-5xl sm:text-6xl md:text-6xl leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Smart Financial Decisions 
              <span className="text-[#8DC63F]"> Start Here.</span>
            </h1>

            <p className="mt-5 text-lg max-w-lg opacity-">
              Strategic guidance. Transperent advice. Confident decisions.
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-10 bg-[#005696] text-white px-8 py-4 rounded-md hover:bg-[#003f6b] transition"
            >
              Get Free Consultation
            </button>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 shadow-2xl">

            <h3 className="text-xl font-medium mb-6">
              Our Philosophy
            </h3>

            <p className="text-sm opacity-80 leading-relaxed">
              We belive finance should be simple, transparent and empowering. Our mission is to guide clients towards smarter financial decisions with clarity and trust.
            </p>

          </div>

        </div>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
<section id="services" className="py-28 px-8 bg-white">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-semibold text-[#005696] mb-4">
        Our Services
      </h2>
      <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Simplifying loans and financial processes with expert guidance and trusted partnerships.
      </p>
    </div>

    {/* Expertise Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">


      {/* Card 1 */}
      <div className="bg-white p-10 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold text-[#005696] mb-4">
          Mutual Funds & Investment Advisory
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Personalized investment strategies aligned with your financial goals and risk profile.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-10 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold text-[#005696] mb-4">
          Loan & Funding Solutions
        </h3>
        <p className="text-gray-600 leading-relaxed">
         Home loans, Business loans, Funding assistance with trusted banks and finance partners.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-10 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold text-[#005696] mb-4">
          Tax & Financial Planning
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Smart tax-efficient strategies and structured financial planning to optimize returns.
        </p>
      </div>
    

    {/* Card 4 */}
      <div className="bg-white p-10 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold text-[#005696] mb-4">
          Retirement Planning & Consulting
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Personalized retirement strategies designed to ensure financial independence, steady income, and long-term security.
        </p>
      </div>

      {/* Card 5*/}
      <div className="bg-white p-10 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold text-[#005696] mb-4">
          Wealth Management & Advisory
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Strategic wealth management designed to grow, protect, and efficiently structure your financial assets
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white p-10 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold text-[#005696] mb-4">
          Stocks & Bonds Consulting
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Strategic advisory on stock and bond investments focused on diversification, risk management, and long-term returns.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* ================= ABOUT SECTION ================= */}
<section id="about" className="py-28 px-8 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* Left Side Content */}
    <div>
      <h2 className="text-4xl font-semibold text-[#005696] mb-6">
        About YS Financials
      </h2>

      <div className="w-16 h-[3px] bg-[#8DC63F] mb-8"></div>

      <p className="text-gray-600 leading-relaxed mb-6">
      </p>

      <p className="text-gray-600 leading-relaxed mb-8">
        With a client-first approach and strong partnerships with leading banks and financial institutions, we simplify complex financial processes and focus on long-term growth and stability.
      </p>

      {/* Highlights */}
      <div className="space-y-4">

        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-[#8DC63F] mt-2 rounded-full"></div>
          <p className="text-gray-700">
            Personalized financial and investment strategies
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-[#8DC63F] mt-2 rounded-full"></div>
          <p className="text-gray-700">
           Transparent and ethical advisory approach
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-[#8DC63F] mt-2 rounded-full"></div>
          <p className="text-gray-700">
           Focused on long-term wealth creation and protection
          </p>
        </div>

      </div>
    </div>

    {/* Right Side Visual Box */}
    <div className="bg-gray-50 p-12 rounded-3xl shadow-md border border-gray-100 text-center">

      <h3 className="text-3xl font-semibold text-[#005696] mb-4">
        Our Mission
      </h3>

      <p className="text-gray-600 leading-relaxed">
       To simplify financial decision-making and empower our clients with reliable advice, smart investment strategies, and transparent financial solutions that create long-term security and growth.
      </p>

    </div>

  </div>
</section>


      {/* ================= TESTIMONIALS ================= */}
<section className="py-24 px-8 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-semibold text-[#005696] mb-6">
      What Our Clients Say
    </h2>

    <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-16"></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">


      {/* Testimonial 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:- translate-y-1 transition duration-300">
        <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          YS Financials helped us restructure our investment portfolio and
          significantly improve long-term returns. Their strategic guidance
          made a measurable difference.
        </p>
        <h4 className="font-semibold text-[#005696]">Rahul Mehta</h4>
        <p className="text-sm text-gray-500">Business Owner</p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:- translate-y-1 transition duration-300">
        <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The team provided clear and practical financial planning strategies.
          Their expertise gave us confidence in managing our wealth efficiently.
        </p>
        <h4 className="font-semibold text-[#005696]">Anjali Sharma</h4>
        <p className="text-sm text-gray-500">Entrepreneur</p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:- translate-y-1 transition duration-300">
        <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          From tax optimization to diversified investment planning, their
          advisory services have consistently delivered strong results.
        </p>
        <h4 className="font-semibold text-[#005696]">Vikram Patel</h4>
        <p className="text-sm text-gray-500">Corporate Executive</p>
      </div>

    </div>
  </div>
</section>

{/* ================= IMPACT SECTION ================= */}
<section className="py-28 px-8 bg-white">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-semibold text-[#005696] mb-6">
      Our Approach
    </h2>

    <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-12"></div>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      Delivering financial growth through disciplined investment
      strategies and long-term wealth planning.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">


      {/* Card 1 */}
      <div className="bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-4xl font-bold text-[#005696] mb-3">
          Identifying Your Goals
        </h3>
        <p className="text-gray-600 text-lg">
          {/* Assets Managed */}
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-4xl font-bold text-[#005696] mb-3">
          Strategic Planning
        </h3>
        <p className="text-gray-600 text-lg">
          {/* Clients Served */}
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-4xl font-bold text-[#005696] mb-3">
          Execution & Support
        </h3>
        <p className="text-gray-600 text-lg">
          {/* Years of Experience */}
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-4xl font-semibold text-[#005696] mb-3">
          Continuous Review
        </h3>
        <p className="text-gray-600 text-lg">
          {/* Average Portfolio Growth */}
        </p>
      </div>

    </div>
  </div>
</section>

{/* ================= WHY CHOOSE US ================= */}
<section className="py-28 px-8 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-semibold text-[#005696] mb-6">
      Why Choose YS Financials
    </h2>

    <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-16"></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">



      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold text-[#005696] mb-4">
          Strategic Investment Planning
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Tailored financial strategies designed around your 
          goals, risk profile, and long-term vision
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold text-[#005696] mb-4">
          Risk-Optimized Portfolios
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Balanced asset allocation focused on stability, growth, and disciplined wealth building.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold text-[#005696] mb-4">
          Transparent Advisory
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Honest guidance, clear communication, and complete transparency in every financial decision.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CONTACT */}
      {/* ================= CONTACT ================= */}
<section id="contact" className="py-32 px-8 bg-[#f9fbfd] scroll-mt-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">


    {/* LEFT SIDE */}
    <div>
      <h2 className="text-4xl font-semibold text-[#005696] mb-6">
        Contact Us
      </h2>

      <div className="w-16 h-[3px] bg-[#8DC63F] mb-8"></div>

      <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-md">
        Whether you're planning long-term investments or restructuring your
        financial strategy, our advisory team is ready to guide you with
        clarity and precision.
      </p>

      <div className="space-y-6 text-gray-700 text-lg">
        <div>
          <p className="font-medium text-[#005696]">Email</p>
          <a
            href="mailto:your@email.com"
            className="hover:text-[#00AEEF] transition"
          >
            ysfinancials@gmail.com
          </a>
        </div>

        <div>
          <p className="font-medium text-[#005696]">Instagram</p>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00AEEF] transition"
          >
            @ysfinancials
          </a>
        </div>

        <div>
          <p className="font-medium text-[#005696]">Phone</p>
          <p>+91 770092997</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE - CONTACT FORM */}
    <div className="bg-white p-12 rounded-2xl shadow-xl border hover:shadow-xl transition duration-300 border border-gray-300">

      <h3 className="text-2xl font-semibold text-[#005696] mb-8">
        Schedule a Consultation
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">


        <div>
          <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Full Name"
  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
  required
/>
        </div>

        <div>
          <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
  required
/>
        </div>

        <div>
          <textarea
  rows="4"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="How can we assist you?"
  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
  required
></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#005696] text-white py-3 rounded-md hover:bg-[#003f6b] transition font-medium"
        >
          Book Free Consultation
        </button>
      </form>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t">

        © 2026 YS Financials. All Rights Reserved.

      </footer>
    </div>
  );
}
export default App;