
import React from 'react';
import '../circular-orbit.css';
import headshotUrl from '../photo_2026-02-16_09-36-25__1_-removebg-preview.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="pointer-events-none absolute -inset-10">
              <div className="absolute inset-6 rounded-full border border-slate-200/60 dark:border-white/10 animate-[spin_22s_linear_infinite]"></div>
              <div className="absolute inset-12 rounded-full border border-slate-200/40 dark:border-white/10 animate-[spin_14s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border border-slate-200/30 dark:border-white/5 animate-[spin_28s_linear_infinite]"></div>

              <div className="absolute inset-0 animate-[spin_24s_linear_infinite]">
                <div className="absolute left-1/2 -top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-300 dark:bg-white/30"></div>
                <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-slate-300 dark:bg-white/30"></div>
                <div className="absolute left-1/2 -bottom-3 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-300 dark:bg-white/30"></div>
                <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-slate-300 dark:bg-white/30"></div>
              </div>

              <div className="absolute inset-0 animate-[spin_26s_linear_infinite]">
                <div className="absolute left-1/2 -top-6 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-md ring-1 ring-slate-200/70">
                  <i className="fab fa-react text-lg"></i>
                </div>
                <div className="absolute right-2 top-8 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-md ring-1 ring-slate-200/70">
                  <i className="fab fa-js text-base"></i>
                </div>
                <div className="absolute left-6 bottom-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-md ring-1 ring-slate-200/70">
                  <i className="fab fa-node-js text-lg"></i>
                </div>
                <div className="absolute -left-2 top-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-md ring-1 ring-slate-200/70">
                  <i className="fab fa-github text-base"></i>
                </div>
              </div>
            </div>
            <div className="aspect-square w-[22rem] h-[22rem] md:w-[36rem] md:h-[36rem] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group relative">
              <div className="pointer-events-none absolute inset-0 z-0">
                {/* Blurred color gradients for modern tech look */}
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400/40 via-blue-300/30 to-transparent blur-2xl"></div>
                <div className="absolute -bottom-12 -right-8 w-48 h-48 rounded-full bg-gradient-to-tr from-fuchsia-400/40 via-amber-200/30 to-transparent blur-3xl rotate-6"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-300/30 via-cyan-200/20 to-transparent blur-2xl"></div>

                {/* Minimal floating icons */}
                <div className="absolute top-8 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-cyan-500 shadow ring-1 ring-cyan-200 animate-float-slow">
                  <i className="fab fa-react text-lg"></i>
                </div>
                <div className="absolute bottom-10 right-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-yellow-500 shadow ring-1 ring-yellow-200 animate-float-medium">
                  <i className="fab fa-js text-base"></i>
                </div>
                <div className="absolute top-12 right-16 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-green-500 shadow ring-1 ring-green-200 animate-float-fast">
                  <i className="fab fa-node-js text-lg"></i>
                </div>
                <div className="absolute bottom-8 left-12 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-indigo-500 shadow ring-1 ring-indigo-200 animate-float-medium">
                  <i className="fab fa-python text-base"></i>
                </div>
                <div className="absolute top-1/2 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-pink-500 shadow ring-1 ring-pink-200 animate-float-slow">
                  <i className="fab fa-html5 text-base"></i>
                </div>
              </div>
                <img 
                  src={headshotUrl}
                  alt="Dorsis Girma" 
                  className="relative z-10 w-full h-full object-contain object-bottom transition-all duration-1000 opacity-90 rounded-full"
                />
                {/* Animate JS, GitHub, and React icons in a true circular orbit, only around the photo */}
                <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                  <span className="absolute js-orbit" style={{transform:'translate(-50%, -50%)'}}>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-yellow-500 ring-1 ring-yellow-200 shadow">
                      <i className="fab fa-js text-base"></i>
                    </span>
                  </span>
                  <span className="absolute react-orbit" style={{transform:'translate(-50%, -50%)'}}>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sky-500 ring-1 ring-sky-200 shadow">
                      <i className="fab fa-react text-base"></i>
                    </span>
                  </span>
                  <span className="absolute github-orbit" style={{transform:'translate(-50%, -50%)'}}>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 ring-1 ring-slate-300 shadow">
                      <i className="fab fa-github text-base"></i>
                    </span>
                  </span>
                </div>
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-200/50 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
              {/* Add keyframes for orbiting motion in tailwind.config.js or via global CSS */}

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 glass border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase rounded-full">
              Protocol: Engineer_Profile
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter text-slate-900 dark:text-white">
              SCALABLE <br/> & <span className="text-blue-600 dark:text-gray-500">SECURE.</span>
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                I’m <span className="font-bold text-slate-900 dark:text-white">Dorsis Girma</span>, a student at <span className="font-bold text-blue-600 dark:text-blue-400">Addis Ababa University</span> majoring in Electrical and Computer Engineering (2024–present, currently 5th year).
              </p>
              <p>
                I work as a Full Stack Developer and System Architect at <span className="text-slate-900 dark:text-white font-bold">Ayrab Tech Solution</span>, and as a Software Engineer (Systems) at <span className="text-slate-900 dark:text-white font-bold">INSA</span> (Information Network Security Administration), building robust web applications, scalable backend systems, and secure infrastructure.
              </p>
              <p>
                My focus is on secure, scalable systems, system architecture, database design, and performance optimization—building solutions that last.
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
                {/* GitHub */}
                <a
                  href="https://github.com/orod-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 min-w-[2.75rem] min-h-[2.75rem] rounded-full border border-slate-200 dark:border-white/20 flex items-center justify-center text-slate-900 dark:text-white bg-white dark:bg-slate-900 shadow-sm hover:scale-110 transition-transform"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/dorsis-girma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 min-w-[2.75rem] min-h-[2.75rem] rounded-full border border-[#0A66C2] flex items-center justify-center text-[#0A66C2] bg-white shadow-sm hover:scale-110 transition-transform"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                {/* Telegram */}
                <a
                  href="https://t.me/codewithme_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-11 h-11 min-w-[2.75rem] min-h-[2.75rem] rounded-full border border-[#229ED9] flex items-center justify-center text-[#229ED9] bg-white shadow-sm hover:scale-110 transition-transform"
                >
                  <i className="fab fa-telegram-plane text-lg"></i>
                </a>
                {/* Phone */}
                <a
                  href="tel:+251955385937"
                  aria-label="Phone"
                  className="flex items-center gap-2 group"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="w-11 h-11 min-w-[2.75rem] min-h-[2.75rem] rounded-full border border-green-400 flex items-center justify-center text-green-600 bg-white shadow-sm group-hover:scale-110 transition-transform">
                    <i className="fas fa-phone-alt text-lg"></i>
                  </span>
                  <span className="font-bold text-white text-lg md:text-xl select-text group-hover:underline">+251955385937</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
