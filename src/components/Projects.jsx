import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import p1 from '../assets/img/webimg/Cricket-BPL.png';
import p2 from '../assets/img/webimg/FreshHeat Restaurent.png';
import p3 from '../assets/img/webimg/Emmar Estate Limited.png';
import p4 from '../assets/img/webimg/Techwave-A02.png'; // Fallback
import p5 from '../assets/img/webimg/Screenshot 2026-03-26 at 19-25-35 English Janala - With API.png'; // Fallback
import p6 from '../assets/img/webimg/Sundarban Tour & Adventure.png'; // Fallback

const Projects = ({ isDark }) => {
  const projects = [
    { title: 'CrickBuzz', category: 'Web App', img: p1 ,link:'https://cricket-player-hire.netlify.app/'},
    { title: 'Fresh Heat Restaurent', category: 'Restaurent Webpage', img: p2,link:"https://fresh-heat.netlify.app/" },
    { title: 'Emmar Estae Liited', category: 'Construction Company', img: p3 ,link: "https://brickconstruc.netlify.app/"},
    { title: 'Tech-Wave Podcast', category: 'Media ', img: p4,link:"https://tech-wavebd.netlify.app/" },
    { title: 'English Janala', category: 'Dictonary', img: p5,link:"https://eng-ban-janala.netlify.app/" },
    { title: 'Sundarban Travel Agency', category: 'Entertainment', img: p6,link:"https://sundarban-travels-tour.netlify.app/" },
  ];

  return (
    <section id="portfolio" className={`py-32 transition-colors duration-700 relative overflow-hidden ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#fcf8ed]'}`}>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h2 className="text-primary font-bold tracking-[0.4em] uppercase mb-4 text-xs">Portfolio</h2>
            <h1 className="text-4xl lg:text-7xl font-black uppercase leading-none">Featured <br /> <span className="opacity-40 italic">Projects</span></h1>
          </div>
          <div className="mt-8 md:mt-0">
            <p className={`max-w-xs text-sm italic border-l-2 border-primary pl-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Every project is a unique blend of heritage brand values and modern performance architectures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="group relative h-[450px] rounded-[40px] overflow-hidden cursor-pointer shadow-2xl"
            >
               {/* Project Image Container */}
               <div className="absolute inset-0 transition-all duration-700">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" 
                  />
                  {/* Subtle Dark Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? 'bg-black/40 group-hover:bg-black/10' : 'bg-[#fdfbf6]/30 group-hover:bg-transparent'}`} />
               </div>

               {/* Content Overlay */}
               <div className="absolute inset-x-8 bottom-8 z-10">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className={`p-8 rounded-[30px] border backdrop-blur-md transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 ${isDark ? 'bg-black/60 border-white/10 group-hover:bg-primary group-hover:border-primary' : 'bg-white/90 border-black/5 group-hover:bg-primary group-hover:border-primary'}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <h4 className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isDark ? 'text-gray-400 group-hover:text-black' : 'text-gray-500 group-hover:text-black'}`}>{project.category}</h4>
                          <h3 className={`text-2xl font-black uppercase tracking-tight transition-colors ${isDark ? 'text-white group-hover:text-black' : 'text-gray-900 group-hover:text-black'}`}>{project.title}</h3>
                       </div>
                        <a href={project.link}>
                       <div className="bg-primary/20 p-3 rounded-full group-hover:bg-white transition-colors ">
                         <ExternalLink size={20} className="text-primary group-hover:text-black" />
                       </div>
                       </a>
                    </div>
                    
                    <div className="flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                       <button className="flex items-center gap-2 text-xs font-black uppercase text-black hover:scale-110 transition-transform">
                          <Github size={16} /> Source Code
                       </button>
                    </div>
                  </motion.div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
