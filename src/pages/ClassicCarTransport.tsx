import { Link } from 'react-router-dom';
import { Shield, Camera, Clock, Phone, CheckCircle } from 'lucide-react';

export default function ClassicCarTransport() {
  const faqs = [
    {
      question: 'How do you protect classic cars during transport?',
      answer: 'We use specialist equipment including hydraulic winch systems for gentle loading, secure tie-downs, and provide photographic evidence before and after transport. Our enclosed trailer option provides additional weather protection.'
    },
    {
      question: 'Are classic cars insured during transportation?',
      answer: 'Yes, we provide goods in transit insurance up to £100,000. We recommend discussing your classic car\'s value with us to ensure adequate coverage.'
    },
    {
      question: 'Can you transport non-running classic vehicles?',
      answer: 'Absolutely. Our hydraulic and electric winch systems are specifically designed to safely load non-running vehicles without causing any damage.'
    },
    {
      question: 'Do you transport classic cars to shows and events?',
      answer: 'Yes, we regularly transport classic vehicles to shows, events, auctions, and private collections across the UK.'
    }
  ];

  return (
    <div>
      <section
        className="relative bg-gradient-to-br from-[#1a365d] via-[#2d4a7c] to-[#1a365d] text-white py-20 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Classic Car Transport UK
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Specialist Classic Vehicle Transportation | Vintage Car Delivery Service
            </p>
            <p className="text-lg mb-8">
              Expert handling of your cherished classic, vintage, and historic vehicles across the UK
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
                  Specialist Classic Car Transport
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Your classic car represents a significant investment of time, money, and passion. At Tarkwa Auto Transport, we understand the unique requirements of transporting vintage and classic vehicles across the UK.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Based in South Northamptonshire near Brackley, we provide owner-operated classic car transportation throughout England, Scotland, and Wales. Every classic vehicle receives the careful, expert handling it deserves.
                </p>
                <div className="bg-[#e53e3e] text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Fully Insured Service</h3>
                  <p className="mb-2">✓ £100,000 Goods in Transit Insurance</p>
                  <p className="mb-2">✓ £5 Million Public Liability</p>
                  <p>✓ Specialist Motor Trade Cover</p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
                  alt="Classic Car Transport"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>

            <div className="bg-gray-50 py-12 -mx-4 px-4 mb-16">
              <h2 className="text-3xl font-bold mb-12 text-[#1a365d] text-center">
                Why Choose Tarkwa for Classic Car Transport?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Expert Handling</h3>
                  <p className="text-gray-700">Specialist equipment and techniques for classic vehicles</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Full Documentation</h3>
                  <p className="text-gray-700">Photographic evidence before and after transport</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Flexible Timing</h3>
                  <p className="text-gray-700">Agreed collection and delivery time slots</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1a365d]">Owner Operated</h3>
                  <p className="text-gray-700">Personal service from Paul Davies</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Classic Vehicles We Transport</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#1a365d]">Pre-War Classics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Vintage cars (pre-1930)</li>
                    <li>• Veteran vehicles</li>
                    <li>• Historic automobiles</li>
                    <li>• Rare pre-war models</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#1a365d]">Post-War Classics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 1950s-1960s classics</li>
                    <li>• British sports cars</li>
                    <li>• American muscle cars</li>
                    <li>• European classics</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#1a365d]">Modern Classics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 1970s-1990s models</li>
                    <li>• Future classics</li>
                    <li>• Collector vehicles</li>
                    <li>• Limited editions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Our Classic Car Transport Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Safe Loading Systems</h3>
                    <p className="text-gray-700">Hydraulic winch and tilt bed for gentle, controlled loading of your classic car without risk of damage</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Secure Transportation</h3>
                    <p className="text-gray-700">Professional tie-down points and secure fixing to prevent movement during transit</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Non-Running Vehicles</h3>
                    <p className="text-gray-700">Specialist equipment to safely handle restoration projects and non-running classic cars</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Regular Updates</h3>
                    <p className="text-gray-700">Communication throughout the journey with location updates and progress reports</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Show & Event Transport</h3>
                    <p className="text-gray-700">Reliable service to classic car shows, auctions, and events across the UK</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Collection & Delivery</h3>
                    <p className="text-gray-700">From private homes, auction houses, workshops, and storage facilities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a365d] text-white p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Service Areas</h2>
              <p className="text-center mb-6">
                Based in Northamptonshire, we provide classic car transport throughout the UK
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>Northamptonshire</div>
                <div>Buckinghamshire</div>
                <div>Oxfordshire</div>
                <div>Warwickshire</div>
                <div>Leicestershire</div>
                <div>Milton Keynes</div>
                <div>Brackley</div>
                <div>UK Wide</div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">Ready to Transport Your Classic Car?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Contact Paul Davies for a quote and to discuss your classic vehicle transportation requirements
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
                  className="bg-[#1a365d] hover:bg-[#2d4a7c] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Office: 01295 711897
                </a>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-[#1a365d] border-2 border-[#1a365d] px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#1a365d]">Related Services</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/prestige-car-transport" className="text-[#e53e3e] hover:underline">Prestige Car Transport</Link>
                <Link to="/auction-transport" className="text-[#e53e3e] hover:underline">Auction Collection</Link>
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
