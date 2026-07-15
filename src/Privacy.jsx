import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-4">Privacy Policy</h2>

            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">Dispatchly values customer privacy and protects personal and business information.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
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
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-[30px] p-6 sm:p-8 shadow-lg border border-blue-100">
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
