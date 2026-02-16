import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack, { TECH_LOGOS } from './components/TechStack';
import Projects from './components/Projects';
import Posters from './components/Posters';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveAssistant from './components/LiveAssistant';
import GlobalDecor from './components/GlobalDecor';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      body.style.backgroundColor = '#000000';
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      body.style.backgroundColor = '#f8fafc'; // slate-50
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading for 3-5 seconds (randomized)
      const duration = 3000 + Math.random() * 2000;
      const timer = setTimeout(() => setLoading(false), duration);
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className={`antialiased transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
        {/* Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 transition-opacity duration-700">
            {/* Programming Language Logos Grid Background */}
            <div className="pointer-events-none absolute inset-0 z-0 flex flex-wrap items-center justify-center opacity-30 select-none">
              {Object.entries(TECH_LOGOS)
                .filter(([name]) => [
                  'React', 'Next.js', 'Vue.js', 'Angular', 'Svelte',
                  'Tailwind CSS', 'Bootstrap', 'JavaScript (Node.js)', 'Python', 'Java', 'PHP', 'C#', 'Go', 'Ruby',
                  'Dart', 'Swift', 'Kotlin', 'Flutter', 'Android Studio',
                  'Express.js', 'NestJS', 'Django', 'Flask', 'Spring Boot', 'Laravel', 'ASP.NET Core',
                  'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase Firestore', 'Redis',
                  'Docker', 'Git', 'Cloud', 'cPanel', 'Shared hosting'
                ].includes(name))
                .map(([name, url], i) => (
                  <img
                    key={name}
                    src={url}
                    alt={name}
                    className="m-4 w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transition duration-500"
                    style={{
                      filter: `saturate(1.5) brightness(1.1)`,
                      opacity: 0.85,
                      transform: `scale(${0.95 + 0.1 * Math.sin(i)}) rotate(${(i % 4) * 7 - 10}deg) translateY(${8 * Math.sin(Date.now() / 900 + i)}px)`,
                      animation: `logoFloat 2.4s ease-in-out ${i * 0.13}s infinite alternate`
                    }}
                  />
                ))}
              <style>{`
                @keyframes logoFloat {
                  0% { filter: saturate(1.5) brightness(1.1); opacity: 0.85; transform: translateY(0); }
                  100% { filter: saturate(2.2) brightness(1.2); opacity: 1; transform: translateY(16px); }
                }
              `}</style>
            </div>
            <div className="flex flex-col items-center gap-4 relative z-10">
              {/* Moving Line Loader */}
              <div className="relative w-32 h-8 flex items-center justify-center">
                <div className="absolute left-0 top-1/2 w-full h-1 bg-white/20 rounded-full -translate-y-1/2"></div>
                <div className="absolute left-0 top-1/2 h-2 w-1/4 bg-gradient-to-r from-cyan-400 via-blue-400 to-white rounded-full -translate-y-1/2 animate-moveLine"></div>
                <style>{`
                  @keyframes moveLine {
                    0% { left: 0; width: 20%; opacity: 0.7; }
                    40% { left: 40%; width: 30%; opacity: 1; }
                    80% { left: 80%; width: 20%; opacity: 0.7; }
                    100% { left: 0; width: 20%; opacity: 0.7; }
                  }
                  .animate-moveLine {
                    animation: moveLine 1.2s cubic-bezier(0.4,0,0.2,1) infinite;
                  }
                `}</style>
              </div>
              <div className="flex flex-row items-center gap-1 mt-2 relative">
                {[...'DORSIS'].map((char, i) => (
                  <span
                    key={i}
                    className={`text-4xl font-black tracking-widest text-white drop-shadow-xl animate-bounce`}
                    style={{ animationDelay: `${i * 0.12}s` }}
                  >
                    {char}
                  </span>
                ))}
                {/* Animated Underline */}
                <span className="absolute left-0 right-0 -bottom-2 h-1 bg-white rounded-full animate-pulse opacity-90"></span>
              </div>
              <span className="text-white text-base font-semibold tracking-widest mt-1 opacity-95 drop-shadow">Portfolio is loading...</span>
            </div>
          </div>
        )}
      <GlobalDecor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Services />
        <Projects />
        <Posters />
        <Timeline />
        <Contact />
      </main>
      <LiveAssistant />
      <Footer />
    </div>
  );
};

export default App;