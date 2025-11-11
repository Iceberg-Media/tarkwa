import { Link } from 'react-router-dom';
import { Phone, Truck, CheckCircle } from 'lucide-react';

export default function SmallVanTransport() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1a365d] via-[#2d4a7c] to-[#1a365d] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Small Van Transport UK</h1>
            <p className="text-xl md:text-2xl mb-8">Commercial Vehicle Delivery Service</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:07778878862" className="bg-[#e53e3e] hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"><Phone size={24} />Call: 07778 878862</a>
              <Link to="/contact" className="bg-white hover:bg-gray-100 text-[#1a365d] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Professional Small Van Transportation</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">Specialist transport for Transit Connect, VW Caddy, Citroen Berlingo, Peugeot Partner, and all small commercial vans up to 4.5 tonnes.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <Truck className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
              <div><h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Commercial Vehicle Specialists</h3><p className="text-gray-700">Experience with all types of small commercial vehicles</p></div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
              <div><h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Business Transport</h3><p className="text-gray-700">Dealer-to-dealer, auction, and customer delivery services</p></div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">Transport Your Van Today</h2>
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
