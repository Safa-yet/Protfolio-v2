import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send } from 'lucide-react';
import mapBg from '../assets/img/map.png';

const Contact = ({ isDark }) => {
  return (
    <section id="contact" className={`py-24 transition-colors duration-700 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-[#fdfbf6]'}`}>
      
      {/* Heritage Map Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none grayscale invert">
         <img src={mapBg} className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Connect</h2>
            <h1 className={`text-5xl lg:text-7xl font-black mb-10 uppercase leading-none ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>Let's Work <br /> <span className="text-gray-400 underline decoration-primary/50">Together</span></h1>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg mb-12 max-w-md`}>Have a project in mind? Drop me a message and I'll get back to you as soon as possible.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? 'bg-white/5 text-primary shadow-inner' : 'bg-white text-primary border border-[#f0ecd8] shadow-md'} group-hover:bg-primary group-hover:text-black transition-all`}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest">Email</h4>
                  <p className={`text-xl font-black ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>mdsafayet315@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? 'bg-white/5 text-primary shadow-inner' : 'bg-white text-primary border border-[#f0ecd8] shadow-md'} group-hover:bg-primary group-hover:text-black transition-all`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest">Location</h4>
                  <p className={`text-xl font-black ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div className={`p-12 rounded-[50px] border shadow-2xl transition-all duration-500 overflow-hidden relative ${isDark ? 'bg-white/[0.02] border-white/5' : 'bg-white border-[#f0ecd8]'}`}>
            {/* Background Accent for Form */}
            {!isDark && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full" />
            )}
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-bold uppercase tracking-widest text-[10px]">
                <div className="space-y-3">
                  <label className="text-gray-500 ml-2">Full Name</label>
                  <input className={`w-full uppercase border rounded-2xl px-6 py-5 focus:border-primary focus:outline-none transition-all shadow-inner ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-[#fdfbf6] border-gray-200 text-black'}`} placeholder="YOUR NAME" />
                </div>
                <div className="space-y-3">
                  <label className="text-gray-500 ml-2">Email Address</label>
                  <input className={`w-full border rounded-2xl px-6 py-5 focus:border-primary focus:outline-none transition-all shadow-inner ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-[#fdfbf6] border-gray-200 text-black'}`} type='email' placeholder="YOUR EMAIL" required />
                </div>
              </div>
              <div className="space-y-3">
                 <label className="text-gray-500 ml-2 font-bold uppercase tracking-widest text-[10px]">Your Message</label>
                 <textarea rows="4" className={`w-full border rounded-3xl px-6 py-5 focus:border-primary focus:outline-none transition-all shadow-inner ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-[#fdfbf6] border-gray-200 text-black'}`} placeholder="HOW CAN I HELP YOU?" />
              </div>
              <button className="w-full bg-primary text-black font-black py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-900 hover:text-white transition-all transform hover:scale-[1.01] shadow-xl shadow-primary/30 uppercase tracking-[0.2em]">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
