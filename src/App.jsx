import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import MouseEffect from './components/MouseEffect';
import wlcBg from './assets/img/wlc-bg1.jpg';

function App() {
  const [theme, setTheme] = useState('dark'); // 'dark' or 'warm'

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'warm');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'warm' : 'dark');
  const isDark = theme === 'dark';


  let links = {
    facebook : "https://www.facebook.com/safayet.jony.3",
    twitter : '',
    linkedin : "https://www.linkedin.com/in/safayet-ul-islam/", 
    github : "https://github.com/Safa-yet"
  }

  return (
    <>
      <Preloader />
      <MouseEffect isDark={isDark} />
      
      <div className={`min-h-screen transition-all duration-700 relative ${isDark ? 'bg-[#050505] text-white' : 'bg-[#fdfbf6] text-gray-900'}`}>
        
        {/* Global Background Heritage Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
           <img 
              src={wlcBg} 
              alt="" 
              className={`w-full h-full object-cover transition-opacity duration-700 ${isDark ? 'opacity-[0.1] grayscale brightness-50' : 'opacity-[0.03] grayscale brightness-110'}`} 
           />
           {/* Gradient Overlay for the background image */}
           <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]' : 'bg-gradient-to-b from-[#fdfbf6]/80 via-transparent to-[#fdfbf6]'}`} />
        </div>

        {/* Warm Pattern (Paper/Noise) */}
        {!isDark && (
          <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />
        )}
        
        <Navbar isDark={isDark} theme={theme} toggleTheme={toggleTheme} links={links} />
        <main className="relative z-10">
          <Hero isDark={isDark} theme={theme} />
          <About isDark={isDark} theme={theme} />
          <Experience isDark={isDark} theme={theme} />
          <Skills isDark={isDark} theme={theme} />
          <Services isDark={isDark} theme={theme} />
          <Projects isDark={isDark} theme={theme} />
          <Contact isDark={isDark} theme={theme} />
        </main>
        <Footer isDark={isDark} theme={theme} links={links}  />
      </div>
    </>
  );
}

export default App;
