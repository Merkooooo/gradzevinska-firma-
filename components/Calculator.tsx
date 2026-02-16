import React, { useState, useEffect } from 'react';
import { MATERIALS, BUILD_TYPES } from '../constants';
import { Info, Download, Check, RefreshCw, Layers, DollarSign, PenTool, Maximize } from 'lucide-react';

const Calculator: React.FC = () => {
  const [activeType, setActiveType] = useState(BUILD_TYPES[0]);
  const [activeMaterial, setActiveMaterial] = useState(MATERIALS[0]);
  const [size, setSize] = useState(100); // m2
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Simulate calculation delay for smooth effect
    setLoading(true);
    const timer = setTimeout(() => {
      setTotalPrice(size * activeMaterial.pricePerSqm);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [size, activeMaterial, activeType]);

  const vat = totalPrice * 0.22;
  const finalPrice = totalPrice + vat;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Interaktivni Izračun</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Izberite parametre in pridobite informativni izračun za vašo sanjsko gradnjo.
            Cene so okvirne in vključujejo material ter delo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Controls Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Step 1: Type */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 no-print animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-6">
                <div className="bg-gold-500/20 p-2 rounded-lg mr-4">
                  <PenTool className="text-gold-500 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">1. Vrsta Objekta</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {BUILD_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type)}
                    className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-95
                      ${activeType.id === type.id 
                        ? 'bg-gold-500 border-gold-500 text-stone-900 shadow-lg shadow-gold-500/20' 
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-600'
                      }`}
                  >
                    <div className="font-semibold text-sm md:text-base">{type.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Material */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 no-print animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                 <div className="bg-gold-500/20 p-2 rounded-lg mr-4">
                  <Layers className="text-gold-500 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">2. Izbira Materiala</h3>
              </div>
              <div className="space-y-4">
                {MATERIALS.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setActiveMaterial(mat)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group transform hover:scale-[1.01] active:scale-[0.99]
                      ${activeMaterial.id === mat.id 
                        ? 'bg-white/10 border-gold-500/50 shadow-md' 
                        : 'bg-stone-900 border-stone-800 hover:bg-stone-800'
                      }`}
                  >
                    <div>
                      <div className={`font-bold text-lg ${activeMaterial.id === mat.id ? 'text-gold-400' : 'text-stone-200'}`}>
                        {mat.name}
                      </div>
                      <div className="text-sm text-stone-500 mt-1">{mat.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-stone-300 font-mono font-bold">{mat.pricePerSqm} €/m²</div>
                      {activeMaterial.id === mat.id && <Check className="h-5 w-5 text-gold-500 mt-2 ml-auto animate-bounce" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Size */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 no-print animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <div className="bg-gold-500/20 p-2 rounded-lg mr-4">
                  <Maximize className="text-gold-500 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">3. Kvadratura</h3>
              </div>
              <div className="px-4 py-8">
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-gold-500 hover:accent-gold-400 transition-colors"
                />
                <div className="flex justify-between mt-6 text-stone-400 text-sm font-mono">
                  <span>20 m²</span>
                  <span className="text-3xl font-bold text-white -mt-4 transition-all duration-300 transform scale-100 hover:scale-110">{size} m²</span>
                  <span>500 m²</span>
                </div>
              </div>
            </div>
          </div>

          {/* Result / Summary Section */}
          <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="sticky top-28 bg-stone-900 border border-gold-500/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <DollarSign className="mr-2 text-gold-500" /> Vaša Ponudba
              </h3>
              
              <div className="space-y-4 mb-8 text-sm text-stone-300">
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span>Objekt</span>
                  <span className="font-semibold text-white">{activeType.name}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span>Material</span>
                  <span className="font-semibold text-white">{activeMaterial.name}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span>Velikost</span>
                  <span className="font-semibold text-white">{size} m²</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span>Cena materiala</span>
                  <span className="font-mono">{activeMaterial.pricePerSqm} €/m²</span>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-stone-400">
                  <span>Osnova</span>
                  <span>{loading ? '...' : totalPrice.toLocaleString('sl-SI')} €</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>DDV (22%)</span>
                  <span>{loading ? '...' : vat.toLocaleString('sl-SI', { maximumFractionDigits: 0 })} €</span>
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-stone-700">
                  <span className="text-lg font-bold text-white">SKUPAJ</span>
                  <span className={`text-3xl font-bold text-gold-500 font-mono transition-all duration-300 ${loading ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}`}>
                    {finalPrice.toLocaleString('sl-SI', { maximumFractionDigits: 0 })} €
                  </span>
                </div>
              </div>

              <button onClick={handlePrint} className="w-full bg-stone-100 hover:bg-white text-stone-950 font-bold py-4 rounded-xl flex items-center justify-center transition-colors mb-3 no-print transform hover:scale-[1.02] active:scale-95">
                <Download className="mr-2 h-5 w-5" /> Prenesi PDF Ponudbo
              </button>
              
              <div className="text-center">
                 <p className="text-xs text-stone-500 flex items-center justify-center gap-1">
                   <Info className="h-3 w-3" /> Cene so informativne narave.
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Printable Area (Hidden normally) */}
        <div className="hidden print-only p-8 bg-white text-black">
          <div className="flex justify-between items-center mb-10 border-b pb-6">
            <h1 className="text-3xl font-bold">Gradbena Prihodnost</h1>
            <div className="text-right">
              <p>Informativni Izračun</p>
              <p className="text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          
          <table className="w-full mb-8 text-left">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="py-2">Postavka</th>
                <th className="py-2">Podrobnosti</th>
                <th className="py-2 text-right">Vrednost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4">Vrsta Objekta</td>
                <td className="py-4">{activeType.name}</td>
                <td className="py-4 text-right">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-4">Material</td>
                <td className="py-4">{activeMaterial.name} ({activeMaterial.pricePerSqm} €/m²)</td>
                <td className="py-4 text-right">-</td>
              </tr>
               <tr className="border-b">
                <td className="py-4">Kvadratura</td>
                <td className="py-4">{size} m²</td>
                <td className="py-4 text-right">-</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end">
            <div className="w-1/2">
              <div className="flex justify-between py-2">
                <span>Osnova:</span>
                <span>{totalPrice.toLocaleString('sl-SI')} €</span>
              </div>
              <div className="flex justify-between py-2">
                <span>DDV (22%):</span>
                <span>{vat.toLocaleString('sl-SI')} €</span>
              </div>
              <div className="flex justify-between py-4 border-t-2 border-black font-bold text-xl">
                <span>SKUPAJ:</span>
                <span>{finalPrice.toLocaleString('sl-SI')} €</span>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center text-gray-500 text-sm">
            <p>Hvala za vaše zanimanje. Za fiksno ponudbo nas kontaktirajte na info@gradbenaprihodnost.si</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Calculator;