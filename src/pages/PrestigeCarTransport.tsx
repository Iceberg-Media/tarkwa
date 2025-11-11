import { Link } from 'react-router-dom';
import { Shield, Award, Lock, Phone, CheckCircle } from 'lucide-react';

export default function PrestigeCarTransport() {
  const brands = [
    'Bentley', 'Rolls-Royce', 'Ferrari', 'Lamborghini', 'McLaren', 'Porsche',
    'Aston Martin', 'Maserati', 'Mercedes-AMG', 'BMW M Series', 'Audi RS',
    'Range Rover', 'Jaguar', 'Lotus'
  ];

  return (
    <div>
      <section
        className="relative bg-gradient-to-br from-[#1a365d] via-[#2d4a7c] to-[#1a365d] text-white py-20 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Prestige Car Transport UK
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Luxury Vehicle Transportation | Supercar Delivery Service
            </p>
            <p className="text-lg mb-8">
              Expert, secure transport for high-value and luxury vehicles across the United Kingdom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07778878862"
                className="btn-primary"
              >
                <Phone size={24} />
                Call: 07778 878862
              </a>
              <Link
                to="/contact"
                className="btn-secondary-dark"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a365d]">
                  Specialist Prestige & Luxury Car Transport
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  High-value vehicles demand exceptional care and expertise. Tarkwa Auto Transport provides premium transportation services for prestige, luxury, and supercar owners throughout the UK.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Operating from Northamptonshire near Brackley, we serve discerning clients across England, Scotland, and Wales. Our owner-operated service ensures your prestigious vehicle receives personal attention from collection to delivery.
                </p>
                <div className="bg-[#e53e3e] text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Premium Insurance Coverage</h3>
                  <p className="mb-2">✓ £100,000 Goods in Transit Insurance</p>
                  <p className="mb-2">✓ £5 Million Public Liability</p>
                  <p className="mb-2">✓ Specialist Motor Trade Policy</p>
                  <p className="text-sm mt-3 opacity-90">Higher value coverage available on request</p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80"
                  alt="Prestige Car Transport"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>

            <div className="bg-gray-50 py-12 -mx-4 px-4 mb-16">
              <h2 className="text-3xl font-bold mb-12 text-[#1a365d] text-center">
                Why Trust Us With Your Prestige Vehicle?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Owner Operated</h3>
                  <p className="text-gray-700">Paul Davies personally handles every transport</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Fully Insured</h3>
                  <p className="text-gray-700">Comprehensive coverage for high-value vehicles</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Secure Transport</h3>
                  <p className="text-gray-700">Professional equipment and secure loading systems</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Documentation</h3>
                  <p className="text-gray-700">Full photographic evidence and condition reports</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Prestige Brands We Transport</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {brands.map((brand, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow text-center font-semibold text-gray-700">
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Our Premium Service Includes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Gentle Loading Systems</h3>
                    <p className="text-gray-700">Hydraulic tilt bed and winch for safe, controlled loading without risk to low-profile vehicles</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Photographic Documentation</h3>
                    <p className="text-gray-700">Detailed photos before collection and after delivery for your records</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Real-Time Updates</h3>
                    <p className="text-gray-700">Regular communication and location updates throughout the journey</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Flexible Scheduling</h3>
                    <p className="text-gray-700">Agreed time slots for collection and delivery to suit your requirements</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Dealer & Auction Services</h3>
                    <p className="text-gray-700">Collection and delivery to prestige dealerships and auction houses nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Same Day Service</h3>
                    <p className="text-gray-700">Most vehicles collected and delivered on the same day</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a365d] text-white p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-bold mb-6">Common Transport Scenarios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-[#e53e3e] text-lg">Purchase Transport</h3>
                  <p>Secure delivery of your newly purchased prestige vehicle from dealer or private seller to your location</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-[#e53e3e] text-lg">Auction Collection</h3>
                  <p>Professional collection from prestigious auction houses including specialist supercar sales</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-[#e53e3e] text-lg">Service & Maintenance</h3>
                  <p>Transport to specialist service centers, workshops, and authorized dealers</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-[#e53e3e] text-lg">Storage & Collection</h3>
                  <p>Seasonal transport to and from secure storage facilities</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">Transport Your Prestige Vehicle Today</h2>
              <p className="text-lg text-gray-700 mb-6">
                Contact us to discuss your luxury vehicle transportation requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:07778878862"
                  className="btn-primary"
                >
                  Call: 07778 878862
                </a>
                <Link
                  to="/contact"
                  className="bg-[#1a365d] hover:bg-[#2d4a7c] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#1a365d]">Related Services</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/classic-car-transport" className="text-[#e53e3e] hover:underline">Classic Car Transport</Link>
                <Link to="/suv-transport" className="text-[#e53e3e] hover:underline">SUV Transport</Link>
                <Link to="/same-day-delivery" className="text-[#e53e3e] hover:underline">Same Day Delivery</Link>
                <Link to="/services" className="text-[#e53e3e] hover:underline">All Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
