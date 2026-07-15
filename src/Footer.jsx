import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-900 text-blue-100 pt-20 pb-10 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-14">
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Dispatchly</h3>
          <p className="text-sm sm:text-base text-blue-200 leading-relaxed max-w-lg">Elite truck dispatch services designed to maximize profits and simplify operations for owner operators and trucking companies.</p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
          <div className="space-y-4 text-sm sm:text-base">
            <Link to="/" className="block hover:text-white transition">Home</Link>
            <a href="#services" className="block hover:text-white transition">Services</a>
            <a href="#about" className="block hover:text-white transition">About</a>
            <a href="#contact" className="block hover:text-white transition">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white mb-6">Contact</h4>
          <div className="space-y-4 text-sm sm:text-base text-blue-100">
            <p>dispatchlyllc@gmail.com</p>
            <p>786 6612071</p>
            <p>Miami, Florida</p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white mb-6">Follow Us</h4>
          <div className="flex flex-wrap gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white hover:text-blue-950 transition flex items-center justify-center cursor-pointer"><FaFacebookF /></div>
            <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white hover:text-blue-950 transition flex items-center justify-center cursor-pointer"><FaInstagram /></div>
            <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white hover:text-blue-950 transition flex items-center justify-center cursor-pointer"><FaLinkedinIn /></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col gap-4 text-sm sm:text-base text-blue-200 md:flex-row md:items-center md:justify-between">
        <p className="text-center md:text-left">© 2026 Dispatchly. All rights reserved.</p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6 md:items-center">
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
