
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      const sections = ['home', 'about', 'tech-stack', 'services', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.replace('-', ' ').charAt(0).toUpperCase() + section.replace('-', ' ').slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: 'fa-house' },
    { name: 'About', href: '#about', icon: 'fa-user' },
    { name: 'Stack', href: '#tech-stack', icon: 'fa-layer-group' },
    { name: 'Services', href: '#services', icon: 'fa-microchip' },
    { name: 'Projects', href: '#projects', icon: 'fa-code-branch' },
    { name: 'Contact', href: '#contact', icon: 'fa-paper-plane' },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-0 w-full z-[100] flex justify-center px-4 pointer-events-none">
      <nav 
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`
          pointer-events-auto
          relative flex items-center justify-between
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          shadow-2xl overflow-hidden
          ${theme === 'dark' 
            ? 'bg-black/85 backdrop-blur-2xl text-white shadow-black/60' 
            : 'bg-white/90 backdrop-blur-2xl text-slate-900 shadow-slate-300 border border-slate-200'
          }
          ${isExpanded 
            ? 'w-full max-w-4xl h-16 rounded-2xl md:rounded-3xl px-4 md:px-6' 
            : scrolled 
              ? 'w-60 md:w-64 h-12 rounded-full px-4' 
              : 'w-72 md:w-80 h-14 rounded-full px-5'
          }
        `}
      >
        {/* Left Side: Logo/Status */}
        <div className="flex items-center space-x-2 md:space-x-3 overflow-hidden whitespace-nowrap shrink-0">
          <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-black text-[10px] md:text-xs shrink-0 transition-colors ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            D
          </div>
          <div className={`transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
            <span className="font-bold text-xs md:text-sm tracking-tighter">DORSIS</span>
          </div>
          {!isExpanded && (
            <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest animate-pulse ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
              {activeSection}
            </span>
          )}
        </div>

        {/* Center: Navigation Links - Scaled for phone */}
        <div className={`flex items-center space-x-0.5 md:space-x-1 transition-all duration-500 overflow-x-auto no-scrollbar ${isExpanded ? 'opacity-100 scale-100 flex-1 justify-center' : 'opacity-0 scale-90 pointer-events-none w-0'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className={`px-2 md:px-3 py-2 rounded-xl text-[10px] md:text-xs font-bold transition-all hover:bg-black/5 dark:hover:bg-white/10 flex items-center space-x-2 whitespace-nowrap ${activeSection.includes(link.name) ? (theme === 'dark' ? 'text-white' : 'text-black') : 'text-gray-500'}`}
            >
              <i className={`fas ${link.icon} text-[9px] md:text-[10px]`}></i>
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Right Side: Creative Toggle & Action */}
        <div className="flex items-center space-x-2 md:space-x-4 shrink-0">
           <button 
             onClick={(e) => {
               e.stopPropagation();
               onToggleTheme();
             }}
             className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center group focus:outline-none"
             title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
           >
             <div className={`absolute inset-0 rounded-full transition-all duration-500 border ${theme === 'dark' ? 'border-white/20 group-hover:border-white' : 'border-slate-300 group-hover:border-black'}`}></div>
             <div className="w-3 h-3 md:w-4 md:h-4 rounded-full relative overflow-hidden flex items-center justify-center">
                <div className={`absolute inset-0 transition-transform duration-500 ${theme === 'dark' ? 'translate-y-0' : '-translate-y-full'}`}>
                   <i className="fas fa-moon text-white text-[9px] md:text-[10px]"></i>
                </div>
                <div className={`absolute inset-0 transition-transform duration-500 ${theme === 'dark' ? 'translate-y-full' : 'translate-y-0'}`}>
                   <i className="fas fa-sun text-slate-900 text-[9px] md:text-[10px]"></i>
                </div>
             </div>
           </button>

           <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden sm:block'}`}>
             <a href="#contact" onClick={(e) => e.stopPropagation()} className={`px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black transition-all whitespace-nowrap ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-slate-800'}`}>
               HIRE
             </a>
           </div>
           
           <div className="relative">
             <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${theme === 'dark' ? 'bg-green-500' : 'bg-blue-600'}`}></div>
             <div className={`absolute inset-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-ping ${theme === 'dark' ? 'bg-green-500' : 'bg-blue-600'}`}></div>
           </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
