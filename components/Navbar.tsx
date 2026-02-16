import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Domov', path: '/' },
    { name: 'Kalkulator', path: '/calculator' },
    { name: 'Projekti', path: '/projects' },
    { name: 'O nas', path: '/about' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-950/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gold-500 p-2 rounded-lg group-hover:bg-gold-400 transition-colors">
              <HardHat className="h-6 w-6 text-stone-950" />
            </div>
            <span className="text-xl font-bold tracking-wide text-white">
              GRADBENA<span className="text-gold-500">PRIHODNOST</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${location.pathname === link.path ? 'text-gold-500' : 'text-stone-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/calculator" className="bg-gold-500 hover:bg-gold-400 text-stone-950 px-5 py-2 rounded-full font-bold text-sm transition-transform transform hover:scale-105">
              Izračun Cene
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-300 hover:text-white">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-stone-900/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-medium hover:bg-white/5 ${location.pathname === link.path ? 'text-gold-500' : 'text-stone-300'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;