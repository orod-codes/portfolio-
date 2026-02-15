
import React from 'react';
import { POSTERS } from '../constants';

const Posters: React.FC = () => {
  return (
    <section id="posters" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase text-slate-900 dark:text-white">Posters & Flyers</h2>
          <p className="text-slate-500 dark:text-gray-500">Visual designs for events, branding, and marketing.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {POSTERS.map((poster) => (
            <div key={poster.id} className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-zoom-in shadow-xl">
              <img 
                src={poster.url} 
                alt={poster.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-bold text-xs uppercase tracking-widest">{poster.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://www.behance.net/yeabsiramihret" target="_blank" className="bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-all inline-block uppercase tracking-widest text-xs">
            <i className="fab fa-behance mr-2"></i> View More on Behance
          </a>
        </div>
      </div>
    </section>
  );
};

export default Posters;
