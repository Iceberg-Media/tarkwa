import { FileText, Scale, Shield, AlertCircle, CheckCircle, Ban, Clock } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
            <p className="text-xl">
              Tarkwa Auto Transport Ltd (Tarkwa (PHD) Ltd)
            </p>
            <p className="text-sm mt-2 opacity-90">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions govern the use of our vehicle transportation services. By engaging Tarkwa Auto Transport Ltd to transport your vehicle, you agree to be bound by these terms. Please read them carefully before booking our services.
              </p>
            </div>

            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">About Tarkwa Auto Transport</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tarkwa Auto Transport Ltd (trading as Tarkwa (PHD) Ltd) is a professional vehicle transportation service based in Northamptonshire, UK. We specialise in the safe and secure transportation of saloons, SUVs, classic cars, prestige vehicles, and small vans throughout the United Kingdom.
                </p>
                <div className="bg-gray-50 p-4 rounded mt-4">
                  <p className="text-gray-700"><strong className="text-[#1a365d]">Company Number:</strong> 09606346</p>
                  <p className="text-gray-700"><strong className="text-[#1a365d]">VAT Number:</strong> 214 4851 23</p>
                  <p className="text-gray-700"><strong className="text-[#1a365d]">Owner Operator:</strong> Paul Davies</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#e53e3e] p-3 rounded-lg flex-shrink-0">
                  <FileText className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">Service Agreement</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you book a vehicle transportation service with Tarkwa Auto Transport, you enter into an agreement for the transportation of your vehicle from the agreed collection point to the agreed delivery destination.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">All bookings must include accurate vehicle details, collection location, delivery location, and preferred dates/times</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">We will confirm availability and provide a quotation for the service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">Once confirmed, we will agree specific collection and delivery time slots</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">A contract is formed upon your acceptance of our quotation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">Vehicle Requirements and Limitations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For your safety and ours, we can only transport vehicles that meet the following requirements:
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-semibold text-[#1a365d] mb-2">Weight Limit</h3>
                    <p className="text-gray-700">Maximum vehicle weight: 4.5 tonnes or less</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-semibold text-[#1a365d] mb-2">Width Limit</h3>
                    <p className="text-gray-700">Maximum vehicle width: 2 metres</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-semibold text-[#1a365d] mb-2">Length Limit</h3>
                    <p className="text-gray-700">Maximum vehicle length: 6 metres</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-semibold text-[#1a365d] mb-2">Non-Running Vehicles</h3>
                    <p className="text-gray-700">We can transport non-running vehicles using our hydraulic and electric winches. Please inform us at the time of booking if your vehicle is not running.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#e53e3e] p-3 rounded-lg flex-shrink-0">
                  <Shield className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">Insurance and Liability</h2>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
                    <p className="text-gray-700 font-semibold mb-2">Goods in Transit Insurance</p>
                    <p className="text-gray-700">Tarkwa Auto Transport provides Goods in Transit (GiT) insurance covering your vehicle up to £100,000 during transportation.</p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
                    <p className="text-gray-700 font-semibold mb-2">Motor Trade Insurance</p>
                    <p className="text-gray-700">We operate under a comprehensive motor trade insurance policy, which covers the vehicle during loading and unloading operations.</p>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                    <p className="text-gray-700 font-semibold mb-2">Your Responsibility</p>
                    <p className="text-gray-700 mb-2">It is your responsibility to ensure that your vehicle is insured from the date of collection. We strongly recommend confirming with your insurance provider that your policy covers transportation.</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">Photographic Evidence</h3>
                    <p className="text-gray-700">We provide photographic evidence of your vehicle's external condition at both collection and delivery to ensure complete documentation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payment for our services is required as follows:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Payment is due upon completion of the transportation service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">We accept payment by bank transfer, cash, or card (subject to arrangement)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">If overnight accommodation is required during transport, this cost will be added to the agreed price</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">VAT is included in all quoted prices</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#e53e3e] p-3 rounded-lg flex-shrink-0">
                  <Ban className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">Cancellation Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We understand that circumstances can change. However, we must apply the following cancellation charges to cover our operational costs:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded">
                      <h3 className="font-semibold text-[#1a365d] mb-2">Cancellation within 24 hours of collection</h3>
                      <p className="text-gray-700">A cancellation charge will be applied if you cancel within 24 hours of the agreed collection date.</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-4 rounded">
                      <h3 className="font-semibold text-[#1a365d] mb-2">Cancellation at or after collection time</h3>
                      <p className="text-gray-700">If cancellation occurs at or after the agreed time of collection, the full price will be charged.</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 p-4 rounded">
                      <h3 className="font-semibold text-[#1a365d] mb-2">Cancellation more than 24 hours before collection</h3>
                      <p className="text-gray-700">No cancellation charges apply if you cancel more than 24 hours before the agreed collection date.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">Collection and Delivery</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#1a365d] flex items-center gap-2">
                    <Clock className="text-[#e53e3e]" size={24} />
                    Timing
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">Most vehicles are collected and delivered on the same day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">The exact time in transit depends on the distance to be travelled</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">We provide regular location updates during transport</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">Collection/Delivery Locations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">We can collect from and deliver to private premises, auction houses, and dealerships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">You must ensure that auction houses or dealerships have agreed to the date and time and will accept or release the vehicle as required</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">Collection and delivery locations must have adequate access for our transportation equipment</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">Your Responsibilities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">Ensure someone is present at collection and delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">Provide accurate vehicle keys and any relevant documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">Ensure the vehicle is ready for collection at the agreed time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">Remove all personal items from the vehicle before collection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#e53e3e] p-3 rounded-lg flex-shrink-0">
                  <AlertCircle className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">Vehicle Condition and Inspections</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To protect both parties, we document the vehicle condition thoroughly:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">The vehicle owner should organise any mechanical inspection required before collection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">We provide photographic external evidence at both collection and delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">Any pre-existing damage should be noted and photographed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#e53e3e] font-bold mt-1">•</span>
                      <span className="text-gray-700">You should inspect the vehicle upon delivery and report any concerns immediately</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we take every care with your vehicle, please note the following limitations:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#e53e3e] font-bold mt-1">•</span>
                    <span className="text-gray-700">Our liability is limited to the maximum insurance coverage of £100,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#e53e3e] font-bold mt-1">•</span>
                    <span className="text-gray-700">We are not liable for damage caused by acts of God, severe weather, or circumstances beyond our control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#e53e3e] font-bold mt-1">•</span>
                    <span className="text-gray-700">We are not liable for personal items left in the vehicle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#e53e3e] font-bold mt-1">•</span>
                    <span className="text-gray-700">Any claims must be made in writing within 7 days of delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#e53e3e] font-bold mt-1">•</span>
                    <span className="text-gray-700">We are not liable for delays caused by traffic, road closures, or other circumstances beyond our control</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">Complaints and Disputes</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any concerns about our service:
                </p>
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>Contact us immediately by phone or email</li>
                  <li>We will investigate your complaint thoroughly</li>
                  <li>We aim to resolve all complaints within 14 working days</li>
                  <li>If we cannot reach a satisfactory resolution, you may pursue formal dispute resolution</li>
                </ol>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-[#1a365d] text-white p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Governing Law</h2>
                <p className="mb-4">
                  These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales.
                </p>
                <p>
                  Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">Changes to Terms and Conditions</h2>
                <p className="text-gray-700 leading-relaxed">
                  Tarkwa Auto Transport reserves the right to modify these Terms and Conditions at any time. Any changes will be posted on our website and will apply to all bookings made after the date of posting. It is your responsibility to review these terms regularly.
                </p>
              </div>
            </div>

            <div className="bg-[#1a365d] text-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <Shield size={48} className="flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-[#2d4a7c] p-6 rounded-lg space-y-3">
                    <p>
                      <strong className="text-[#e53e3e]">Company:</strong> Tarkwa Auto Transport Ltd (Tarkwa (PHD) Ltd)
                    </p>
                    <p>
                      <strong className="text-[#e53e3e]">Email:</strong> <a href="mailto:info@tarkwa.co.uk" className="hover:text-[#e53e3e] transition-colors">info@tarkwa.co.uk</a>
                    </p>
                    <p>
                      <strong className="text-[#e53e3e]">Mobile:</strong> <a href="tel:07778878862" className="hover:text-[#e53e3e] transition-colors">07778 878862</a>
                    </p>
                    <p>
                      <strong className="text-[#e53e3e]">Office:</strong> <a href="tel:01295711897" className="hover:text-[#e53e3e] transition-colors">01295 711897</a>
                    </p>
                    <p className="pt-3 border-t border-[#1a365d]">
                      <strong className="text-[#e53e3e]">Address:</strong><br />
                      Millers Barn, Baker Street<br />
                      Farthinghoe, Northants<br />
                      NN13 5PH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-600 text-sm mt-8">
              <p>Last Updated: November 2025</p>
              <p className="mt-2">Tarkwa Auto Transport Ltd (Tarkwa (PHD) Ltd) | Company Number: 09606346 | VAT: 214 4851 23</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
