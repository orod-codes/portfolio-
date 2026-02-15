
import React from 'react';
import { SKILLS } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-32 px-6 bg-transparent relative overflow-hidden">
      {/* Decorative Lines linking section header to grid */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-slate-900/10 dark:via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-5 py-2 mb-6 glass border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[10px] font-black tracking-[0.4em] uppercase rounded-full">
            Full Stack Technologies
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-slate-900 dark:text-white leading-none">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400 dark:from-white dark:to-slate-600">ARSENAL</span>
          </h2>
          <p className="text-slate-500 dark:text-gray-500 max-w-2xl mx-auto font-medium text-lg">
            High-performance tools meticulously selected for building mission-critical architectures.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill) => (
            <div 
              key={skill.id} 
              className="tech-card group glass p-10 rounded-[3rem] border transition-all duration-700 flex flex-col items-center text-center shadow-lg hover:shadow-2xl dark:shadow-none bg-white/40 dark:bg-white/5"
              style={{ '--brand-color': skill.color } as React.CSSProperties}
            >
              <div 
                className="w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mb-8 glass border transition-all duration-500 border-slate-100 dark:border-white/10 group-hover:scale-110 group-hover:shadow-[0_0_30px_var(--brand-color)] group-hover:bg-slate-50 dark:group-hover:bg-white/5"
              >
                <i className={`${skill.icon} transition-colors duration-500 text-slate-400 dark:text-gray-500 group-hover:text-[var(--brand-color)]`}></i>
              </div>
              <h3 className="text-2xl font-black mb-3 tracking-tight text-slate-900 dark:text-white group-hover:tracking-widest transition-all duration-500">{skill.title}</h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-[200px] opacity-60 group-hover:opacity-100 transition-opacity">
                {skill.description}
              </p>
              
              {/* Card Footer Decor */}
              <div className="mt-8 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="w-2 h-2 rounded-full bg-[var(--brand-color)] animate-ping"></div>
                <div className="w-12 h-0.5 bg-[var(--brand-color)] mt-1 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decor - Side Bar */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 bg-slate-900/5 dark:bg-white/5 blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default TechStack;
