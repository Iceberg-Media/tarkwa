import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Truck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-premium-navy text-premium-cream">
      <div className="h-1 bg-gradient-to-r from-transparent via-premium-gold to-transparent" />

      <div className="container mx-auto px-5 pt-10 pb-8 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          <div className="max-w-[300px]">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/Warriors Support.png"
                alt="Tarkwa Auto Transport"
                className="h-16 w-auto"
              />
              <div>
                <h3 className="text-lg font-serif font-bold">Tarkwa Auto Transport</h3>
                <p className="text-premium-gold italic text-xs">Because Your Motor Matters</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-[1.5]">
              Professional vehicle transportation across the UK. Owner-operated service specialising in classic cars.
            </p>
          </div>

          <div className="max-w-[200px]">
            <h4 className="text-base font-semibold mb-4 text-premium-gold font-serif">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/classic-car-transport" className="hover:text-premium-gold transition-colors leading-[1.4]">Classic Car Transport</Link></li>
              <li><Link to="/prestige-car-transport" className="hover:text-premium-gold transition-colors leading-[1.4]">Prestige Vehicles</Link></li>
              <li><Link to="/auction-transport" className="hover:text-premium-gold transition-colors leading-[1.4]">Auction Collections</Link></li>
              <li><Link to="/dealership-transport" className="hover:text-premium-gold transition-colors leading-[1.4]">Dealership Transport</Link></li>
              <li><Link to="/suv-transport" className="hover:text-premium-gold transition-colors leading-[1.4]">SUV Transport</Link></li>
              <li><Link to="/small-van-transport" className="hover:text-premium-gold transition-colors leading-[1.4]">Small Van Transport</Link></li>
            </ul>
          </div>

          <div className="max-w-[200px]">
            <h4 className="text-base font-semibold mb-4 text-premium-gold font-serif">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-premium-gold transition-colors leading-[1.4]">Home</Link></li>
              <li><Link to="/about" className="hover:text-premium-gold transition-colors leading-[1.4]">About Us</Link></li>
              <li><Link to="/equipment" className="hover:text-premium-gold transition-colors leading-[1.4]">Equipment & Fleet</Link></li>
              <li><Link to="/insurance" className="hover:text-premium-gold transition-colors leading-[1.4]">Insurance & Safety</Link></li>
              <li><Link to="/faq" className="hover:text-premium-gold transition-colors leading-[1.4]">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-premium-gold transition-colors leading-[1.4]">Contact</Link></li>
            </ul>
          </div>

          <div className="max-w-[250px]">
            <h4 className="text-base font-semibold mb-4 text-premium-gold font-serif">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-premium-gold" />
                <div>
                  <p className="mb-1"><a href="tel:07778878862" className="hover:text-premium-gold transition-colors leading-[1.4]">07778 878862</a></p>
                  <p><a href="tel:01295711897" className="hover:text-premium-gold transition-colors leading-[1.4]">01295 711897</a></p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-premium-gold" />
                <a href="mailto:info@tarkwa.co.uk" className="hover:text-premium-gold transition-colors leading-[1.4]">
                  info@tarkwa.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-premium-gold" />
                <span className="text-gray-400 leading-[1.4]">
                  Millers Barn, Baker Street,<br />
                  Farthinghoe, Northants NN13 5PH
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-premium-gold/20 pt-5 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
            <div>
              <span>Company Number: 09606346 | VAT: 214 4851 23 | Owner Operator: Paul Davies</span>
            </div>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-premium-gold transition-colors">Privacy Policy</Link>
              <Link to="/cookie-policy" className="hover:text-premium-gold transition-colors">Cookie Policy</Link>
              <Link to="/terms-conditions" className="hover:text-premium-gold transition-colors">Terms & Conditions</Link>
              <span>&copy; {currentYear} Tarkwa Auto Transport Ltd.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
