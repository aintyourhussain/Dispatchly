import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  Phone,
  Mail,
  Truck,
  ShieldCheck,
  Globe,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
  import { useState } from "react";
export default function DispatchlyWebsite() {
  const [loading, setLoading] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  truckType: "",
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

  setLoading(true);

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbyFpJPtuhwq2AmaVa6UquP9WZ2Aiz37XaNNCQxHLJcNzjEZ0qLaUPYoS9_vpgdro0Lo4w/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );

    const text = await res.text();
    console.log("RESPONSE:", text);

    setShowSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      truckType: "",
      message: "",
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  } catch (error) {
    console.error("SUBMIT ERROR:", error);
  }

  setLoading(false);
};

  const pricingPlans = [
  {
    name: 'Semi Truck',
    price: '5%',
    description:
      'Professional dispatch support for dry van, reefer, flatbed, and power-only carriers.',
  },
  {
    name: 'Hotshot & Box Truck',
    price: '7%',
    description:
      'Dedicated load booking and route management for hotshot and box truck operators.',
  },
  {
    name: 'Flat Weekly Dispatch',
    price: '$300/week',
    description:
      'Unlimited dispatch assistance with fixed weekly pricing for consistent operations.',
  },
];
  const services = [
    {
      icon: <Truck size={34} />,
      title: 'Premium Load Booking',
      desc: 'Our dispatch specialists negotiate high-paying freight loads and reduce dead miles to maximize driver profits.',
    },
    {
      icon: <Globe size={34} />,
      title: 'Nationwide Dispatching',
      desc: 'We operate across the United States with efficient route planning and reliable broker communication.',
    },
    {
      icon: <ShieldCheck size={34} />,
      title: 'Broker & Paperwork Management',
      desc: 'Dispatchly handles setup packets, invoices, rate confirmations, and broker communication professionally.',
    },
    {
      icon: <Phone size={34} />,
      title: '24/7 Driver Assistance',
      desc: 'Our support team remains available around the clock for operational assistance and urgent updates.',
    },
    {
      icon: <Mail size={34} />,
      title: 'Dedicated Carrier Support',
      desc: 'Every carrier receives personalized dispatch solutions based on equipment type and preferred lanes.',
    },
    {
      icon: <ArrowRight size={34} />,
      title: 'Growth Focused Operations',
      desc: 'We help trucking businesses scale operations with consistent freight opportunities and professional support.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans scroll-smooth">
      {showSuccess && (
  <div className="fixed top-6 right-6 bg-green-600 text-white px-6 py-4 rounded-2xl shadow-xl z-50">
    ✔ Submitted successfully!
  </div>
)}
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-lg border-b border-blue-100 px-6 lg:px-10 py-5 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden">
  <img
    src="/logo.jpg"
    alt="Dispatchly Logo"
    className="w-full h-full object-cover"
  />
</div>

            <div>
            <h1 className="text-3xl font-logo font-extrabold tracking-tight tracking-wide">
  <span className="text-blue-950">DISPATCH</span>
  <span className="text-blue-400">LY</span>
</h1>
              <p className="text-sm text-blue-950 font-medium">
                Truck Dispatching Solutions
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-blue-950">
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
            <a href="#pricing" className="hover:text-blue-600 transition">
              Pricing
            </a>
            <a href="#privacy" className="hover:text-blue-600 transition">
              Privacy
            </a>
            <a href="#terms" className="hover:text-blue-600 transition">
              Terms
            </a>

            <a
              href="#contact"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl shadow-lg transition"
            >
              Book Consultation
            </a>
          </div>
          <button
  className="lg:hidden text-blue-950"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={30} /> : <Menu size={30} />}
</button>
        </div>
      </nav>
      {menuOpen && (
  <div className="lg:hidden bg-white border-t border-blue-100 px-6 py-6 space-y-4 text-blue-950 font-semibold shadow-lg">
    
    <a href="#home" className="block">
      Home
    </a>

    <a href="#services" className="block">
      Services
    </a>

    <a href="#about" className="block">
      About
    </a>

    <a href="#contact" className="block">
      Contact
    </a>

    <a href="#pricing" className="block">
      Pricing
    </a>

    <a
      href="#contact"
      className="block bg-blue-900 text-white text-center py-3 rounded-2xl"
    >
      Book Consultation
    </a>
  </div>
)}

<section
  id="home"
  className="relative min-h-[90vh] flex items-center text-white px-6 overflow-hidden"
>
  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src="/hero.jpeg"
      alt="Dispatchly Logistics"
      className="w-full h-full object-cover"
    />
  </div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-700/70" />

  {/* GLOW */}
  <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-400/20 blur-3xl rounded-full" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    
    {/* LEFT SIDE */}
    <div>
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm mb-8">
        <Truck size={18} />
        Trusted Dispatch Services Across USA
      </div>

      <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
        Reliable Dispatch Services For Trucking Companies
      </h2>

      <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-2xl">
        Dispatchly helps owner operators and trucking companies maximize earnings with premium dispatching, broker communication, route planning, and 24/7 operational support.
      </p>

      <div className="flex flex-wrap gap-5">
        <a
          href="#contact"
          className="bg-white text-blue-950 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition"
        >
          Get Started
        </a>

        <a
          href="tel:7866612071"
          className="border border-white/40 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-950 transition"
        >
          Call Now
        </a>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="bg-white/10 backdrop-blur-xl rounded-[35px] p-10 border border-white/10 shadow-2xl">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-7 text-blue-950 shadow-lg">
          <h3 className="text-4xl font-bold">24/7</h3>
          <p className="text-sm mt-2">Dispatch Support</p>
        </div>

        <div className="bg-white rounded-3xl p-7 text-blue-950 shadow-lg">
          <h3 className="text-4xl font-bold">Top</h3>
          <p className="text-sm mt-2">Paying Loads</p>
        </div>

        <div className="bg-white rounded-3xl p-7 text-blue-950 shadow-lg">
          <h3 className="text-4xl font-bold">Fast</h3>
          <p className="text-sm mt-2">Broker Setup</p>
        </div>

        <div className="bg-white rounded-3xl p-7 text-blue-950 shadow-lg">
          <h3 className="text-4xl font-bold">USA</h3>
          <p className="text-sm mt-2">Nationwide Coverage</p>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* Services */}
      <section id="services" className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-blue-950 mb-5">
              Our Dispatch Services
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Dispatchly delivers premium truck dispatching solutions designed to increase profits, reduce downtime, and simplify operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-[30px] p-8 shadow-xl border border-blue-100 hover:-translate-y-3 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-70"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-950 to-blue-700 rounded-3xl flex items-center justify-center text-white shadow-xl mb-8 group-hover:scale-110 transition">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-blue-950 mb-5 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-blue-950 mb-8">
              Why Choose Dispatchly?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Dispatchly is committed to helping truck drivers and carriers operate efficiently while maximizing profits through premium dispatching and professional communication.
            </p>

            <div className="space-y-5">
              {[
                'Experienced dispatch specialists',
                'Fast broker communication',
                'Professional rate negotiation',
                'Reliable operational support',
                'Dedicated carrier assistance',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-900"></div>
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950 to-blue-700 rounded-[35px] p-12 text-white shadow-2xl">
            <h3 className="text-4xl font-bold mb-8">
              Trusted Dispatch Partner
            </h3>

            <p className="leading-relaxed text-blue-100 mb-10 text-lg">
              We focus on building long-term partnerships with carriers by delivering dependable dispatching solutions and premium support.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-5xl font-bold">24/7</h4>
                <p className="text-blue-200 mt-2">Support</p>
              </div>

              <div>
                <h4 className="text-5xl font-bold">100%</h4>
                <p className="text-blue-200 mt-2">Professional Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-950 mb-5">
              Get In Touch With Dispatchly
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to grow your trucking business? Submit your information and our dispatch team will contact you shortly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-[35px] shadow-2xl p-10 border border-blue-100">
              <h3 className="text-3xl font-bold text-blue-950 mb-8">
                Carrier Application Form
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
              
                <div className="grid md:grid-cols-2 gap-5">
                 <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-700"
                  />                  
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-700"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-700"
                  />

                  <select
                    name="truckType"
                    value={formData.truckType}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-700 text-gray-500"
                  >
                    <option>Select Truck Type</option>
                    <option>Power Only</option>
                    <option>Dry Van</option>
                    <option>Flatbed</option>
                    <option>Reefer</option>
                    <option>StepDeck</option>
                    <option>Box Truck</option>
                    <option>Hotshot</option>
                    
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your trucking business, preferred lanes, MC details, or dispatching needs..."
                  className="w-full border border-gray-200 rounded-3xl px-5 py-5 outline-none focus:border-blue-700"
                ></textarea>

                <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    By submitting this form, you consent to receive SMS and email communication from Dispatchly regarding dispatch services, support, and operational updates. Reply STOP to unsubscribe.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-950 to-blue-700 text-white py-5 rounded-2xl font-semibold text-lg shadow-xl transition disabled:opacity-50">
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
                
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-950 to-blue-700 rounded-[35px] p-10 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-8">
                  Business Information
                </h3>

                <div className="space-y-7 text-blue-100">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Mail />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wide text-blue-200">
                        Email Address
                      </p>
                      <p className="text-lg font-medium">
                        dispatchlyllc@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Phone />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wide text-blue-200">
                        Phone Number
                      </p>
                      <p className="text-lg font-medium">786 6612071</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Truck />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wide text-blue-200">
                        Business Address
                      </p>
                      <p className="text-lg font-medium leading-relaxed">
                        1200 Logistics Avenue
                        <br />
                        Miami, Florida 33101
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[35px] shadow-xl p-10 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">
                  SMS Communication Policy
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Dispatchly may contact carriers and customers regarding load updates, dispatch support, broker communication, and operational notifications.
                </p>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Message frequency may vary. Standard message and data rates may apply. Users may opt out anytime by replying STOP or request assistance by replying HELP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing */}
<section
  id="pricing"
  className="py-28 px-6 bg-gradient-to-r from-blue-950 to-blue-700 text-white">
  <div className="max-w-7xl mx-auto text-center">
<h2 className="text-5xl font-bold mb-5">
  Flexible Pricing Built For Every Carrier
</h2>

<p className="text-lg max-w-4xl mx-auto mb-16 leading-relaxed text-blue-100">
  Whether you operate a single truck or manage a growing fleet, Dispatchly
  offers reliable dispatch solutions with simple pricing, professional support,
  and no hidden fees.
</p>

    <div className="grid md:grid-cols-3 gap-8">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="bg-white text-blue-950 rounded-[30px] p-10 shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>

          <p className="text-5xl font-extrabold mb-6">{plan.price}</p>
          <p className="text-gray-600 leading-relaxed mb-8">{plan.description}</p>
          <a
            href="#contact"
            className="inline-block bg-blue-950 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-800 transition"
          >
            Get Started
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
          
      {/* Privacy */}
      <section id="privacy" className="py-28 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-950 mb-5">
              Privacy Policy
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Dispatchly values customer privacy and protects personal and business information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Information We Collect',
                text: 'We may collect names, phone numbers, email addresses, MC details, truck information, and business details when users contact Dispatchly.',
              },
              {
                title: 'SMS Communication',
                text: 'Users who provide their phone number consent to receive dispatch updates and operational notifications through SMS communication.',
              },
              {
                title: 'Data Security',
                text: 'Dispatchly uses administrative and technical safeguards to protect customer information from unauthorized access.',
              },
              {
                title: 'Third Party Sharing',
                text: 'Dispatchly does not sell customer information. Data may only be shared when operationally necessary.',
              },
              {
                title: 'Opt-Out Rights',
                text: 'Users may unsubscribe from SMS communication anytime by replying STOP. Assistance is available by replying HELP.',
              },
              {
                title: 'Contact Information',
                text: 'Questions regarding this Privacy Policy can be directed to dispatchlyllc@gmail.com.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-[30px] p-8 shadow-lg border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-blue-950 mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="py-28 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-950 mb-5">
              Terms & Conditions
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              By using Dispatchly services, users agree to the following terms and communication policies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Services',
                text: 'Dispatchly provides truck dispatching and logistics support services for owner operators and trucking companies.',
              },
              {
                title: 'Communication Consent',
                text: 'Users agree to receive calls, emails, and SMS related to dispatch operations and support.',
              },
              {
                title: 'Message Terms',
                text: 'Message frequency varies depending on operational requirements. Message and data rates may apply.',
              },
              {
                title: 'Liability',
                text: 'Dispatchly is not responsible for operational delays or third-party service interruptions.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] p-8 shadow-lg border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-blue-950 mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-950 to-blue-900 text-blue-100 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-white/10 pb-14">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Dispatchly</h3>
            <p className="text-sm text-blue-200 leading-relaxed">
              Elite truck dispatch services designed to maximize profits and simplify operations for owner operators and trucking companies.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>

            <div className="space-y-4 text-sm">
              <a href="#home" className="block hover:text-white transition">
                Home
              </a>
              <a href="#services" className="block hover:text-white transition">
                Services
              </a>
              <a href="#about" className="block hover:text-white transition">
                About
              </a>
              <a href="#contact" className="block hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact</h4>

            <div className="space-y-4 text-sm text-blue-100">
              <p>dispatchlyllc@gmail.com</p>
              <p>786 6612071</p>
              <p>Miami, Florida</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Follow Us</h4>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white hover:text-blue-950 transition flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white hover:text-blue-950 transition flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white hover:text-blue-950 transition flex items-center justify-center cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-200">
          <p>© 2026 Dispatchly. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
