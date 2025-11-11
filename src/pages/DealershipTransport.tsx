import { Link } from 'react-router-dom';
import { Truck, Repeat, Clock, Phone, CheckCircle } from 'lucide-react';

export default function DealershipTransport() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1a365d] via-[#2d4a7c] to-[#1a365d] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Car Dealership Vehicle Transport</h1>
            <p className="text-xl md:text-2xl mb-8">Trade Vehicle Delivery | Dealer-to-Dealer Transport</p>
            <p className="text-lg mb-8">Professional vehicle transportation services for car dealerships across the UK</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:07778878862" className="bg-[#e53e3e] hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Phone size={24} />Call: 07778 878862
              </a>
              <Link to="/contact" className="bg-white hover:bg-gray-100 text-[#1a365d] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">Reliable Dealership Transport Service</h2>
              <p className="text-lg text-gray-700 mb-6">Tarkwa Auto Transport provides professional vehicle transportation for car dealerships throughout the UK. Whether you need dealer-to-dealer transport, auction collection, or customer delivery, we offer reliable service you can trust.</p>
              <p className="text-lg text-gray-700 mb-6">Based in Northamptonshire near Brackley, we understand the commercial needs of dealerships including time-sensitive deliveries and flexible scheduling.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1562519819-016a5668295d?w=800&q=80" alt="Dealership Transport" className="rounded-lg shadow-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Dealer-to-Dealer Transport</h3>
                <p className="text-gray-700">Professional transport between dealership locations across the UK</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Auction Collection</h3>
                <p className="text-gray-700">Reliable collection from BCA, Manheim, and other auction houses</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Customer Deliveries</h3>
                <p className="text-gray-700">Professional delivery service to your customers' locations</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Trade Plate Available</h3>
                <p className="text-gray-700">Motor trade insurance for moving vehicles as required</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">Contact Us for Dealership Transport</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:07778878862" className="btn-primary">Call: 07778 878862</a>
              <Link to="/contact" className="btn-secondary-dark">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
