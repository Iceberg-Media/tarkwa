import { Link } from 'react-router-dom';
import { CheckCircle, Truck, Camera, MapPin, Clock, Phone as PhoneIcon, ArrowRight } from 'lucide-react';

export default function Services() {
  const specialistServices = [
    { path: '/classic-car-transport', title: 'Classic Car Transport', description: 'Specialist vintage and classic vehicle transportation' },
    { path: '/prestige-car-transport', title: 'Prestige Car Transport', description: 'Luxury and high-value vehicle delivery service' },
    { path: '/auction-transport', title: 'Auction Collection', description: 'BCA, Manheim, and specialist auction house services' },
    { path: '/dealership-transport', title: 'Dealership Transport', description: 'Trade vehicle delivery for car dealerships' },
    { path: '/suv-transport', title: 'SUV & 4x4 Transport', description: 'Large vehicle and 4x4 transportation' },
    { path: '/same-day-delivery', title: 'Same Day Delivery', description: 'Urgent and time-critical vehicle transport' },
    { path: '/long-distance-transport', title: 'Long Distance Transport', description: 'UK-wide nationwide vehicle delivery' },
    { path: '/small-van-transport', title: 'Small Van Transport', description: 'Commercial vehicle transportation services' }
  ];

  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            UK Wide Owner Operated Single Vehicle Collection & Delivery Service
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-[#1a365d] text-center">Specialist Transport Services</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Explore our dedicated vehicle transportation services tailored to your specific needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {specialistServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 group border border-transparent hover:border-[#e53e3e]/20"
              >
                <h3 className="font-semibold text-lg mb-2 text-[#1a365d] group-hover:text-[#e53e3e] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center text-[#e53e3e] text-sm font-semibold">
                  Learn More <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-[#e53e3e] text-white p-8 rounded-lg mb-12 shadow-[0_8px_24px_rgba(220,38,38,0.25)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(220,38,38,0.3)] hover:-translate-y-1">
              <h2 className="text-3xl font-bold mb-6 text-center">Vehicle Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="transition-transform duration-300 hover:scale-105">
                  <div className="text-4xl font-bold mb-2">≤ 4.5t</div>
                  <div className="text-lg">Maximum Weight</div>
                </div>
                <div className="transition-transform duration-300 hover:scale-105">
                  <div className="text-4xl font-bold mb-2">≤ 2m</div>
                  <div className="text-lg">Maximum Width</div>
                </div>
                <div className="transition-transform duration-300 hover:scale-105">
                  <div className="text-4xl font-bold mb-2">≤ 6m</div>
                  <div className="text-lg">Maximum Length</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">What's Included in Our Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] group">
                <Clock className="text-[#e53e3e] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={32} />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Agreed Time Slots</h3>
                  <p className="text-gray-700">Flexible collection and delivery times arranged to suit your schedule</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] group">
                <PhoneIcon className="text-[#e53e3e] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={32} />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Regular Communication</h3>
                  <p className="text-gray-700">Stay informed throughout the transportation process</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] group">
                <MapPin className="text-[#e53e3e] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={32} />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Location Updates</h3>
                  <p className="text-gray-700">Real-time updates on your vehicle's location during transit</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] group">
                <Camera className="text-[#e53e3e] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={32} />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Photographic Evidence</h3>
                  <p className="text-gray-700">Photos taken before collection and following delivery</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] group">
                <Truck className="text-[#e53e3e] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={32} />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Same-Day Delivery</h3>
                  <p className="text-gray-700">Most vehicles collected and delivered on the same day</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] group">
                <CheckCircle className="text-[#e53e3e] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={32} />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Bespoke Service</h3>
                  <p className="text-gray-700">Tailored to meet your specific requirements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 py-16 -mx-4 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-12 text-[#1a365d] text-center">Collection & Delivery Locations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] group">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative transition-all duration-300 group-hover:bg-gray-300">
                    <span className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-600 group-hover:scale-105">Private Premises</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1a365d] transition-colors duration-300 group-hover:text-[#e53e3e]">Private Premises</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Collection and delivery directly from your home or any private location across the UK
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] group">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative transition-all duration-300 group-hover:bg-gray-300">
                    <span className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-600 group-hover:scale-105">Auction Houses</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1a365d] transition-colors duration-300 group-hover:text-[#e53e3e]">Auction Houses</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Professional service to and from all major UK auction houses with coordinated timing
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] group">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative transition-all duration-300 group-hover:bg-gray-300">
                    <span className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-600 group-hover:scale-105">Car Dealerships</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1a365d] transition-colors duration-300 group-hover:text-[#e53e3e]">Car Dealerships</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Reliable transportation service for dealerships with scheduled collection and delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Business Hours</h2>
            <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden mb-12 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
              <table className="w-full">
                <thead className="bg-[#1a365d] text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Day</th>
                    <th className="py-4 px-6 text-left">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition-colors duration-200 hover:bg-gray-100">
                    <td className="py-4 px-6 font-semibold">Monday</td>
                    <td className="py-4 px-6">08:00 to 18:00</td>
                  </tr>
                  <tr className="border-b bg-gray-50 transition-colors duration-200 hover:bg-gray-100">
                    <td className="py-4 px-6 font-semibold">Tuesday</td>
                    <td className="py-4 px-6">08:00 to 18:00</td>
                  </tr>
                  <tr className="border-b transition-colors duration-200 hover:bg-gray-100">
                    <td className="py-4 px-6 font-semibold">Wednesday</td>
                    <td className="py-4 px-6">08:00 to 18:00</td>
                  </tr>
                  <tr className="border-b bg-gray-50 transition-colors duration-200 hover:bg-gray-100">
                    <td className="py-4 px-6 font-semibold">Thursday</td>
                    <td className="py-4 px-6">08:00 to 18:00</td>
                  </tr>
                  <tr className="border-b transition-colors duration-200 hover:bg-gray-100">
                    <td className="py-4 px-6 font-semibold">Friday</td>
                    <td className="py-4 px-6">08:00 to 18:00</td>
                  </tr>
                  <tr className="border-b bg-gray-50 transition-colors duration-200 hover:bg-gray-100">
                    <td className="py-4 px-6 font-semibold">Saturday</td>
                    <td className="py-4 px-6 text-[#e53e3e] font-semibold">Closed</td>
                  </tr>
                  <tr className="bg-gray-50 transition-colors duration-200 hover:bg-gray-100">
                    <td className="py-4 px-6 font-semibold">Sunday</td>
                    <td className="py-4 px-6 text-[#e53e3e] font-semibold">Closed</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-[#e53e3e] text-white p-4 text-center">
                <p className="font-semibold">Please note: We are closed on all Bank Holidays throughout the year</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-[#1a365d] text-white p-8 rounded-lg text-center shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:-translate-y-1">
              <h2 className="text-3xl font-bold mb-4">Ready to Book Your Transport?</h2>
              <p className="text-xl mb-6 leading-relaxed">
                Contact us today to discuss your vehicle transportation needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:07778878862"
                  className="btn-primary"
                >
                  Call: 07778 878862
                </a>
                <a
                  href="tel:01295711897"
                  className="btn-secondary"
                >
                  Office: 01295 711897
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
