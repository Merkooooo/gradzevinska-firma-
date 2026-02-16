import React from 'react';
import { HardHat, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-stone-400 border-t border-white/5 pt-16 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <HardHat className="h-8 w-8 text-gold-500" />
              <span className="text-2xl font-bold text-white">GRADBENA<span className="text-gold-500">PRIHODNOST</span></span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-6">
              Zaupanja vreden partner za vašo gradnjo. Združujemo tradicijo, sodobne tehnologije in trajnostni pristop za ustvarjanje vrhunskih bivalnih prostorov.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-stone-900 rounded-full hover:bg-gold-500 hover:text-stone-950 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-stone-900 rounded-full hover:bg-gold-500 hover:text-stone-950 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-stone-900 rounded-full hover:bg-gold-500 hover:text-stone-950 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Povezave</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">O Nas</Link></li>
              <li><Link to="/projects" className="hover:text-gold-500 transition-colors">Projekti</Link></li>
              <li><Link to="/calculator" className="hover:text-gold-500 transition-colors">Izračun Cene</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Zaposlitev</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Pravno</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Politika zasebnosti</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Pogoji poslovanja</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Piškotki</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Impressum</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Gradbena Prihodnost d.o.o. Vse pravice pridržane.</p>
          <p className="mt-2 md:mt-0">Oblikovanje: WebStudio SI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;