import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Parallax } from "swiper/modules";
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import "swiper/css";
import "swiper/css/effect-coverflow";

import p1 from "../assets/payo.png";
import p2 from "../assets/freshHeat.png";
import p3 from "../assets/bricknet_thumnail.png";
import p4 from "../assets/app.png";
import p5 from "../assets/english-janala.png";
import p6 from "../assets/sundarban.png";
import p7 from "../assets/Keenkepper.png";
import p8 from "../assets/github.png";

const Projects = ({isDark}) => {
   const projects = [
    { title: 'Payo Mobile Bank', category: 'Mobile App', img: p1 ,link:'https://payoo-mobile-bank-app.vercel.app/'},
    { title: 'Fresh Heat Restaurent', category: 'Restaurent Webpage', img: p2,link:"https://fresh-heat-restaurent.vercel.app/" },
    { title: 'Emmar Estae Liited', category: 'Construction Company', img: p3 ,link: "https://emmer-estate-limited.vercel.app/"},
    { title: 'Turbo App', category: 'Web App ', img: p4,link:"https://app-store-react-router.vercel.app/" },
    { title: 'English Janala', category: 'Dictonary', img: p5,link:"https://english-janala-five.vercel.app/" },
    { title: 'Sundarban Travel Agency', category: 'Entertainment', img: p6,link:"https://sundarban-travels-tour.vercel.app/" },
  { title: 'Keenkepper', category: 'Social Media', img: p7,link:"https://kin-keeper-a7.vercel.app/" },
  { title: 'Github Issue Tracker', category: 'Tracking', img: p8,link:"https://github-issue-tracker-nine.vercel.app/" },

  ];

  return (
    <section id="projects" className={`${isDark?'bg-[#0a0a0a]' : 'bg-[#fcf8ed]'} py-20 overflow-hidden`}>
       <div className="container mx-auto flex flex-col md:flex-row md:items-end justify-between mb-20">
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
      
      <Swiper
        modules={[EffectCoverflow, Parallax]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1.2}
        loop={true}
        grabCursor={true}
        parallax={true}
        spaceBetween={40}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 1.8,
          slideShadows: false,
        }}
        className="w-full"
      >
        {projects.map((p, i) => (
          <SwiperSlide key={i}>
            
            <div className="relative h-[200px] lg:h-[90vh]  rounded-2xl overflow-hidden group transition-all duration-700">

              {/* IMAGE */}
              <img
                src={p.img}
                className="w-full h-full  object-contain lg:object-cover"
                data-swiper-parallax="-150"
              />

              {/* SIDE FADE */}
              <div className="absolute inset-0 bg-black/30" />

              {/* TEXT OVERLAY (BIG STYLE) */}
               {/* Content Overlay */}
               {/* TEXT OVERLAY */}
<div className="absolute inset-x-8 bottom-8 z-10 group">
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    className={ `p-2 lg:p-8 rounded-2xl border backdrop-blur-md transition-all duration-500
    transform translate-y-4 group-hover:translate-y-0
    ${isDark 
      ? 'bg-black/60 border-white/10 group-hover:bg-primary group-hover:border-primary' 
      : 'bg-white/90 border-black/5 group-hover:bg-primary group-hover:border-primary'
    }`}
  >
    <div className="flex justify-between items-start mb-4">
      
      {/* TEX */}
      <div>
        <h4 className={`text-[10px] font-bold uppercase tracking-widest transition-colors
        ${isDark ? 'text-gray-400 group-hover:text-black' : 'text-gray-500 group-hover:text-black'}`}>
          {p.category}
        </h4>

        <h3 className={`lg:text-2xl font-black uppercase tracking-tight transition-colors
        ${isDark ? 'text-white group-hover:text-black' : 'text-gray-900 group-hover:text-black'}`}>
          {p.title}
        </h3>
      </div>

      {/* LINK BUTTON */}
      <a href={p.link} target="_blank" rel="noreferrer">
        <div className="bg-primary/20 p-3 rounded-full group-hover:bg-white transition-colors">
          <ExternalLink size={20} className="text-primary group-hover:text-black" />
        </div>
      </a>
    </div>

    {/* HOVER ACTIONS */}
    <div className="flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
      <button className="flex items-center gap-2 text-xs font-black uppercase text-black hover:scale-110 transition-transform">
        <Github size={16} /> Source Code
      </button>
    </div>
  </motion.div>
</div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Projects;