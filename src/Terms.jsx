import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-4">Terms & Conditions</h2>

            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">By using Dispatchly services, users agree to the following terms and communication policies.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
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
              <div key={index} className="bg-white rounded-[30px] p-6 sm:p-8 shadow-lg border border-blue-100">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
