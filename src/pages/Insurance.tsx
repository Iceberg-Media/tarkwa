import { Shield, FileCheck, TrendingUp, CheckCircle } from 'lucide-react';

export default function Insurance() {
  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Insurance & Safety</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive insurance coverage for complete peace of mind
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a365d]">
                Your Vehicle is in Safe Hands
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We maintain comprehensive insurance coverage to protect your vehicle throughout the transportation process. Our policies are designed to give you complete peace of mind when trusting us with your valuable vehicle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-t-4 border-[#e53e3e] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:border-[#dc2626] group">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#e53e3e] w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(229,62,62,0.4)]">
                    <Shield className="text-white transition-transform duration-300 group-hover:scale-110" size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-[#1a365d]">
                  Public Liability Insurance
                </h3>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-[#e53e3e] transition-transform duration-300 group-hover:scale-105">£5 Million</div>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  Comprehensive public liability coverage protecting against third-party claims and ensuring accountability in all operations
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-t-4 border-[#e53e3e] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:border-[#dc2626] group">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#e53e3e] w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(229,62,62,0.4)]">
                    <FileCheck className="text-white transition-transform duration-300 group-hover:scale-110" size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-[#1a365d]">
                  Goods in Transit Insurance
                </h3>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-[#e53e3e] transition-transform duration-300 group-hover:scale-105">£100,000</div>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  Your vehicle is covered during transportation, providing financial protection throughout the entire journey
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-t-4 border-[#e53e3e] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:border-[#dc2626] group">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#e53e3e] w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(229,62,62,0.4)]">
                    <TrendingUp className="text-white transition-transform duration-300 group-hover:scale-110" size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-[#1a365d]">
                  Motor Trade Insurance
                </h3>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-[#e53e3e] transition-transform duration-300 group-hover:scale-105">£60,000</div>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  Specialist motor trade policy covering vehicle movement during loading and unloading operations
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#1a365d] text-center">What This Means For You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] group">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Complete Coverage During Transit</h3>
                    <p className="text-gray-700">
                      Your vehicle is protected from the moment we collect it until safe delivery to your chosen destination
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] group">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Protected Loading & Unloading</h3>
                    <p className="text-gray-700">
                      Motor trade insurance covers your vehicle while being moved onto and off our transport equipment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] group">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Third Party Protection</h3>
                    <p className="text-gray-700">
                      £5 million public liability ensures protection against any third-party claims during operations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] group">
                  <CheckCircle className="text-[#e53e3e] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a365d]">Professional Standards</h3>
                    <p className="text-gray-700">
                      Our comprehensive insurance demonstrates our commitment to professional, accountable service
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a365d] text-white p-8 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:-translate-y-1">
              <h2 className="text-2xl font-bold mb-6">Safety & Documentation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="transition-transform duration-300 hover:translate-x-1">
                  <h3 className="font-semibold mb-3 text-[#e53e3e] text-lg transition-colors duration-300 hover:text-[#dc2626]">Photographic Evidence</h3>
                  <p className="mb-4">
                    We provide comprehensive photographic documentation of your vehicle's condition before collection and after delivery, ensuring complete transparency throughout the process.
                  </p>
                </div>
                <div className="transition-transform duration-300 hover:translate-x-1">
                  <h3 className="font-semibold mb-3 text-[#e53e3e] text-lg transition-colors duration-300 hover:text-[#dc2626]">Regular Communication</h3>
                  <p className="mb-4 leading-relaxed">
                    Stay informed with regular updates and location tracking during transit. We believe in keeping you fully informed about your vehicle's journey.
                  </p>
                </div>
                <div className="transition-transform duration-300 hover:translate-x-1">
                  <h3 className="font-semibold mb-3 text-[#e53e3e] text-lg transition-colors duration-300 hover:text-[#dc2626]">Professional Equipment</h3>
                  <p className="mb-4 leading-relaxed">
                    Our modern fleet and specialist equipment ensure safe loading, secure transport, and careful unloading of your vehicle.
                  </p>
                </div>
                <div className="transition-transform duration-300 hover:translate-x-1">
                  <h3 className="font-semibold mb-3 text-[#e53e3e] text-lg transition-colors duration-300 hover:text-[#dc2626]">Owner Operated Service</h3>
                  <p className="mb-4 leading-relaxed">
                    As an owner-operated business, Paul Davies personally handles every transport, ensuring the highest standards of care and accountability.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-red-50 border-l-4 border-[#e53e3e] p-6 rounded shadow-[0_2px_8px_rgba(229,62,62,0.1)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(229,62,62,0.15)] hover:-translate-x-1">
              <h3 className="font-semibold text-lg mb-3 text-[#1a365d]">Important Information</h3>
              <p className="text-gray-700 mb-3">
                While we provide goods in transit insurance up to £100,000, it remains your responsibility to ensure your vehicle is insured from the date of collection. We recommend confirming with your insurance provider that your policy covers transportation.
              </p>
              <p className="text-gray-700">
                Any mechanical inspections required should be organized before collection. We provide external photographic evidence as standard documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
