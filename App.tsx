import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
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

  return (
    <div className={`antialiased transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
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