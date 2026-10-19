import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

import p1 from "../assets/payo.png";
import p2 from "../assets/freshHeat.png";
import p3 from "../assets/bricknet_thumnail.png";
import p4 from "../assets/app.png";
import p5 from "../assets/english-janala.png";
import p6 from "../assets/sundarban.png";
import p7 from "../assets/qurabni-hat-mockup.png";
import p8 from "../assets/img/webimg/Cookly_1x_shots_so.png";
import p9 from '../assets/img/webimg/petbond_1x_shots_so.png';
import p10 from '../assets/img/webimg/Tournest_1x_shots_so.png';
import p11 from '../assets/yjeek589_1x_shots_so.png';
import p12 from '../assets/Bajatzu.jpeg';

const Projects = ({ isDark }) => {
  const projects = [
    {
      title: 'YJEEK',
      category: 'Multi-Service On-Demand Platform',
      img: p11,
      link: "https://portal.yjeektech.com/",
      github: "",
      tags: ["Node.js", "PostgreSQL", "Prisma", "AWS EC2", "Firebase", "RBAC"],
      featured: true,
    },
    {
      title: 'Batjazu',
      category: 'Restaurant Management System',
      img: p12,
      link: "https://bajatzu.be/",
      github: "",
      tags: ["Node.js", "PostgreSQL", "Prisma", "AWS EC2", "Firebase", "RBAC"],
      featured: true,
    },
    {
      title: 'Cookly',
      category: 'Full Stack Recipe Sharing Platform',
      img: p8,
      link: "https://cookly-client.vercel.app/",
      github: "https://github.com/Safa-yet",
      tags: ["Next.js", "Express.js", "MongoDB", "Stripe", "Better Auth"],
    },
    {
      title: 'Pet Bond',
      category: 'Full Stack Pet Adoption Platform',
      img: p9,
      link: "https://pet-bond-indol.vercel.app/",
      github: "",
      tags: ["Next.js", "Express.js", "Node.js", "JWT", "Tailwind"],
    },
    {
      title: 'Tour-Nest',
      category: 'MERN Stack Travel & Tour Website',
      img: p10,
      link: "https://tour-nest-nu.vercel.app/",
      github: "",
      tags: ["Next.js", "Express.js", "Node.js", "JWT", "Tailwind"],
    },
    {
      title: 'Qurbanir Haat',
      category: 'Online Cow Marketplace',
      img: p7,
      link: "https://qurbanir-hat.vercel.app/",
      github: "",
      tags: ["Next.js", "Tailwind"],
    },
    {
      title: 'Fresh Heat Restaurant',
      category: 'Restaurant Webpage',
      img: p2,
      link: "https://fresh-heat-restaurent.vercel.app/",
      github: "",
      tags: ["Next.js", "Tailwind"],
    },
    {
      title: 'Emmar Estate Limited',
      category: 'Construction Company Website',
      img: p3,
      link: "https://emmer-estate-limited.vercel.app/",
      github: "",
      tags: ["Modern UI", "Vercel"],
    },
    {
      title: 'Turbo App',
      category: 'React Web Application',
      img: p4,
      link: "https://app-store-react-router.vercel.app/",
      github: "",
      tags: ["React", "Router"],
    },
    {
      title: 'English Janala',
      category: 'Dictionary App',
      img: p5,
      link: "https://english-janala-five.vercel.app/",
      github: "",
      tags: ["Logic", "API"],
    },
    {
      title: 'Payo Mobile Bank',
      category: 'Mobile Banking UI',
      img: p1,
      link: 'https://payoo-mobile-bank-app.vercel.app/',
      github: "",
      tags: ["React", "Fintech"],
    },
  ];

  // --- Pagination Logic ---
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: document.getElementById('projects').offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <section id="projects" className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-24 px-6 relative`}>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest"
            >
              <Sparkles size={14} /> My Creative Works
            </motion.div>
            <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter">
              FEATURED <br /> <span className="italic font-light opacity-50 font-serif">Selection</span>
            </h2>
          </div>
          <div className={`hidden md:block h-[1px] flex-grow mx-20 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
          <p className={`max-w-[280px] text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Developing high-performance digital products that bridge the gap between design and technology.
          </p>
        </div>
      </div>

      {/* Grid with Pagination Animation */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[900px]">
        <AnimatePresence mode="wait">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative aspect-[4/3] rounded-[2.5rem] overflow-hidden ${isDark ? 'bg-[#111]' : 'bg-[#f5f5f5]'}`}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Badges */}
                <div className="absolute top-6 left-6 flex gap-2 flex-wrap">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="px-4 py-2 bg-primary/90 backdrop-blur-xl rounded-full">
                      <span className="text-[10px] font-black uppercase tracking-widest text-black">
                        Commercial
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 bg-primary text-black rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-2xl"
                  >
                    <ArrowUpRight size={32} />
                  </a>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-start px-2">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-3 uppercase italic font-serif">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`text-[10px] px-3 py-1 border rounded-full ${isDark ? 'border-white/10 text-gray-400' : 'border-black/5 text-gray-500'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full border transition-all ${isDark ? 'border-white/10 hover:bg-white hover:text-black' : 'border-black/10 hover:bg-black hover:text-white'}`}>
                      <Github size={18} />
                    </a>
                  )}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full border transition-all ${isDark ? 'border-white/10 hover:bg-white hover:text-black' : 'border-black/10 hover:bg-black hover:text-white'}`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="max-w-7xl mx-auto mt-24 flex justify-center items-center gap-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-4 rounded-full border transition-all flex items-center justify-center disabled:opacity-20 ${isDark ? 'border-white/10 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'}`}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`w-12 h-12 rounded-full font-mono text-sm transition-all border flex items-center justify-center ${currentPage === i + 1
                ? 'bg-primary border-primary text-black font-bold scale-110'
                : (isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-black/10 text-black hover:bg-black/5')
                }`}
            >
              0{i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-4 rounded-full border transition-all flex items-center justify-center disabled:opacity-20 ${isDark ? 'border-white/10 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Background Decorative */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className={`w-[600px] h-[600px] blur-[150px] rounded-full mx-auto ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`} />
      </div>

    </section>
  );
};

export default Projects;