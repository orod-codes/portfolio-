
import React from 'react';

const Footer: React.FC = () => {
  const socials = [
    { icon: 'fab fa-github', href: 'https://github.com/yeabsira-mihret' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/yeabsira-mihret' },
    { icon: 'fab fa-behance', href: 'https://www.behance.net/yeabsiramihret' },
    { icon: 'fab fa-x-twitter', href: 'https://x.com/yabsira_mihret' },
  ];

  return (
    <footer className="py-12 md:py-20 px-6 border-t border-slate-200 dark:border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black font-black text-sm md:text-lg">D</div>
            <span className="font-black text-lg md:text-xl tracking-tighter uppercase text-slate-900 dark:text-white">Dorsis Girma</span>
          </div>
          <p className="text-slate-500 dark:text-gray-500 text-[9px] md:text-xs font-mono max-w-xs uppercase tracking-[0.1em] leading-relaxed">
            Building the next iteration of digital infrastructures. Secure. Aesthetic. Scalable.
          </p>
        </div>

        <div className="text-[8px] md:text-[10px] font-black text-slate-400 dark:text-gray-600 uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} DORSIS_LABS // ALL_SYSTEMS_GO
        </div>

        <div className="flex space-x-4 md:space-x-6">
          {socials.map((social) => (
            <a 
              key={social.icon} 
              href={social.href} 
              target="_blank" 
              className="w-10 h-10 md:w-12 md:h-12 glass rounded-full flex items-center justify-center text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-900 dark:hover:border-white transition-all border border-slate-200 dark:border-white/5"
            >
              <i className={`${social.icon} text-sm md:text-base`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
