
import React, { useEffect, useState } from 'react';
import { EXPERIENCES } from '../constants';
import { TECH_LOGOS } from './TechStack';

const Timeline: React.FC = () => {
  const [glitchText, setGlitchText] = useState("0x000000");

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(`0x${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()}`);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timeline" className="py-24 md:py-40 px-6 bg-transparent relative overflow-hidden">
      {/* SECTION BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 text-[8px] font-mono tracking-[1em] rotate-90 origin-left text-slate-500 uppercase">Archive_Sector_Theta</div>
        <div className="absolute bottom-1/4 right-10 text-[8px] font-mono tracking-[1em] -rotate-90 origin-right text-slate-500 uppercase">Temporal_Sequence_Live</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <div className="inline-block px-4 py-1.5 mb-6 glass border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase rounded-full">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 animate-ping"></span>
              Neural_History_Sync
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter text-slate-900 dark:text-white leading-none">
            PROTOCOL<span className="text-slate-400 dark:text-gray-600">_PATH</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-slate-400 dark:text-gray-500 font-mono text-[10px] uppercase tracking-widest">
            <span>SEQ: {glitchText}</span>
            <div className="w-10 h-[1px] bg-slate-200 dark:bg-white/20"></div>
            <span>Architect: Dorsis Girma</span>
          </div>
        </div>

        <div className="relative">
          {/* THE DATA CONDUIT (Central Line) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-slate-200 dark:bg-white/5"></div>
            {/* Animated Pulse Beam */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-blue-500 dark:via-white to-transparent animate-[scanline_4s_linear_infinite]"></div>
          </div>

          <div className="space-y-16 md:space-y-28">
            {EXPERIENCES.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* FLOATING DATA BITS (Decorative Motion) */}
                <div className={`absolute top-0 hidden lg:block font-mono text-[8px] opacity-10 dark:opacity-20 animate-pulse ${index % 2 === 0 ? 'right-[55%]' : 'left-[55%]'}`}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="mb-2 tracking-widest">
                      {Math.random() > 0.5 ? '01101001' : '0xAFF42'} <br/>
                      SYS_LOG_V{index}.{i}
                    </div>
                  ))}
                </div>

                {/* CONTENT CARD WITH HUD BRACKETS */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="group relative glass p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-blue-500/50 dark:hover:border-white/40 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-white/70 dark:bg-white/5 backdrop-blur-3xl overflow-hidden">
                    
                    {/* Interior Scanning Sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Corner Brackets */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-slate-300 dark:border-white/20"></div>
                    <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-slate-300 dark:border-white/20"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-slate-300 dark:border-white/20"></div>
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-slate-300 dark:border-white/20"></div>

                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-gray-500 mb-4 block">
                        UPLINK_0{index + 1} // {exp.date}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black mb-2 text-slate-900 dark:text-white leading-tight transition-all group-hover:tracking-wider">
                        {exp.role}
                      </h3>
                      <h4 className="text-xs font-bold text-slate-400 dark:text-gray-400 mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                        <i className="fas fa-microchip text-[10px] opacity-50"></i>
                        {exp.company}
                        {exp.company === 'INSA' && (
                          <a href="https://www.insa.gov.et/" target="_blank" rel="noopener noreferrer">
                            <img
                              src={TECH_LOGOS['INSA']}
                              alt="INSA Logo"
                              className="w-16 h-16 md:w-24 md:h-24 ml-2 inline-block align-middle rounded-full border-2 border-slate-200 dark:border-white/20 bg-white dark:bg-slate-900"
                            />
                          </a>
                        )}
                        {exp.company === 'BUNA' && (
                          <a href="https://bunasm.com/" target="_blank" rel="noopener noreferrer">
                            <img
                              src={TECH_LOGOS['BUNA']}
                              alt="BUNA Logo"
                              className="w-24 h-24 md:w-32 md:h-32 ml-2 inline-block align-middle rounded-full border-2 border-slate-200 dark:border-white/20 bg-white dark:bg-slate-900"
                            />
                          </a>
                        )}
                        {exp.company === 'Addis Ababa University' && (
                          <a href="https://www.aau.edu.et/" target="_blank" rel="noopener noreferrer">
                            <img
                              src={TECH_LOGOS['Addis Ababa University']}
                              alt="Addis Ababa University Logo"
                              className="w-24 h-24 md:w-32 md:h-32 ml-2 inline-block align-middle rounded-full border-2 border-slate-200 dark:border-white/20 bg-white dark:bg-slate-900"
                            />
                          </a>
                        )}
                      </h4>
                      <p className={`text-slate-500 dark:text-gray-400 text-sm leading-relaxed font-light max-w-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        {exp.description}
                      </p>
                      
                      <div className="mt-8 flex items-center gap-3 opacity-30 group-hover:opacity-100 transition-opacity">
                        <div className="w-8 h-[1px] bg-current"></div>
                        <span className="text-[8px] font-mono font-bold uppercase tracking-widest">Node_Stable</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SENSOR NODE (Center Graphic) */}
                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                  <div className="relative w-10 h-10 md:w-16 md:h-16 flex items-center justify-center">
                    {/* Rotating Rings */}
                    <div className="absolute inset-0 border border-blue-500/30 dark:border-white/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                    <div className="absolute inset-2 border border-dashed border-slate-400/20 dark:border-white/10 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
                    
                    {/* Pulsing Core */}
                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl border transition-all duration-700 group-hover:scale-125 bg-white dark:bg-black ${index % 2 === 0 ? 'border-blue-500/40 dark:border-white/30' : 'border-slate-900/20 dark:border-white/30'}`}>
                      <i className={`fas ${exp.icon} text-xs md:text-lg text-slate-900 dark:text-white`}></i>
                    </div>
                    
                    {/* Side Tag (Mobile Hidden) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[8px] font-mono tracking-widest opacity-30 group-hover:opacity-100 transition-opacity ${index % 2 === 0 ? 'right-full mr-6' : 'left-full ml-6'}`}>
                      ARCH_ID: {exp.id}00X
                    </div>
                  </div>
                </div>

                {/* EMPTY SPACER */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION BOTTOM ACCENT */}
      <div className="max-w-6xl mx-auto mt-20 md:mt-40 flex flex-col items-center gap-4">
        <div className="glass px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 flex items-center gap-4">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">End of Temporal Registry</span>
        </div>
         <a
           href="https://t.me/codewithme_tech"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white font-bold text-base uppercase tracking-widest shadow-lg border border-blue-200 dark:border-blue-900 relative overflow-hidden group hover:scale-105 transition-all duration-300"
           style={{boxShadow: '0 4px 32px 0 rgba(0,120,255,0.10)'}}
         >
           <span className="flex items-center justify-center w-10 h-10 mr-2 rounded-full bg-white/10 border border-blue-300 dark:border-blue-800 shadow-inner">
             <i className="fab fa-telegram-plane text-2xl text-white group-hover:text-cyan-300 transition-colors duration-300"></i>
           </span>
           <span className="z-10 drop-shadow-sm tracking-wider">Follow my journey on Telegram</span>
         </a>
      </div>
    </section>
  );
};

export default Timeline;
