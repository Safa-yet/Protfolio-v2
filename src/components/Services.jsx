import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Search, Smartphone, Layers, Zap } from 'lucide-react';

const Services = ({ isDark }) => {
  const services = [
    { title: 'Frontend Development', desc: 'Crafting responsive, high-performance web applications using modern frameworks.', icon: <Layers size={32} />, gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Creative UI Design', desc: 'Designing visually stunning interfaces that engage users and brand identity.', icon: <Zap size={32} />, gradient: 'from-purple-500 to-pink-500' },
    { title: 'Mobile Optimization', desc: 'Ensuring your digital presence is flawless across all mobile devices.', icon: <Smartphone size={32} />, gradient: 'from-orange-500 to-red-500' },
    { title: 'SEO Strategy', desc: 'Optimizing your web applications for maximum search engine visibility.', icon: <Search size={32} />, gradient: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section id="services" className={`py-32 relative overflow-hidden transition-colors duration-700 ${isDark ? 'bg-black' : 'bg-[#fdfbf6]'}`}>
      
      {/* Background Overlay Effect */}
      <div className={`absolute inset-0 z-0 pointer-events-none ${isDark ? 'opacity-[0.03] bg-[url("https://grainy-gradients.vercel.app/noise.svg")]' : 'opacity-[0.05] bg-[url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")]'}`} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block">My Services</span>
            <h1 className={`text-5xl md:text-8xl font-black leading-none uppercase ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>High Impact <br /><span className="text-gray-400 underline decoration-primary/30">Solutions</span></h1>
          </div>
          <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-lg max-w-sm mb-4 border-l-2 border-primary pl-6 italic`}>I help businesses grow by creating stunning digital experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} whileHover={{ y: -10 }} className={`group relative p-12 rounded-[48px] border transition-all duration-500 overflow-hidden ${isDark ? 'bg-[#0a0a0a] border-white/5 hover:border-primary/20 shadow-2xl' : 'bg-white border-[#f0ecd8] hover:border-primary/20 shadow-xl'}`}>
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-[80px] transition-opacity duration-700`} />
              <div className="flex flex-col h-full relative z-10">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-all duration-500 shadow-xl ${isDark ? 'bg-white/5 group-hover:bg-primary/10' : 'bg-[#fdfbf6] group-hover:bg-primary/5 border border-[#f0ecd8]'}`}>
                   <div className="text-primary group-hover:scale-110 transition-transform">{service.icon}</div>
                </div>
                <h3 className={`text-3xl font-black uppercase mb-6 group-hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>{service.title}</h3>
                <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-lg mb-10 transition-colors`}>{service.desc}</p>
                <div className={`mt-auto pt-8 border-t flex items-center justify-between ${isDark ? 'border-white/5' : 'border-[#f0ecd8]'}`}>
                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 group-hover:text-primary">Learn More</span>
                   <Rocket size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
