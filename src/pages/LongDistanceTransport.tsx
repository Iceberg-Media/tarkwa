import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle } from 'lucide-react';

export default function LongDistanceTransport() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1a365d] via-[#2d4a7c] to-[#1a365d] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Long Distance Car Transport UK</h1>
            <p className="text-xl md:text-2xl mb-8">Nationwide Vehicle Delivery | Scotland to England Transport</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:07778878862" className="bg-[#e53e3e] hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"><Phone size={24} />Call: 07778 878862</a>
              <Link to="/contact" className="bg-white hover:bg-gray-100 text-[#1a365d] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">UK-Wide Vehicle Transportation</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">Professional long-distance vehicle transport from Scotland to England, London to Scotland, and all cross-country moves throughout the United Kingdom.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <MapPin className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
              <div><h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Nationwide Coverage</h3><p className="text-gray-700">England, Scotland, Wales - we cover the entire UK</p></div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
              <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
              <div><h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Regular Updates</h3><p className="text-gray-700">Location tracking and communication throughout long journeys</p></div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">Long Distance Transport Quote</h2>
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
