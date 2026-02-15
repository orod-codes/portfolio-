
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square glass rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-slate-200 dark:border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" 
                alt="System Engineering" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 dark:from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass p-5 md:p-8 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/20 hidden sm:block">
              <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">LTS</p>
              <p className="text-slate-500 dark:text-gray-500 font-bold text-[10px] uppercase tracking-widest">Support Mindset</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 glass border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase rounded-full">
              Protocol: Engineer_Profile
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter text-slate-900 dark:text-white">
              SCALABLE <br/> & <span className="text-blue-600 dark:text-gray-500">SECURE.</span>
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                I'm <span className="font-bold text-slate-900 dark:text-white">Dorsis Girma</span>. 
                My focus is the backbone of the digital world: <span className="text-slate-900 dark:text-white italic underline decoration-blue-500/20 underline-offset-4 font-medium">Systems and the Web.</span>
              </p>
              <p>
                As a software engineer at <span className="text-slate-900 dark:text-white font-bold">INSA</span>, I work on high-stakes systems where performance and security are non-negotiable. My philosophy is rooted in clean code, efficient algorithms, and robust architecture.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-8 mt-12">
              <div className="border-l-2 border-slate-300 dark:border-white/20 pl-4 md:pl-6 group">
                <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform">0ms</p>
                <p className="text-slate-500 dark:text-gray-500 text-[9px] font-bold uppercase tracking-widest">Latency Goal</p>
              </div>
              <div className="border-l-2 border-slate-300 dark:border-white/20 pl-4 md:pl-6 group">
                <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform">∞ API</p>
                <p className="text-slate-500 dark:text-gray-500 text-[9px] font-bold uppercase tracking-widest">Integration</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:shadow-xl transition-all">
                ACCESS REPOS
              </button>
              <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/20 flex items-center justify-center text-slate-900 dark:text-white">
                    <i className="fab fa-github text-lg"></i>
                 </div>
                 <span className="text-[10px] font-mono text-slate-500 dark:text-gray-500">@dorsis-girma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
