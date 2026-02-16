import React from 'react';
import { Users, Clock, Award, Briefcase } from 'lucide-react';
import { TEAM, TESTIMONIALS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-stone-950 pt-24">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-2">O Podjetju</h2>
             <h3 className="text-4xl font-bold text-white mb-6">Gradimo več kot le objekte. Gradimo domove.</h3>
             <p className="text-stone-400 text-lg mb-6 leading-relaxed">
               Podjetje Gradbena Prihodnost je bilo ustanovljeno leta 2008 z vizijo preoblikovanja slovenskega gradbenega trga. 
               Zavezani smo k transparentnosti, točnosti in uporabi najsodobnejših materialov.
             </p>
             <p className="text-stone-400 text-lg leading-relaxed">
               Naša misija je zagotoviti brezskrbno gradnjo za vsakega naročnika, od prve lopate do vselitve.
             </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold-500/20 rounded-2xl blur-lg transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
              alt="Construction Meeting" 
              className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-900 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Briefcase, num: "120+", label: "Projektov" },
              { icon: Clock, num: "15", label: "Let Izkušenj" },
              { icon: Users, num: "45", label: "Strokovnjakov" },
              { icon: Award, num: "10+", label: "Nagrad" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <stat.icon className="mx-auto h-8 w-8 text-gold-500" />
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.num}</div>
                <div className="text-stone-400 uppercase tracking-widest text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Naša Ekipa</h2>
          <p className="text-stone-400 mt-4">Ljudje, ki stojijo za našim uspehom.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {TEAM.map((member) => (
            <div key={member.id} className="group relative overflow-hidden rounded-xl bg-stone-900">
              <div className="aspect-w-3 aspect-h-4">
                <img src={member.image} alt={member.name} className="object-cover w-full h-96 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white">{member.name}</h4>
                <p className="text-gold-500">{member.role}</p>
              </div>
              {/* Default view label */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity">
                <h4 className="text-lg font-bold text-white">{member.name}</h4>
                <p className="text-stone-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Mnenja Strank</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-stone-950 p-8 rounded-2xl border border-stone-800 relative">
                 <div className="text-gold-500 text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
                 <p className="text-stone-300 mb-6 relative z-10 pt-4 leading-relaxed italic">{t.text}</p>
                 <div className="flex items-center">
                   <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full mr-4 border border-stone-700" />
                   <div>
                     <h5 className="text-white font-bold">{t.name}</h5>
                     <span className="text-xs text-stone-500 uppercase">{t.role}</span>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;