import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/Gemini_Generated_Image_4zp41q4zp41q4zp4.png';
import { Download, User, Coffee, Award, Star } from 'lucide-react';
import resume from "/public/Safayet_Resume_Updated.pdf"


const About = ({ isDark }) => {
  const stats = [
    { label: 'Experience', value: '2+', icon: <Award className="text-primary" /> },
    { label: 'Projects', value: '70+', icon: <Star className="text-primary" /> },
    { label: 'Clients', value: '15+', icon: <User className="text-primary" /> },
    { label: 'Coffee', value: '1k+', icon: <Coffee className="text-primary" /> },
  ];

  return (
    <section id="about" className={`py-32 relative overflow-hidden transition-colors duration-700 ${isDark ? 'bg-[#080808]' : 'bg-[#fcf8ed]'}`}>
      
      {/* Original BG shapes from legacy project might go here */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group"
          >
            <div className={`relative z-10 rounded-[40px] overflow-hidden border shadow-2xl transition-all duration-700 ${isDark ? 'border-white/10' : 'border-black/5'}`}>
              <img 
                src={aboutImg} 
                className={`w-full aspect-[4/5] object-cover transition-all duration-700 ${isDark ? 'grayscale brightness-75 hover:grayscale-0 hover:brightness-100' : 'sepia-[0.3] brightness-105 hover:sepia-0'}`} 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl z-20 hidden md:block shadow-2xl">
               <h2 className="text-5xl font-black text-black mb-1 leading-none">02+</h2>
               <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-black opacity-60">Years of <br /> Excellence</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold uppercase tracking-[0.5em] text-xs mb-4 block">Discover</span>
            <h1 className={`text-5xl lg:text-7xl font-black uppercase leading-none mb-8 ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>
              About <span className="text-gray-400">Me</span>
            </h1>
            
            <div className={`p-8 rounded-r-3xl mb-10 border-l-4 border-primary shadow-sm ${isDark ? 'bg-white/5' : 'bg-white'}`}>
               <h3 className={`text-xl font-bold mb-4 uppercase italic tracking-widest ${isDark ? 'text-white' : 'text-gray-800'}`}>"Web development is an art of solving problems with code."</h3>
               <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg leading-relaxed`}>I’m Safayet Ul Islam, a results-driven Frontend Developer specializing in React, Next.js, and modern UI development. I build fast, scalable, and user-focused web applications with clean design and efficient performance.

Currently, I’m advancing my skills in full-stack development while also working with WordPress, Elementor, WooCommerce, and SEO to deliver complete web solutions.

My goal is to create impactful digital experiences that combine performance, usability, and modern design.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
               {stats.map((stat, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDark ? 'bg-white/5' : 'bg-white shadow-md'}`}>
                       {stat.icon}
                    </div>
                    <div>
                       <h4 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>{stat.value}</h4>
                       <h5 className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{stat.label}</h5>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex gap-6">
              <button className="bg-primary text-black px-12 py-5 rounded-2xl font-black uppercase hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 shadow-xl shadow-primary/10">Hire Me</button>
              <a href={resume} className='cursor-pointer'><button className={`p-5 rounded-2xl border transition-all hover:bg-black hover:text-white ${isDark ? 'border-white/10 text-white' : 'border-black/5 text-black bg-white shadow-sm'}`}>
                <Download size={20} />
              </button>
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
