import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = ({ isDark }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    // { year: '2021 - Present', title: 'Senior Web Developer', company: 'Digital Solutions Inc.', desc: 'Leading a team of developers to build high-performance web applications using React and Next.js.', icon: <Briefcase size={20} /> },
    { year: '2024 - Present', title: 'Front End Developer', company: 'Rupsha It Park', desc: 'Developed and maintained web applications with React, Next.js, TailwindCss, JavaScript', icon: <Briefcase size={20} /> },
    { year: '2023 - Present ', title: 'BSc in Computer Science And Engineering', company: 'American International University Bangladesh', desc: 'Studing my degree with a focus on web technologies and software engineering.', icon: <GraduationCap size={20} /> },
    { year: '2019 - 2021', title: 'Higher Secondary Certificate', company: 'Dhaka Imperial College', desc: 'Science', icon: <GraduationCap size={20} /> }
  ];

  return (
    <section id="experience" ref={containerRef} className={`py-24 relative overflow-hidden transition-colors duration-700 ${isDark ? 'bg-black' : 'bg-[#fdfbf6]'}`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
           <h2 className="text-primary font-bold tracking-widest uppercase mb-4">My Journey</h2>
           <h1 className={`text-5xl lg:text-7xl font-black leading-none uppercase ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>Experience <span className="text-gray-400 italic">& Education</span></h1>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Static Background Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden md:block ${isDark ? 'bg-gray-800' : 'bg-[#d8d3c0]'}`}></div>
          
          {/* Animated Progress Line */}
          <motion.div style={{ scaleY }} className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary origin-top hidden md:block z-0"></motion.div>

          <div className="space-y-12">
            {experiences.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 border-primary rounded-full hidden md:flex items-center justify-center z-10 shadow-lg ${isDark ? 'bg-black text-primary' : 'bg-white text-primary'}`}>
                   {item.icon}
                </div>
                <div className={`md:w-1/2 w-full p-8 rounded-3xl border transition-all duration-500 hover:bg-primary/5 ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-[#f0ecd8] shadow-sm'}`}>
                  <span className="text-primary font-bold text-sm tracking-[0.2em] mb-4 block uppercase font-black">{item.year}</span>
                  <h3 className={`text-2xl font-black uppercase mb-2 ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>{item.title}</h3>
                  <h4 className="text-lg font-bold text-gray-400 mb-6 uppercase tracking-wider">{item.company}</h4>
                  <p className={`${isDark ? 'text-white/50' : 'text-gray-600'} italic`}>{item.desc}</p>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
