import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/equipment', label: 'Equipment & Fleet' },
    { path: '/insurance', label: 'Insurance & Safety' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#1a365d] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Tarkwa Auto Transport"
              className="h-20 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Tarkwa Auto Transport Ltd</span>
              <span className="text-sm text-red-400 italic">Because Your Motor Matters</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-[#e53e3e] transition-colors ${
                  isActive(link.path) ? 'text-[#e53e3e] font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:07778878862"
              className="bg-[#e53e3e] hover:bg-red-600 px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone size={18} />
              <span>07778 878862</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-[#2d4a7c] rounded transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#2d4a7c]">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 hover:bg-[#2d4a7c] transition-colors ${
                  isActive(link.path) ? 'bg-[#2d4a7c] text-[#e53e3e] font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:07778878862"
              className="block mt-4 bg-[#e53e3e] hover:bg-red-600 px-4 py-3 rounded-lg text-center transition-colors"
            >
              <Phone size={18} className="inline mr-2" />
              Call Now: 07778 878862
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
