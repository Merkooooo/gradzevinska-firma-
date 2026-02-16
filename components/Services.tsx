import React from 'react';
import { Home, TrendingUp, ShieldCheck, Ruler } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-gold-500" />,
      title: "Novogradnje",
      desc: "Celovita izvedba stanovanjskih in poslovnih objektov po najvišjih standardih kakovosti."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-gold-500" />,
      title: "Energetske Sanacije",
      desc: "Zmanjšanje stroškov ogrevanja in posodobitev izgleda vašega obstoječega objekta."
    },
    {
      icon: <Ruler className="h-10 w-10 text-gold-500" />,
      title: "Projektiranje",
      desc: "Od idejne zasnove do gradbenega dovoljenja. Vse na enem mestu."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-gold-500" />,
      title: "Nadzor in Svetovanje",
      desc: "Strokovni gradbeni nadzor in inženiring za varno naložbo."
    }
  ];

  return (
    <section className="py-24 bg-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-2">Naše Storitve</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Vrhunska izvedba za vsak projekt</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-stone-800/50 rounded-2xl hover:bg-stone-800 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-gold-500/30 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {/* Decorative faint icon bg */}
                  <div className="transform scale-150 rotate-12">{service.icon}</div>
               </div>
               
               <div className="relative z-10">
                 <div className="mb-6 p-4 bg-stone-900 rounded-xl inline-block shadow-lg border border-stone-700 group-hover:border-gold-500/50 transition-colors">
                   {service.icon}
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">{service.title}</h4>
                 <p className="text-stone-400 leading-relaxed text-sm">
                   {service.desc}
                 </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;