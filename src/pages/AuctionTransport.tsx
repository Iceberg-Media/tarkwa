import { Link } from 'react-router-dom';
import { Clock, MapPin, FileCheck, Phone, CheckCircle } from 'lucide-react';

export default function AuctionTransport() {
  const auctionHouses = [
    'BCA (British Car Auctions)',
    'Manheim Auctions',
    'Aston Barclay',
    'Brightwells',
    'H&H Classics',
    'Silverstone Auctions',
    'Bonhams',
    'RM Sotheby\'s'
  ];

  return (
    <div>
      <section
        className="relative bg-gradient-to-br from-[#1a365d] via-[#2d4a7c] to-[#1a365d] text-white py-20 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Auction House Vehicle Collection & Delivery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              BCA | Manheim | Aston Barclay | Specialist Auctions
            </p>
            <p className="text-lg mb-8">
              Professional auction house collection and delivery service across the UK
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
                  Expert Auction House Transport
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Whether you've purchased a vehicle from BCA, Manheim, Aston Barclay, or specialist classic car auctions, Tarkwa Auto Transport provides reliable collection and delivery services.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Based in Northamptonshire near Brackley, we understand the time-sensitive nature of auction collections and work to agreed deadlines. Our service covers all major UK auction houses and specialist sales.
                </p>
                <div className="bg-[#e53e3e] text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Time-Critical Service</h3>
                  <p className="mb-2">✓ Collection within auction deadlines</p>
                  <p className="mb-2">✓ Same-day delivery available</p>
                  <p>✓ Flexible scheduling to suit auction terms</p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1562519819-016a5668295d?w=800&q=80"
                  alt="Auction House Transport"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>

            <div className="bg-gray-50 py-12 -mx-4 px-4 mb-16">
              <h2 className="text-3xl font-bold mb-12 text-[#1a365d] text-center">
                Why Choose Tarkwa for Auction Collections?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Time-Sensitive</h3>
                  <p className="text-gray-700">Meet auction house collection deadlines</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">UK Coverage</h3>
                  <p className="text-gray-700">All major auction houses nationwide</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Documentation</h3>
                  <p className="text-gray-700">Photographic evidence and paperwork</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Experienced</h3>
                  <p className="text-gray-700">Regular auction house collections</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Auction Houses We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {auctionHouses.map((house, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow text-center font-semibold text-gray-700">
                    {house}
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-gray-600">Plus many other regional and specialist auction houses</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Our Auction Transport Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Pre-Arranged Collections</h3>
                    <p className="text-gray-700">Book in advance to ensure timely collection within auction house deadlines</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Auction House Coordination</h3>
                    <p className="text-gray-700">We liaise directly with auction house staff for smooth collections</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Non-Running Vehicles</h3>
                    <p className="text-gray-700">Equipped to collect non-runners and project vehicles from auctions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Photographic Evidence</h3>
                    <p className="text-gray-700">Photos taken at collection to document vehicle condition</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Same Day Delivery</h3>
                    <p className="text-gray-700">Most vehicles collected and delivered on the same day</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Multiple Locations</h3>
                    <p className="text-gray-700">Deliver to your home, garage, or onward to another auction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a365d] text-white p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-bold mb-6">Important Information for Auction Collections</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-[#e53e3e]">Booking:</strong> Please ensure you have confirmed with the auction house that they will release the vehicle at the agreed date and time.
                </p>
                <p>
                  <strong className="text-[#e53e3e]">Payment:</strong> Most auction houses require payment to be cleared before vehicle release. Please arrange this in advance.
                </p>
                <p>
                  <strong className="text-[#e53e3e]">Documentation:</strong> Ensure all necessary paperwork is in order for collection including proof of purchase and ID.
                </p>
                <p>
                  <strong className="text-[#e53e3e]">Collection Deadlines:</strong> We work to meet auction house collection deadlines but recommend booking as early as possible.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">Need Auction Collection?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Contact us to arrange collection from any UK auction house
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
                <Link to="/prestige-car-transport" className="text-[#e53e3e] hover:underline">Prestige Car Transport</Link>
                <Link to="/dealership-transport" className="text-[#e53e3e] hover:underline">Dealership Transport</Link>
                <Link to="/services" className="text-[#e53e3e] hover:underline">All Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
