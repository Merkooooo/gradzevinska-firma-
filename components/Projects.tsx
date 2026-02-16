import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Vsi');
  
  const categories = ['Vsi', 'Stanovanjska', 'Poslovni', 'Lesena'];
  
  const filteredProjects = filter === 'Vsi' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="bg-stone-950 pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Naši Projekti</h2>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 
                  ${filter === cat 
                    ? 'bg-gold-500 text-stone-950' 
                    : 'bg-stone-900 text-stone-400 hover:bg-stone-800 border border-stone-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10">
              
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.imageAfter} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-stone-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gold-500 text-sm uppercase tracking-widest mb-4">{project.category} • {project.year}</p>
                    <p className="text-stone-300 text-sm max-w-sm mx-auto">{project.description}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-500 transition-colors">{project.title}</h3>
                  <span className="text-stone-500 font-mono text-sm">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;