
import React, { useEffect, useState } from 'react';

const GlobalDecor: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; left: string; duration: string; delay: string; size: string }[]>([]);
  const [hexCode, setHexCode] = useState("");

  useEffect(() => {
    // Fewer particles on mobile for performance
    const count = window.innerWidth < 768 ? 12 : 25;
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${8 + Math.random() * 15}s`,
      delay: `${Math.random() * 10}s`,
      size: `${1 + Math.random() * 2}px`
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      const chars = "0123456789ABCDEF";
      let res = "";
      for (let i = 0; i < 16; i++) res += chars[Math.floor(Math.random() * 16)];
      setHexCode(res);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[110] overflow-hidden text-slate-900 dark:text-white select-none">
      {/* Corner Brackets / HUD Elements - Responsive scaling */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-1 md:gap-2">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 dark:bg-white animate-pulse"></div>
          <span className="text-[8px] md:text-[10px] font-mono opacity-50 uppercase tracking-[0.2em] md:tracking-[0.3em]">Sys_Active</span>
        </div>
        <div className="text-[7px] md:text-[9px] font-mono opacity-20 uppercase tracking-[0.2em] hidden sm:block">LOC: ETH / 09.02N 38.44E</div>
        <div className="text-[7px] md:text-[8px] font-mono opacity-10 tracking-tighter overflow-hidden whitespace-nowrap w-24 md:w-40">
           {hexCode}
        </div>
      </div>

      <div className="absolute top-4 right-4 md:top-8 md:right-8 text-right flex flex-col gap-1 md:gap-2 items-end">
        <div className="text-[8px] md:text-[10px] font-mono opacity-50 uppercase tracking-[0.2em] md:tracking-[0.3em]">v3.1.0-S</div>
        <div className="flex gap-0.5 md:gap-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`w-0.5 md:w-1 h-2 md:h-3 ${i < 4 ? 'bg-blue-600 dark:bg-white' : 'bg-slate-300 dark:bg-white/10'}`}></div>
          ))}
        </div>
      </div>

      {/* Side Decorative Data Stream - Hidden on small mobile */}
      <div className="absolute top-1/2 left-2 -translate-y-1/2 hidden md:flex flex-col gap-10 items-center opacity-10">
        <div className="rotate-[-90deg] text-[7px] font-mono tracking-[1em] whitespace-nowrap">INTERFACE_PROTO_X</div>
        <div className="w-[1px] h-20 bg-current"></div>
      </div>

      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex items-end gap-4 md:gap-6">
        <div className="flex flex-col gap-1 opacity-20">
          <div className="w-8 md:w-12 h-[1px] bg-blue-600 dark:bg-white"></div>
          <div className="w-12 md:w-16 h-[1px] bg-blue-600 dark:bg-white"></div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end gap-2 md:gap-3">
        <div className="w-12 h-12 md:w-20 md:h-20 border-r border-b border-slate-900/10 dark:border-white/10 relative">
           <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-600 dark:bg-white opacity-80"></div>
        </div>
        <span className="text-[7px] md:text-[10px] font-mono opacity-40 uppercase tracking-[0.2em] font-black italic">DORSIS GIRMA</span>
      </div>

      {/* Vertical Data Particles */}
      {particles.map((p) => (
        <div 
          key={p.id}
          className="data-particle"
          style={{ 
            left: p.left, 
            bottom: '-120px',
            width: p.size,
            height: '60px',
            opacity: 0.1,
            animationDuration: p.duration,
            animationDelay: p.delay
          }}
        ></div>
      ))}
    </div>
  );
};

export default GlobalDecor;
