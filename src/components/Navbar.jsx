import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ChevronsRight, Search, Menu as MenuIcon, X as XIcon, Moon, Coffee, ArrowLeft, ArrowRight, Sun, ExternalLink, Mail, Phone, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/img/s-favicon.png';
import msgIcon from '../assets/img/msg-icon.svg';
import hamburger from '../assets/img/hamburger.svg';
import profileImg from '../assets/img/safayet-formal-pic.png';

const Navbar = ({ isDark, theme, toggleTheme ,links}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const marqueeTexts = [
    "Elementor Is Great WordPress Builder...",
    "Professional Web Development Services...",
    "Creating Stunning User Interfaces...",
    "Available for Freelance Projects..."
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Inner Navigation (Top Bar) */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`hidden lg:block border-b transition-colors duration-500 overflow-hidden ${isDark ? 'bg-[#2e3d44] text-white border-white/10' : 'bg-[#e9e4d1] text-gray-800 border-gray-300'}`}
          >
            <div className="container mx-auto px-6 py-2 flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
              <div className="flex items-center gap-4 w-1/2 overflow-hidden">
                <button className="bg-[#08d665] p-2 hover:-translate-y-1 transition-transform flex-shrink-0 rounded-sm">
                  <img src={msgIcon} alt="" className="w-4 h-4" />
                </button>
                <div className="w-full relative overflow-hidden h-4 flex items-center gap-2">
                  <div className="flex-1 relative overflow-hidden h-4">
                    <motion.div
                      animate={{ x: ["100%", "-100%"] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="whitespace-nowrap flex gap-12 items-center"
                    >
                      {marqueeTexts.map((text, i) => (
                        <span key={i} className={isDark ? 'text-white' : 'text-gray-800'}>{text}</span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Arrows with Heritage Styling */}
                  <div className="flex items-center flex-shrink-0">
                    <button className={`px-3 transition-transform hover:-translate-x-1 ${isDark ? 'border-r border-white/20' : 'border-r border-black/10'}`}>
                      <ArrowLeft size={14} className={isDark ? 'text-white' : 'text-gray-800'} />
                    </button>
                    <button className="px-3 transition-transform hover:translate-x-1">
                      <ArrowRight size={14} className={isDark ? 'text-white' : 'text-gray-800'} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className={`flex gap-4 border-l pl-6 h-8 items-center ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  <a href={links.facebook} className={`hover:text-primary transition-all ${isDark ? 'text-white' : 'text-gray-800'}`}><Facebook size={14} /></a>
                  <a href={links.twitter} className={`hover:text-primary transition-all ml-2 ${isDark ? 'text-white' : 'text-gray-800'}`}><Twitter size={14} /></a>
                  <a href={links.linkedin} className={`hover:text-primary transition-all ml-2 ${isDark ? 'text-white' : 'text-gray-800'}`}><Linkedin size={14} /></a>
                  <a href={links.github} className={`hover:text-primary transition-all ml-2 ${isDark ? 'text-white' : 'text-gray-800'}`}><Github size={14} /></a>
                </div>

                <button className="bg-[#08d665] h-8 px-4 font-black flex items-center gap-2 group transition-all hover:bg-white hover:text-black text-white">
                  <ChevronsRight size={14} className="group-hover:translate-x-1" /> Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${scrolled ? (isDark ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-[#fdfbf6]/95 backdrop-blur-md border-b border-gray-200 py-3 text-black') : (isDark ? 'bg-black py-4 border-b border-white/10' : 'bg-transparent py-4 border-b border-gray-200/50 text-black')}`}>
        <div className="container mx-auto px-6 flex justify-between items-center font-bold tracking-[0.2em] text-[10px] uppercase">
          <a href="#home" className="text-3xl font-bold">
            𝒮𝒶𝒻𝒶<span className='text-primary'>𝓎𝑒𝓉</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-all relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Unique Modern Theme Switcher */}
            <div className="ml-4 flex items-center">
              <div
                onClick={toggleTheme}
                className={`relative w-20 h-9 rounded-full cursor-pointer p-1 transition-all duration-500 shadow-inner group ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}
              >
                <motion.div
                  animate={{ x: isDark ? 0 : 44 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={`absolute inset-y-1 w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-colors ${isDark ? 'bg-primary text-black' : 'bg-[#e9e4d1] text-[#b45309]'}`}
                >
                  {isDark ? <Sun size={14} className="animate-spin-slow" /> : <Coffee size={14} />}
                </motion.div>

              </div>
            </div>

            <div className={`flex items-center gap-2 border-b transition-all pb-1 ml-4 group ${isDark ? 'border-white/20 focus-within:border-primary' : 'border-black/20 focus-within:border-primary'}`}>
              <Search size={14} className="text-primary group-focus-within:scale-110 transition-transform" />
              <input type="text" placeholder="Search" className="bg-transparent outline-none w-24 placeholder:uppercase placeholder:text-[9px]" />
            </div>

            <button className="ml-4 cursor-pointer hover:scale-110 transition-transform" onClick={() => setIsOpen(true)}>
              <img src={hamburger} alt="Menu" className={`w-5 h-5 ${!isDark && 'invert'}`} />
            </button>
          </div>

          {/* Mobile Toggle & Mobile Switcher */}
          <div className="lg:hidden flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all ${isDark ? 'border-white/10 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'}`}
            >
              {isDark ? <Coffee size={18} className="text-amber-500" /> : <Moon size={18} className="text-blue-600" />}
            </button>
            <button className={isDark ? 'text-white' : 'text-black'} onClick={() => setIsOpen(true)}>
              <img src={hamburger} alt="" className={`w-6 h-6 ${!isDark && 'invert'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed inset-y-0 right-0 z-[70] w-full md:w-[500px] shadow-2xl flex flex-col transition-colors duration-700 overflow-hidden ${isDark ? 'bg-[#0a0a0a] border-l border-white/5 text-white' : 'bg-[#fdfbf6] border-l border-gray-200 text-gray-900'}`}
            >
              {/* Background Texture for Sidebar */}
              <div className={`absolute inset-0 z-0 opacity-[0.03] pointer-events-none ${isDark ? 'invert grayscale' : ''}`}>
                <img src="https://www.transparenttextures.com/patterns/paper.png" className="w-full h-full object-cover" />
              </div>

              <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-16">
                  <img src={logo} alt="" className="w-10 h-10" />
                  <button
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <XIcon size={24} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto pr-4 scrollbar-hide">
                  {/* Profile Block */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                  >
                    <div className="w-24 h-24 rounded-3xl overflow-hidden mb-8 border-2 border-primary shadow-2xl shadow-primary/20">
                      <img src={profileImg} alt="Safayet" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-primary mb-4">A Professional Developer</h2>
                    <h1 className="text-4xl font-black uppercase mb-6 leading-tight">Elevating Digital <br /> <span className="opacity-40 italic">Experiences</span></h1>
                    <p className={`text-lg opacity-60 italic border-l-2 border-primary/50 pl-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      I specialize in building high-performance, visually stunning React applications that merge modern tech with legacy brand values.
                    </p>
                  </motion.div>

                  {/* Navigation Block */}
                  <div className="space-y-4 mb-20">
                    <h4 className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-30 mb-8">Navigation</h4>
                    {navLinks.map((link, i) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-primary transition-all overflow-hidden"
                      >
                        <span className="text-4xl font-black uppercase tracking-tighter group-hover:text-primary group-hover:translate-x-3 transition-all duration-500">
                          {link.name}
                        </span>
                        <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all text-primary" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Contact Info Block */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-2">
                      <h6 className="text-[8px] font-bold tracking-[0.5em] uppercase opacity-30">Get in touch</h6>
                      <p className="font-bold flex items-center gap-2 underline decoration-primary/30"><Mail size={12} />mdsafayet315@gmail.com</p>
                    </div>
                    <div className="space-y-2">
                      <h6 className="text-[8px] font-bold tracking-[0.5em] uppercase opacity-30">Let's Talk</h6>
                      <p className="font-bold flex items-center gap-2 underline decoration-primary/30"><Phone size={12} /> +88 016 1255 4864</p>
                    </div>
                  </div>
                </div>

                {/* Sidebar Socials */}
                <div className="pt-12 border-t border-white/5 flex gap-8">
                  <a href={links.facebook} className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                  <a href={links.twitter} className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                  <a href={links.linkedin} className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                  <a href={links.github} className="hover:text-primary transition-colors"><github size={20} /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
