import { Link } from 'react-router-dom';
import { Phone, Shield, Award, Clock, CheckCircle, Truck, Star, Lock, ArrowRight, MapPin, ShieldCheck, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="font-sans">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/s-l1600.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

        <div className="relative z-10 max-w-[900px] px-5 text-center animate-fadeInUp">
          <div className="text-sm uppercase tracking-[2px] mb-5 text-white drop-shadow-lg">
            Because Your Motor Matters <span className="mx-2">|</span> Est. 2014 <span className="mx-2">|</span> Based in Northamptonshire
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold text-white mb-5 leading-[1.2] drop-shadow-2xl">
            Premium Vehicle Transport You Can Trust
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white mb-9 leading-[1.5] max-w-[700px] mx-auto drop-shadow-lg">
            Specialist transport for classic cars, prestige vehicles, and high-value automobiles across the UK
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="text-white/90" size={32} strokeWidth={2} />
              <span className="text-[13px] uppercase tracking-[1px] text-white/90">£5M Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <User className="text-white/90" size={32} strokeWidth={2} />
              <span className="text-[13px] uppercase tracking-[1px] text-white/90">Owner Operated</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="text-white/90" size={32} strokeWidth={2} />
              <span className="text-[13px] uppercase tracking-[1px] text-white/90">UK Wide</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="text-white/90" size={32} strokeWidth={2} />
              <span className="text-[13px] uppercase tracking-[1px] text-white/90">10+ Years</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary group"
            >
              Get Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:07778878862"
              className="btn-secondary backdrop-blur-sm bg-white/5"
            >
              <Phone size={20} />
              07778 878862
            </a>
          </div>
        </div>
      </section>

      <section className="bg-premium-navy text-white py-12">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Truck className="text-premium-green" size={40} />
              <div>
                <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white">Tarkwa Auto Transport</h1>
                <p className="text-premium-red italic text-base">Because Your Motor Matters</p>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight text-white">
              Premium Vehicle Transportation Across the UK
            </h2>

            <p className="text-lg text-white/85 mb-6 leading-[1.6] max-w-[700px] mx-auto">
              Specialist transport for classic cars, prestige vehicles, and high-value automobiles
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-premium-green" />
                <span>Family Owned & Operated Since 2014</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-premium-green" />
                <span>Preferred by UK Dealerships</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-premium-green" />
                <span>Specialist Classic Car Transport</span>
              </div>
            </div>

            <p className="text-xs text-white/70 mb-6">
              Serving Northamptonshire, Oxfordshire, Buckinghamshire & Nationwide
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Request Quote
              </Link>
              <a
                href="tel:07778878862"
                className="btn-secondary-red"
              >
                <Phone size={20} />
                07778 878862
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-premium-cream py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #0f1419 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="container mx-auto px-4 max-w-[1200px] relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="flex justify-center mb-4">
                <div className="bg-premium-navy/5 group-hover:bg-premium-navy/10 rounded-full p-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                  <Award className="text-premium-green" size={44} />
                </div>
              </div>
              <div className="text-4xl font-serif font-bold text-premium-navy mb-2 group-hover:text-premium-green transition-colors duration-300">10+ Years</div>
              <p className="text-base text-premium-gray leading-[1.6]">
                Trusted by dealerships and collectors nationwide
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="flex justify-center mb-4">
                <div className="bg-premium-navy/5 group-hover:bg-premium-navy/10 rounded-full p-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                  <Shield className="text-premium-green" size={44} />
                </div>
              </div>
              <div className="text-4xl font-serif font-bold text-premium-navy mb-2 group-hover:text-premium-green transition-colors duration-300">£5M Insurance</div>
              <p className="text-base text-premium-gray leading-[1.6]">
                Your vehicle protected at all times during transport
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="flex justify-center mb-4">
                <div className="bg-premium-navy/5 group-hover:bg-premium-navy/10 rounded-full p-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                  <Star className="text-premium-green" size={44} />
                </div>
              </div>
              <div className="text-4xl font-serif font-bold text-premium-navy mb-2 group-hover:text-premium-green transition-colors duration-300">Owner Operated</div>
              <p className="text-base text-premium-gray leading-[1.6]">
                Paul Davies personally oversees every transport
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1563720223185-11003d516935?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-premium-navy/90" />
        <div className="relative container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-center mb-8 text-white">
            Our Specialist Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/classic-car-transport"
              className="bg-white/95 hover:bg-white p-7 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 border border-transparent hover:border-premium-green/20"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-premium-green/10 p-3 rounded-xl group-hover:bg-premium-green/20 transition-all duration-300 group-hover:scale-110">
                  <Star className="text-premium-green" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-sans font-semibold text-premium-navy mb-2 group-hover:text-premium-green transition-colors">Classic Cars</h3>
                  <p className="text-sm text-premium-gray leading-[1.6]">Expert handling of vintage and classic automobiles with specialized care</p>
                </div>
              </div>
              <div className="text-premium-green font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                Learn More <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              to="/prestige-car-transport"
              className="bg-white/95 hover:bg-white p-7 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 border border-transparent hover:border-premium-green/20"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-premium-green/10 p-3 rounded-xl group-hover:bg-premium-green/20 transition-all duration-300 group-hover:scale-110">
                  <Award className="text-premium-green" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-sans font-semibold text-premium-navy mb-2 group-hover:text-premium-green transition-colors">Prestige Vehicles</h3>
                  <p className="text-sm text-premium-gray leading-[1.6]">Premium service for luxury and high-value vehicles requiring special attention</p>
                </div>
              </div>
              <div className="text-premium-green font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                Learn More <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              to="/auction-transport"
              className="bg-white/95 hover:bg-white p-7 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 border border-transparent hover:border-premium-green/20"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-premium-green/10 p-3 rounded-xl group-hover:bg-premium-green/20 transition-all duration-300 group-hover:scale-110">
                  <Clock className="text-premium-green" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-sans font-semibold text-premium-navy mb-2 group-hover:text-premium-green transition-colors">Auction Collections</h3>
                  <p className="text-sm text-premium-gray leading-[1.6]">Prompt and reliable collection from auction houses nationwide</p>
                </div>
              </div>
              <div className="text-premium-green font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                Learn More <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              to="/dealership-transport"
              className="bg-white/95 hover:bg-white p-7 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 border border-transparent hover:border-premium-green/20"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-premium-green/10 p-3 rounded-xl group-hover:bg-premium-green/20 transition-all duration-300 group-hover:scale-110">
                  <Truck className="text-premium-green" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-sans font-semibold text-premium-navy mb-2 group-hover:text-premium-green transition-colors">Dealership Transport</h3>
                  <p className="text-sm text-premium-gray leading-[1.6]">Professional fleet services for car dealerships and trade customers</p>
                </div>
              </div>
              <div className="text-premium-green font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                Learn More <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/s-l1600 (1).webp"
                  alt="ISUZU Transport Truck"
                  className="w-full transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-premium-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-premium-navy mb-6">
                Professional Equipment
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-premium-green/10 p-2.5 rounded-lg mt-0.5 group-hover:bg-premium-green/20 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="text-premium-green" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-premium-navy mb-1.5 group-hover:text-premium-green transition-colors">ISUZU N75.19 Euro 6 Transporter</h3>
                    <p className="text-sm text-premium-gray leading-[1.6]">Modern, reliable vehicle with 5-meter recovery deck</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-premium-green/10 p-2.5 rounded-lg mt-0.5 group-hover:bg-premium-green/20 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="text-premium-green" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-premium-navy mb-1.5 group-hover:text-premium-green transition-colors">Covered Transport Available</h3>
                    <p className="text-sm text-premium-gray leading-[1.6]">Weather protection for your valuable vehicles</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-premium-green/10 p-2.5 rounded-lg mt-0.5 group-hover:bg-premium-green/20 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="text-premium-green" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-premium-navy mb-1.5 group-hover:text-premium-green transition-colors">Specialist Loading Equipment</h3>
                    <p className="text-sm text-premium-gray leading-[1.6]">Safe handling for low-profile and modified vehicles</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-premium-green/10 p-2.5 rounded-lg mt-0.5 group-hover:bg-premium-green/20 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="text-premium-green" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-premium-navy mb-1.5 group-hover:text-premium-green transition-colors">GPS Tracking & Updates</h3>
                    <p className="text-sm text-premium-gray leading-[1.6]">Real-time location updates throughout the journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-premium-navy text-white py-12">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-8 text-white">
              Fully Licensed & Insured
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              <div className="bg-white/5 hover:bg-white/10 p-7 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <Lock className="text-premium-green mx-auto mb-3" size={40} />
                <div className="text-5xl font-serif font-bold text-white mb-2">£5M</div>
                <p className="text-base text-white/90">Public Liability Insurance</p>
              </div>

              <div className="bg-white/5 hover:bg-white/10 p-7 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <Shield className="text-premium-green mx-auto mb-3" size={40} />
                <div className="text-5xl font-serif font-bold text-white mb-2">£100K</div>
                <p className="text-base text-white/90">Goods in Transit Cover</p>
              </div>

              <div className="bg-white/5 hover:bg-white/10 p-7 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <Award className="text-premium-green mx-auto mb-3" size={40} />
                <div className="text-5xl font-serif font-bold text-white mb-2">£60K</div>
                <p className="text-base text-white/90">Motor Trade Insurance</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-sm text-white/85 mb-1">Company Registration: 09606346</p>
              <p className="text-sm text-white/85">VAT Number: 214 4851 23</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-12"
        style={{
          background: 'linear-gradient(135deg, #0f1419 0%, #1a2530 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative container mx-auto px-5 max-w-[1200px] text-center">
          <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-white mb-3">
            Ready to Transport Your Vehicle?
          </h2>
          <p className="text-base text-white/85 mb-6 max-w-[700px] mx-auto leading-[1.6]">
            Contact Paul Davies for a personalised quote — Same-day response guaranteed
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary-green"
            >
              Request a Quote
            </Link>
            <a
              href="tel:07778878862"
              className="btn-secondary-green"
            >
              <Phone size={18} />
              07778 878862
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
