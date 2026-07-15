import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-lg border-b border-blue-100 px-6 lg:px-10 py-5 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden">
              <img src="/logo.jpg" alt="Dispatchly Logo" className="w-full h-full object-cover" />
            </div>

            <div>
              <h1 className="text-3xl font-logo font-extrabold tracking-tight tracking-wide">
                <span className="text-blue-950">DISPATCH</span>
                <span className="text-blue-400">LY</span>
              </h1>
              <p className="text-sm text-blue-950 font-medium">Truck Dispatching Solutions</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-blue-950">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
            <Link to="/privacy" className="hover:text-blue-600 transition">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition">Terms</Link>

            <a href="#contact" className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl shadow-lg transition">Book Consultation</a>
          </div>

          <button className="lg:hidden text-blue-950" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] z-40 bg-white border-t border-blue-100 px-6 py-6 space-y-4 text-blue-950 font-semibold shadow-2xl">
          <Link to="/" className="block py-3 rounded-2xl hover:bg-blue-50 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <a href="#services" className="block py-3 rounded-2xl hover:bg-blue-50 transition" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" className="block py-3 rounded-2xl hover:bg-blue-50 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="block py-3 rounded-2xl hover:bg-blue-50 transition" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#pricing" className="block py-3 rounded-2xl hover:bg-blue-50 transition" onClick={() => setMenuOpen(false)}>Pricing</a>
          <Link to="/privacy" className="block py-3 rounded-2xl hover:bg-blue-50 transition" onClick={() => setMenuOpen(false)}>Privacy</Link>
          <Link to="/terms" className="block py-3 rounded-2xl hover:bg-blue-50 transition" onClick={() => setMenuOpen(false)}>Terms</Link>
          <a href="#contact" className="block bg-blue-900 text-white text-center py-3 rounded-2xl hover:bg-blue-800 transition" onClick={() => setMenuOpen(false)}>Book Consultation</a>
        </div>
      )}
    </>
  )
}
