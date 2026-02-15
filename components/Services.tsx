
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-transparent relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
            <circle cx="90" cy="10" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-slate-900 dark:text-white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 glass border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[10px] font-black tracking-widest uppercase rounded-full">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-slate-900 dark:text-white">Capabilities</h2>
          <p className="text-slate-500 dark:text-gray-500 max-w-xl mx-auto font-medium">High-performance solutions for the modern digital landscape.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-10 glass rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-slate-400 dark:hover:border-white transition-all duration-500 hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] relative overflow-hidden bg-white/50 dark:bg-white/5">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-200 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">{service.title}</h3>
              <p className="text-slate-500 dark:text-gray-400 mb-8 leading-relaxed text-sm font-light">
                {service.description}
              </p>
              <a href="https://t.me/yeab_neh" target="_blank" className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center group-hover:translate-x-2 transition-transform text-slate-900 dark:text-white">
                Protocol Access <i className="fas fa-arrow-right ml-3 opacity-30 group-hover:opacity-100"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
