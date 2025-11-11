import { Truck, Package, Weight, Ruler } from 'lucide-react';

export default function Equipment() {
  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Equipment & Fleet</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Professional grade equipment for safe and secure vehicle transportation
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="group">
                <div className="rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-full h-80 bg-gray-200 flex items-center justify-center transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/10 to-[#e53e3e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="text-gray-400 text-lg relative z-10 transition-all duration-300 group-hover:text-gray-500 group-hover:scale-105">ISUZU Forward Recovery Truck</span>
                </div>
              </div>
              <div>
                <div className="inline-block bg-[#e53e3e] text-white px-4 py-2 rounded-lg mb-4 font-semibold shadow-[0_2px_8px_rgba(229,62,62,0.3)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(229,62,62,0.4)] hover:-translate-y-0.5">
                  Primary Transport Vehicle
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">
                  2018 ISUZU Forward N75.190 7.5T
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] group">
                    <Truck className="text-[#e53e3e] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Roger Dyson Alloy Tilt & Slide Body</h3>
                      <p className="text-gray-700">
                        Professional grade tilt and slide recovery body designed for safe vehicle loading and transport
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] group">
                    <Package className="text-[#e53e3e] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hydraulic Winch</h3>
                      <p className="text-gray-700">
                        Powerful hydraulic winch system for smooth and controlled loading of vehicles
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] group">
                    <Weight className="text-[#e53e3e] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">7.5 Tonne Capacity</h3>
                      <p className="text-gray-700">
                        Capable of transporting vehicles up to 4.5 tonnes with superior stability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">Vehicle Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] group">
                  <div className="text-[#e53e3e] mb-3 flex justify-center transition-transform duration-300 group-hover:scale-110">
                    <Truck size={48} />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-[#1a365d]">Modern Fleet</h3>
                  <p className="text-gray-700">2018 ISUZU Forward in excellent condition</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] group">
                  <div className="text-[#e53e3e] mb-3 flex justify-center transition-transform duration-300 group-hover:scale-110">
                    <Weight size={48} />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-[#1a365d]">Robust Construction</h3>
                  <p className="text-gray-700">Roger Dyson alloy body built to last</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] group">
                  <div className="text-[#e53e3e] mb-3 flex justify-center transition-transform duration-300 group-hover:scale-110">
                    <Package size={48} />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-[#1a365d]">Safe Loading</h3>
                  <p className="text-gray-700">Hydraulic winch for controlled operation</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-[#e53e3e] text-white px-4 py-2 rounded-lg mb-4 font-semibold shadow-[0_2px_8px_rgba(229,62,62,0.3)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(229,62,62,0.4)] hover:-translate-y-0.5">
                  Specialist Trailer
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">
                  Brian James T Transporter
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] group">
                    <Ruler className="text-[#e53e3e] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Dimensions: 5.0m x 2.1m</h3>
                      <p className="text-gray-700">
                        Spacious deck accommodating a wide range of vehicle sizes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] group">
                    <Weight className="text-[#e53e3e] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">3.5 Tonne Load Capacity</h3>
                      <p className="text-gray-700">
                        Heavy-duty 3 axle design with 10" wheels for stability
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] group">
                    <Package className="text-[#e53e3e] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Advanced Features</h3>
                      <p className="text-gray-700 mb-2">
                        1.8m loading ramps for easy vehicle access
                      </p>
                      <p className="text-gray-700 mb-2">
                        Electric tilt bed for controlled loading
                      </p>
                      <p className="text-gray-700">
                        8000lbs electric winch for secure vehicle handling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 group">
                <div className="rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-full h-80 bg-gray-200 flex items-center justify-center transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/10 to-[#e53e3e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="text-gray-400 text-lg relative z-10 transition-all duration-300 group-hover:text-gray-500 group-hover:scale-105">Brian James Transporter Trailer</span>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-[#1a365d] text-white p-8 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:-translate-y-1">
              <h2 className="text-2xl font-bold mb-6 text-center">Trailer Specifications Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center transition-transform duration-300 hover:scale-105">
                  <div className="text-3xl font-bold mb-2 text-[#e53e3e]">5.0m x 2.1m</div>
                  <div className="text-sm">Deck Size</div>
                </div>
                <div className="text-center transition-transform duration-300 hover:scale-105">
                  <div className="text-3xl font-bold mb-2 text-[#e53e3e]">3.5t</div>
                  <div className="text-sm">Load Capacity</div>
                </div>
                <div className="text-center transition-transform duration-300 hover:scale-105">
                  <div className="text-3xl font-bold mb-2 text-[#e53e3e]">3 Axle</div>
                  <div className="text-sm">10" Wheels</div>
                </div>
                <div className="text-center transition-transform duration-300 hover:scale-105">
                  <div className="text-3xl font-bold mb-2 text-[#e53e3e]">8000lbs</div>
                  <div className="text-sm">Electric Winch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
