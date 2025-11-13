import { MapPin, User, Building2, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Professional vehicle transportation you can trust
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="group">
              <div className="rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-full h-80 bg-gray-200 flex items-center justify-center transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/10 to-[#e53e3e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-gray-400 text-lg relative z-10 transition-all duration-300 group-hover:text-gray-500 group-hover:scale-105">Image Placeholder</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To provide a high-quality single vehicle transportation service across the UK. As an owner operated business, I can guarantee safety, reliability, confidence and trust.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As part of the service I will manage the whole transportation process from pick up to delivery and agree a bespoke service including collection and delivery times and dates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-t-4 border-[#e53e3e] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:border-[#dc2626] group">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-[#e53e3e] transition-transform duration-300 group-hover:scale-110" size={32} />
                <h3 className="text-xl font-semibold text-[#1a365d]">Owner Operator</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Paul Davies</strong> personally handles all vehicle transportation, ensuring the highest level of care and attention for your vehicle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-t-4 border-[#e53e3e] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:border-[#dc2626] group">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[#e53e3e] transition-transform duration-300 group-hover:scale-110" size={32} />
                <h3 className="text-xl font-semibold text-[#1a365d]">Our Location</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Based in South Northamptonshire, near Brackley, we're ideally positioned to serve clients across the UK.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-t-4 border-[#e53e3e] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:border-[#dc2626] group">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="text-[#e53e3e] transition-transform duration-300 group-hover:scale-110" size={32} />
                <h3 className="text-xl font-semibold text-[#1a365d]">Established Business</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Registered company with full VAT registration, providing professional and accountable service.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Vehicles We Transport</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center group">
                <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] cursor-pointer">
                  <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300">
                    <span className="text-gray-400 text-sm group-hover:text-gray-600 transition-colors">Saloons</span>
                  </div>
                </div>
                <h3 className="font-semibold text-[#1a365d] transition-colors group-hover:text-[#e53e3e]">Saloons</h3>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] cursor-pointer">
                  <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300">
                    <span className="text-gray-400 text-sm group-hover:text-gray-600 transition-colors">SUVs</span>
                  </div>
                </div>
                <h3 className="font-semibold text-[#1a365d] transition-colors group-hover:text-[#e53e3e]">SUVs</h3>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] cursor-pointer">
                  <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300">
                    <span className="text-gray-400 text-sm group-hover:text-gray-600 transition-colors">Classic Cars</span>
                  </div>
                </div>
                <h3 className="font-semibold text-[#1a365d] transition-colors group-hover:text-[#e53e3e]">Classic Cars</h3>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] cursor-pointer">
                  <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300">
                    <span className="text-gray-400 text-sm group-hover:text-gray-600 transition-colors">Prestige Cars</span>
                  </div>
                </div>
                <h3 className="font-semibold text-[#1a365d] transition-colors group-hover:text-[#e53e3e]">Prestige Cars</h3>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] cursor-pointer">
                  <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300">
                    <span className="text-gray-400 text-sm group-hover:text-gray-600 transition-colors">Small Vans</span>
                  </div>
                </div>
                <h3 className="font-semibold text-[#1a365d] transition-colors group-hover:text-[#e53e3e]">Small Vans</h3>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-16 bg-gradient-to-br from-[#1a365d] to-[#0f1419] text-white p-10 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Quote Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Contact us now for a personalized quote. We provide same-day responses and competitive rates for all vehicle transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary group"
              >
                Request Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:07778878862"
                className="btn-secondary backdrop-blur-sm bg-white/10 hover:bg-white hover:text-[#1a365d]"
              >
                <Phone size={20} />
                07778 878862
              </a>
            </div>
          </div>

          <div className="mt-16 bg-[#1a365d] text-white p-8 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]">
            <h2 className="text-2xl font-bold mb-6">Company Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="transition-transform duration-300 hover:translate-x-1">
                <h3 className="font-semibold mb-2 text-[#e53e3e] transition-colors hover:text-[#dc2626]">Registered Address:</h3>
                <p className="leading-relaxed">Millers Barn, Baker Street</p>
                <p className="leading-relaxed">Farthinghoe, Northants</p>
                <p className="leading-relaxed">NN13 5PH</p>
              </div>
              <div className="transition-transform duration-300 hover:translate-x-1">
                <h3 className="font-semibold mb-2 text-[#e53e3e] transition-colors hover:text-[#dc2626]">Company Information:</h3>
                <p className="leading-relaxed">Company Number: 09606346</p>
                <p className="leading-relaxed">VAT Number: 214 4851 23</p>
                <p className="mt-4 leading-relaxed">Owner Operator: Paul Davies</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#e53e3e] to-[#dc2626] text-white p-10 rounded-lg shadow-[0_8px_24px_rgba(229,62,62,0.3)] text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transport Your Vehicle?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact Paul Davies for a personalized quote — Same-day response guaranteed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#e53e3e] px-8 py-4 rounded-lg font-semibold text-lg uppercase tracking-wide transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] inline-flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <ArrowRight size={22} />
              </Link>
              <a
                href="tel:07778878862"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-[#e53e3e] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] inline-flex items-center justify-center gap-2"
              >
                <Phone size={22} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
