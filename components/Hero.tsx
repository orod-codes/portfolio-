
import React from 'react';

const Hero: React.FC = () => {
  const techIcons = [
    { icon: 'fa-brands fa-react', color: 'text-cyan-400', pos: 'top-[12%] left-[5%]', scale: 'scale-75 md:scale-110', delay: '0s' },
    { icon: 'fa-brands fa-node-js', color: 'text-green-500', pos: 'top-[18%] right-[8%]', scale: 'scale-75 md:scale-100', delay: '1.2s' },
    { icon: 'fa-brands fa-python', color: 'text-blue-500', pos: 'bottom-[22%] left-[10%]', scale: 'scale-75 md:scale-125', delay: '2.4s' },
    { icon: 'fa-terminal', color: 'text-slate-400', pos: 'bottom-[15%] right-[5%]', scale: 'scale-75 md:scale-90', delay: '0.6s' },
    { icon: 'fa-brands fa-js', color: 'text-yellow-400', pos: 'top-[40%] left-[2%]', scale: 'scale-75 md:scale-110', delay: '3s' },
    { icon: 'fa-database', color: 'text-indigo-400', pos: 'top-[38%] right-[4%]', scale: 'scale-75 md:scale-95', delay: '1.8s' },
    { icon: 'fa-brands fa-rust', color: 'text-orange-600', pos: 'top-[5%] right-[20%]', scale: 'scale-50 md:scale-75', delay: '4.2s' },
    { icon: 'fa-brands fa-golang', color: 'text-cyan-500', pos: 'bottom-[10%] left-[25%]', scale: 'scale-50 md:scale-85', delay: '5.1s' },
    { icon: 'fa-brands fa-docker', color: 'text-blue-400', pos: 'top-[65%] right-[10%]', scale: 'scale-50 md:scale-90', delay: '3.8s' },
    { icon: 'fa-brands fa-java', color: 'text-red-500', pos: 'bottom-[35%] left-[5%]', scale: 'scale-75 md:scale-100', delay: '2.1s' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent">
      {/* Deep Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[800px] h-[150vw] md:h-[800px] bg-slate-200/20 dark:bg-white/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none transition-colors duration-1000"></div>
      
      {/* Floating Tech Icons Decor - Parallax Feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {techIcons.map((item, idx) => (
          <div 
            key={idx}
            className={`absolute ${item.pos} ${item.scale} opacity-20 dark:opacity-30 animate-[bounce_6s_ease-in-out_infinite] transition-all duration-1000`}
            style={{ animationDelay: item.delay }}
          >
            <div className={`text-4xl md:text-7xl ${item.icon} ${item.color} blur-[0.5px] md:blur-[1px] hover:blur-0 transition-all duration-700`}></div>
          </div>
        ))}
      </div>

      {/* HUD Frame - Enhanced Architecture - Responsive Sizing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[85vh] border border-slate-900/10 dark:border-white/10 pointer-events-none transition-colors">
        <div className="absolute -top-1 -left-1 w-6 h-6 md:w-12 md:h-12 border-t-2 border-l-2 border-slate-900/40 dark:border-white/40"></div>
        <div className="absolute -top-1 -right-1 w-6 h-6 md:w-12 md:h-12 border-t-2 border-r-2 border-slate-900/40 dark:border-white/40"></div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 md:w-12 md:h-12 border-b-2 border-l-2 border-slate-900/40 dark:border-white/40"></div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-12 md:h-12 border-b-2 border-r-2 border-slate-900/40 dark:border-white/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Mobile Protocol Tag */}
        <div className="inline-block px-4 py-1.5 mb-6 md:mb-10 glass rounded-full relative overflow-hidden group border-slate-900/10 dark:border-white/20">
           <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] flex items-center justify-center">
             <span className="w-2 h-2 bg-blue-600 dark:bg-white rounded-full mr-3 animate-pulse"></span>
             <span className="opacity-50">STATUS:</span> <span className="ml-2 text-slate-900 dark:text-white">MOBILE_SYNC_ACTIVE</span>
           </span>
        </div>
        
        <div className="relative inline-block mb-8 md:mb-12">
           <div className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] font-mono tracking-[1em] md:tracking-[1.5em] uppercase opacity-30 whitespace-nowrap animate-pulse w-full text-center">
             System • Scalability • Intelligence
           </div>
           
           {/* Fluid Responsive Heading */}
           <h1 className="text-[12vw] sm:text-[10vw] md:text-[7rem] font-black tracking-tighter leading-[0.85] uppercase text-slate-900 dark:text-white transition-all drop-shadow-xl md:drop-shadow-2xl">
             FULL STACK<br/> 
             <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-700 to-slate-400 dark:from-white dark:via-gray-300 dark:to-transparent">ARCHITECT</span>
           </h1>
           
           {/* Reticle Decor - Mobile Optimized */}
           <div className="absolute -top-12 -left-12 md:-top-20 md:-left-20 w-24 h-24 md:w-40 md:h-40 border border-slate-900/10 dark:border-white/10 rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite]">
              <div className="absolute inset-0 border-t-2 border-blue-500/20 rounded-full"></div>
              <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-blue-600 dark:bg-white rounded-full"></div>
           </div>
        </div>
        
        <p className="text-base sm:text-lg md:text-2xl text-slate-500 dark:text-gray-400 mb-10 md:mb-16 max-w-2xl mx-auto font-light tracking-wide leading-relaxed px-4">
          Dorsis Girma constructs <span className="text-slate-900 dark:text-white font-bold italic">resilient infrastructures</span> and <span className="text-slate-900 dark:text-white font-bold italic">immersive interfaces</span> with surgical precision.
        </p>

        <div className="flex flex-col gap-8 md:gap-10 justify-center items-center w-full">
          <a href="#projects" className="w-full sm:w-auto group bg-slate-900 dark:bg-white text-white dark:text-black px-12 md:px-16 py-5 md:py-7 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] hover:scale-105 transition-all shadow-xl relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4">
              EXECUTE REPOS <i className="fas fa-code"></i>
            </span>
            <div className="absolute inset-0 bg-blue-700 dark:bg-slate-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          
          <div className="grid grid-cols-4 gap-4 md:gap-6 items-center">
            {[
              { icon: 'fa-brands fa-react', label: 'UX' },
              { icon: 'fa-brands fa-node-js', label: 'BK' },
              { icon: 'fa-terminal', label: 'OS' },
              { icon: 'fa-brands fa-rust', label: 'SF' }
            ].map((t, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white transition-all duration-300">
                   <i className={`${t.icon} text-xs md:text-base`}></i>
                </div>
                <span className="text-[7px] md:text-[8px] font-mono opacity-40 group-hover:opacity-100 transition-opacity tracking-widest">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 hidden md:flex flex-col space-y-4 text-[9px] font-mono opacity-40 tracking-[0.4em] text-slate-900 dark:text-white">
        <div className="flex items-center gap-4"><div className="w-3 h-[1.5px] bg-blue-500"></div> CORE: DISTRIBUTED_RELIABILITY</div>
        <div className="flex items-center gap-4"><div className="w-3 h-[1.5px] bg-blue-500"></div> STACK: RUST_GO_TYPESCRIPT</div>
      </div>

      <div className="absolute bottom-10 right-6 flex items-center gap-4 md:gap-8 group cursor-pointer text-slate-900 dark:text-white">
        <div className="hidden sm:flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Neural Scan</span>
          <span className="text-[7px] md:text-[9px] font-mono opacity-60 text-right">Architect_Active.sh</span>
        </div>
        <div className="w-8 h-12 md:w-10 md:h-16 border-2 border-slate-900/20 dark:border-white/20 rounded-full flex justify-center p-1.5 md:p-2">
           <div className="w-1 h-2 md:w-1 md:h-4 bg-blue-600 dark:bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
