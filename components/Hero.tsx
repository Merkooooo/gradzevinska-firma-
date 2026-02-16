import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-spin-slow origin-center" 
          style={{ animationDuration: '60s', animationDirection: 'alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-stone-950/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-md animate-fade-in-up">
          <span className="text-gold-400 text-sm font-semibold tracking-wider uppercase">Vodstvo v inovacijah</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Gradimo prihodnost <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">z zaupanjem.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Več kot 15 let izkušenj pri ustvarjanju vrhunskih bivalnih in poslovnih objektov. 
          Od ideje do ključa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link to="/calculator" className="group relative px-8 py-4 bg-gold-500 text-stone-950 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]">
            <span className="relative z-10 flex items-center">
              Izračun Cene <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          
          <Link to="/contact" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105">
            Kontaktirajte nas
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-xs text-stone-400 mb-2 uppercase tracking-widest">Razišči</span>
        <ChevronDown className="h-6 w-6 text-gold-500" />
      </div>
    </div>
  );
};

export default Hero;