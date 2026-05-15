import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/img/Gemini_Generated_2-removebg-preview-removebg-preview.png';

import resume from "/public/Safayet_Resume_Updated.pdf"
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ isDark }) => {
  return (
    <section id="home" className={`min-h-screen flex items-center lg:pt-24 relative overflow-hidden transition-colors duration-700 ${isDark ? 'bg-transparent text-white' : 'bg-transparent text-gray-900'}`}>
      
      <div className="container mx-auto px-6 relative z-10 pt-32 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-8xl font-black uppercase mb-2 leading-none">
              I'm <span className="text-primary italic">Safayet</span>
            </h1>
            <h2
  className={`text-2xl lg:text-4xl font-black uppercase mb-8 tracking-[0.1em] ${
    isDark ? 'text-gray-400' : 'text-gray-600'
  }`}
>
  <TypeAnimation
    sequence={[
      'Frontend Developer',
      2000,
      '',
      500,

      'React Developer',
      2000,
      '',
      500,

      'Next.js Developer',
      2000,
      '',
      500,

      'MERN Stack Developer',
      2000,
      '',
      500,

      'UI Focused Developer',
      2000,
      '',
      500,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    cursor={true}
  />
</h2>
            <div className="relative mb-10 group">
                <p className={`text-lg border-l-4 border-primary pl-8 max-w-xl italic leading-relaxed py-2 backdrop-blur-md rounded-r-lg ${isDark ? 'text-white/80 bg-black/40' : 'text-gray-700 bg-black/5'}`}>
                  Crafting high-performance web applications with React & Next.js.
Focused on clean design and seamless user experience.
                </p>
                <div className="absolute -left-1 top-0 w-1 h-full bg-primary" />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
              <button className="bg-primary text-black px-12 py-4 font-black uppercase hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
                Hire Me
              </button>
              <button src={resume} className={`border-2 border-primary text-primary px-12 py-4 font-black uppercase hover:bg-primary hover:text-black transition-all transform hover:scale-105 w-full sm:w-auto`}>
                <a className='block' href={resume} download >Download CV</a>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <div className={`absolute inset-0 blur-[120px] rounded-full scale-75 animate-pulse ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`} />
            <img 
              src={heroImg} 
              alt="Safayet" 
              className={`w-full max-w-[550px] relative z-10 drop-shadow-[0_20px_50px_rgba(8,214,101,0.4)] transition-transform duration-700 ${!isDark && 'sepia-[0.2] brightness-110 drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)]'}`} 
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className={`text-[10px] uppercase font-bold tracking-[0.5em] ${isDark ? 'text-white' : 'text-black'}`}>Scroll</span>
        <div className={`w-px h-12 ${isDark ? 'bg-gradient-to-b from-primary to-transparent' : 'bg-gradient-to-b from-primary to-transparent'}`} />
      </motion.div>
    </section>
  );
};

export default Hero;
