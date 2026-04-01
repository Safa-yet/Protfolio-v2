import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Terminal, Github, Box, Cpu, Layers, Palette, Wind, Globe, Code2, Figma } from 'lucide-react';

const Skills = ({ isDark }) => {
  const skills = [
    { name: 'HTML5', icon: <Code2 className="text-orange-500" />, level: '95%' },
    { name: 'CSS3', icon: <Globe className="text-blue-500" />, level: '90%' },
    { name: 'JavaScript', icon: <Cpu className="text-yellow-500" />, level: '92%' },
    { name: 'React', icon: <Box className="text-cyan-400" />, level: '95%' },
    { name: 'Tailwind', icon: <Wind className="text-sky-400" />, level: '98%' },
    { name: 'Bootstrap', icon: <Layers className="text-purple-500" />, level: '85%' },
    { name: 'Git', icon: <Terminal className="text-red-500" />, level: '88%' },
    { name: 'GitHub', icon: <Github className={isDark ? 'text-white' : 'text-black'} />, level: '90%' },
    { name: 'Figma', icon: <Figma className="text-pink-500" />, level: '80%' },
  ];

  return (
    <section id="skills" className={`py-32 relative overflow-hidden transition-colors duration-700 ${isDark ? 'bg-[#050505]' : 'bg-[#fcf8ed]'}`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.5em] text-xs mb-4">Capabilities</span>
          <h1 className={`text-6xl md:text-8xl font-black text-center uppercase leading-none ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>
            My <span className="text-gray-400 italic">Skills</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, borderColor: '#08d665' }}
              className={`p-8 rounded-[32px] border transition-all duration-300 flex flex-col items-center gap-6 group cursor-default shadow-xl ${isDark ? 'bg-white/[0.02] border-white/5' : 'bg-white border-[#f0ecd8]'}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors shadow-inner ${isDark ? 'bg-white/5 group-hover:bg-primary/10' : 'bg-[#fdfbf6] group-hover:bg-primary/10 border border-[#f0ecd8]'}`}>
                {React.cloneElement(skill.icon, { size: 32 })}
              </div>
              <div className="text-center w-full">
                <h3 className={`font-bold uppercase tracking-widest text-sm mb-2 ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>{skill.name}</h3>
                <div className={`w-full h-1 rounded-full overflow-hidden mt-2 ${isDark ? 'bg-white/5' : 'bg-gray-200'}`}>
                   <motion.div initial={{ width: 0 }} whileInView={{ width: skill.level }} transition={{ duration: 1.5 }} className="h-full bg-primary" />
                </div>
              </div>
            </motion.div>
          ))}
          <div className={`mx-auto col-span-5 p-8 rounded-[32px] border flex flex-col justify-center items-center text-center ${isDark ? 'bg-primary/5 border-primary/20' : 'bg-primary/5 border-primary/20 shadow-md'}`}>
             <h2 className={`text-2xl font-black uppercase mb-2 ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>Want to build something?</h2>
             <a href="#contact" className="bg-primary text-black px-10 py-4 rounded-2xl font-bold uppercase hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 shadow-lg shadow-primary/20">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
