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
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden">
              <img src="/logo.jpg" alt="Dispatchly Logo" className="w-full h-full object-cover" />
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-logo font-black tracking-[0.18em] uppercase">
                <span className="text-blue-950">DISPATCH</span>
                <span className="text-blue-400">LY</span>
              </h1>
              <p className="text-[11px] sm:text-xs text-blue-950 font-medium tracking-[0.04em]">Truck Dispatching Solutions</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-blue-950">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/#services" className="hover:text-blue-600 transition">Services</Link>
            <Link to="/#about" className="hover:text-blue-600 transition">About</Link>
            <Link to="/#contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link to="/#pricing" className="hover:text-blue-600 transition">Pricing</Link>
            <Link to="/privacy" className="hover:text-blue-600 transition">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition">Terms</Link>

            <Link to="/#contact" className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-3 rounded-2xl shadow-lg transition">Book Consultation</Link>
          </div>

          <button className="lg:hidden text-blue-950" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] z-40 bg-white border-t border-blue-100 px-4 py-5 space-y-3 text-blue-950 font-semibold shadow-2xl">
          <Link to="/" className="block py-3 rounded-2xl hover:bg-blue-50 transition text-sm" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/#services" className="block py-3 rounded-2xl hover:bg-blue-50 transition text-sm" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/#about" className="block py-3 rounded-2xl hover:bg-blue-50 transition text-sm" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/#contact" className="block py-3 rounded-2xl hover:bg-blue-50 transition text-sm" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/#pricing" className="block py-3 rounded-2xl hover:bg-blue-50 transition text-sm" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link to="/privacy" className="block py-3 rounded-2xl hover:bg-blue-50 transition text-sm" onClick={() => setMenuOpen(false)}>Privacy</Link>
          <Link to="/terms" className="block py-3 rounded-2xl hover:bg-blue-50 transition text-sm" onClick={() => setMenuOpen(false)}>Terms</Link>
          <Link to="/#contact" className="block bg-blue-900 text-white text-center py-3 rounded-2xl hover:bg-blue-800 transition text-sm" onClick={() => setMenuOpen(false)}>Book Consultation</Link>
        </div>
      )}
    </>
  )
}
