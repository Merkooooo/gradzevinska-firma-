import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-stone-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side with Background */}
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                 alt="Construction Details" 
                 className="w-full h-full object-cover opacity-20"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900/90 to-stone-950/80"></div>
            </div>

            <div className="relative z-10 space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Stopimo v stik</h2>
                <p className="text-stone-300 text-lg">Imate idejo za projekt? Želite informativno ponudbo? Naša ekipa vam je na voljo.</p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Telefon", val: "+386 1 234 5678", href: "tel:+38612345678" },
                  { icon: Mail, title: "Email", val: "info@gradbenaprihodnost.si", href: "mailto:info@gradbenaprihodnost.si" },
                  { icon: MapPin, title: "Lokacija", val: "Dunajska cesta 100, 1000 Ljubljana", href: "#" },
                ].map((item, idx) => (
                  <a key={idx} href={item.href} className="flex items-start p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group -mx-4">
                    <div className="bg-stone-800/80 backdrop-blur p-3 rounded-xl mr-5 group-hover:bg-gold-500 group-hover:text-stone-950 transition-colors border border-white/5 group-hover:border-gold-500">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-stone-400 text-sm uppercase tracking-wide mb-1 group-hover:text-gold-500 transition-colors">{item.title}</h4>
                      <span className="text-white text-lg font-semibold">{item.val}</span>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Map Placeholder */}
              <div className="h-48 rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.578637777174!2d14.50575131557997!3d46.05694647911246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765329b925b4461%3A0xa10214c77c1d765!2sLjubljana!5e0!3m2!1sen!2ssi!4v1625648574123!5m2!1sen!2ssi" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Ljubljana Map"
                  className="grayscale hover:grayscale-0 transition-all duration-700 opacity-70 hover:opacity-100"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-white mb-8">Pošljite povpraševanje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-stone-400 mb-2 group-focus-within:text-gold-500 transition-colors">Ime in Priimek</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder-stone-600"
                  placeholder="Janez Novak"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-stone-400 mb-2 group-focus-within:text-gold-500 transition-colors">Email Naslov</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder-stone-600"
                  placeholder="janez@primer.si"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-stone-400 mb-2 group-focus-within:text-gold-500 transition-colors">Sporočilo</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder-stone-600"
                  placeholder="Zanima me gradnja prizidka..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold rounded-lg transition-all transform hover:scale-[1.02] active:scale-95 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-gold-500/20"
              >
                {status === 'idle' && (
                  <>Pošlji Sporočilo <Send className="ml-2 h-5 w-5" /></>
                )}
                {status === 'submitting' && (
                  <div className="h-5 w-5 border-2 border-stone-950 border-t-transparent rounded-full animate-spin"></div>
                )}
                {status === 'success' && (
                  <>Poslano Uspešno <CheckCircle className="ml-2 h-5 w-5" /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;