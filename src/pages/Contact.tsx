import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    collectionLocation: '',
    deliveryLocation: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://usebasin.com/f/6406ff2a1160', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          vehicleType: '',
          collectionLocation: '',
          deliveryLocation: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Get in touch to discuss your vehicle transportation needs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] group">
              <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(229,62,62,0.4)]">
                <Phone className="text-white transition-transform duration-300 group-hover:scale-110" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">Phone</h3>
              <p className="text-gray-700 mb-2">
                <strong>Mobile:</strong><br />
                <a href="tel:07778878862" className="text-[#e53e3e] hover:underline text-lg">
                  07778 878862
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Office:</strong><br />
                <a href="tel:01295711897" className="text-[#e53e3e] hover:underline text-lg">
                  01295 711897
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] group">
              <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(229,62,62,0.4)]">
                <Mail className="text-white transition-transform duration-300 group-hover:scale-110" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">Email</h3>
              <a href="mailto:info@tarkwa.co.uk" className="text-[#e53e3e] hover:underline text-lg">
                info@tarkwa.co.uk
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] group">
              <div className="bg-[#e53e3e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(229,62,62,0.4)]">
                <MapPin className="text-white transition-transform duration-300 group-hover:scale-110" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">Address</h3>
              <p className="text-gray-700">
                Millers Barn, Baker Street<br />
                Farthinghoe, Northants<br />
                NN13 5PH
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">Get a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e53e3e] transition-all duration-300 hover:border-gray-400 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e53e3e] transition-all duration-300 hover:border-gray-400 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e53e3e] transition-all duration-300 hover:border-gray-400 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                  />
                </div>

                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-semibold mb-2 text-gray-700">
                    Vehicle Type *
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e53e3e] transition-all duration-300 hover:border-gray-400 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                  >
                    <option value="">Select vehicle type</option>
                    <option value="Saloon">Saloon</option>
                    <option value="SUV">SUV</option>
                    <option value="Classic Car">Classic Car</option>
                    <option value="Prestige Car">Prestige Car</option>
                    <option value="Small Van">Small Van</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="collectionLocation" className="block text-sm font-semibold mb-2 text-gray-700">
                    Collection Location *
                  </label>
                  <input
                    type="text"
                    id="collectionLocation"
                    name="collectionLocation"
                    value={formData.collectionLocation}
                    onChange={handleChange}
                    required
                    placeholder="City or postcode"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e53e3e] transition-all duration-300 hover:border-gray-400 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                  />
                </div>

                <div>
                  <label htmlFor="deliveryLocation" className="block text-sm font-semibold mb-2 text-gray-700">
                    Delivery Location *
                  </label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    required
                    placeholder="City or postcode"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e53e3e] transition-all duration-300 hover:border-gray-400 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please include any additional details about your vehicle or requirements"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e53e3e] transition-all duration-300 hover:border-gray-400 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you for your enquiry! We'll get back to you as soon as possible.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    There was an error submitting your form. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 group">
                <h3 className="font-semibold text-lg mb-4 text-[#1a365d] flex items-center gap-2">
                  <User className="text-[#e53e3e] transition-transform duration-300 group-hover:scale-110" size={24} />
                  Owner Operator
                </h3>
                <p className="text-gray-700 text-lg">Paul Davies</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 group">
                <h3 className="font-semibold text-lg mb-4 text-[#1a365d] flex items-center gap-2">
                  <Clock className="text-[#e53e3e] transition-transform duration-300 group-hover:scale-110" size={24} />
                  Operating Hours
                </h3>
                <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-700">Sunday: By arrangement</p>
              </div>

              <div className="bg-[#1a365d] text-white p-6 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:-translate-y-1">
                <h3 className="font-semibold text-lg mb-4">Why Choose Tarkwa?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                    <span className="text-[#e53e3e] mt-1">•</span>
                    <span>Owner-operated business with personal service</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                    <span className="text-[#e53e3e] mt-1">•</span>
                    <span>Comprehensive insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                    <span className="text-[#e53e3e] mt-1">•</span>
                    <span>Same-day delivery for most vehicles</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                    <span className="text-[#e53e3e] mt-1">•</span>
                    <span>Specialist in classic and prestige cars</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                    <span className="text-[#e53e3e] mt-1">•</span>
                    <span>UK-wide coverage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function User({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
