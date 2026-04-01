import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Send, Github } from 'lucide-react';
import logo from '../assets/img/s-favicon.png';
import mapBg from '../assets/img/map.png';

const Footer = ({ isDark, links }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`pt-32 pb-12 transition-colors duration-700 overflow-hidden relative ${isDark ? 'bg-[#080808]' : 'bg-[#fcf8ed] border-t border-[#f0ecd8]'}`}>

      {/* Background Text Overlay */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black uppercase pointer-events-none select-none opacity-[0.02] ${isDark ? 'text-white' : 'text-black'}`}>
        Safayet
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <img src={logo} alt="Logo" className="w-12 h-12 mb-10" />
            <h2 className={`text-4xl font-black uppercase mb-8 leading-tight ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>Building Digital <br /><span className="text-primary italic">Excellence</span></h2>
            <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-lg max-w-sm mb-10`}>Specializing in creating high-performance, pixel-perfect web applications that drive business growth.</p>
            <div className="flex gap-6">
              <a href={links.facebook} className={`w-12 h-12 rounded-full border flex items-center justify-center hover:bg-primary hover:text-black transition-all ${isDark ? 'border-white/10 text-white' : 'border-black/5 text-black bg-white shadow-sm'}`}><Facebook size={18} /></a>
              <a href={links?.twitter}  className={`w-12 h-12 rounded-full border flex items-center justify-center hover:bg-primary hover:text-black transition-all ${isDark ? 'border-white/10 text-white' : 'border-black/5 text-black bg-white shadow-sm'}`}><Linkedin size={18} /></a>
              <a href={links.linkedin} className={`w-12 h-12 rounded-full border flex items-center justify-center hover:bg-primary hover:text-black transition-all ${isDark ? 'border-white/10 text-white' : 'border-black/5 text-black bg-white shadow-sm'}`}><Linkedin size={18} /></a>
              <a href={links.github} className={`w-12 h-12 rounded-full border flex items-center justify-center hover:bg-primary hover:text-black transition-all ${isDark ? 'border-white/10 text-white' : 'border-black/5 text-black bg-white shadow-sm'}`}><Github size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className={`text-xs uppercase font-bold tracking-[0.4em] mb-10 ${isDark ? 'text-primary' : 'text-[#3d3d3d]'}`}>Quick Links</h4>
            <ul className="space-y-6">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className={`text-lg font-bold hover:text-primary transition-all uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-xs uppercase font-bold tracking-[0.4em] mb-10 ${isDark ? 'text-primary' : 'text-[#3d3d3d]'}`}>Newsletter</h4>
            <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} mb-8`}>Get the latest updates in your inbox.</p>
            <div className={`flex items-center border-b pb-4 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
              <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent outline-none w-full text-xs font-bold tracking-widest uppercase placeholder:opacity-50" />
              <button className="text-primary hover:scale-110 transition-transform"><Send size={20} /></button>
            </div>
          </div>
        </div>

        <div className={`pt-12 border-t flex flex-col md:row-row justify-between items-center gap-8 ${isDark ? 'border-white/5' : 'border-black/5'}`}>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest opacity-50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group hover:scale-110 active:scale-95 transition-all shadow-2xl"
          >
            <ArrowUp size={24} className="text-black group-hover:-translate-y-1 transition-transform" />
          </button>

          <p className="text-[10px] uppercase font-bold tracking-widest opacity-50">
            &copy; {new Date().getFullYear()} SAFAYET. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
