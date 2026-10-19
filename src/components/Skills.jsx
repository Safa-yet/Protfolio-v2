import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFigma,
  SiWordpress,
  SiNodedotjs,
  SiReactrouter,
  SiNextdotjs,
  SiVercel,
  SiCss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiStripe,
  SiFirebase,
  SiPostman,
  SiNginx,
  SiExpress,
} from "react-icons/si";
import { FaServer, FaTools, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ isDark }) => {
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
    { name: "Express.js", icon: SiExpress, color: "#cccccc" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Prisma", icon: SiPrisma, color: "#5a67d8" },
    { name: "REST APIs", icon: FaServer, color: "#4ade80" },
    { name: "JWT Auth", icon: FaTools, color: "#f59e0b" },
    { name: "Stripe", icon: SiStripe, color: "#635BFF" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "AWS EC2", icon: FaAws, color: "#FF9900" },
    { name: "Nginx", icon: SiNginx, color: "#009639" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "VS Code", icon: VscVscode, color: "#0078d7" },
    { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
    { name: "RBAC", icon: FaTools, color: "#22c55e" },
    { name: "UI/UX", icon: SiFigma, color: "#ff6b6b" },
    { name: "Performance", icon: FaTools, color: "#22c55e" },
  ];

  const row1 = skills.slice(0, 9);
  const row2 = skills.slice(9, 18);
  const row3 = skills.slice(18);

  const renderRow = (data, direction) => (
    <div className="marquee-row">
      <div className={`marquee ${direction}`}>
        {[...data, ...data].map((skill, i) => {
          const Icon = skill.icon;

          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-3 px-6 rounded-2xl "
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg mb-3"
                style={{ background: `${skill.color}15` }}
              >
                <Icon size={24} style={{ color: skill.color }} />
              </div>

              <p
                className={`text-xs font-medium ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      className={`py-32 ${
        isDark ? "bg-[#0b0b0c]" : "bg-[#fafafa]"
      } overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-6">

      <div className=" text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.5em] text-xs mb-4">Capabilities</span>
          <h1 className={`text-6xl md:text-8xl font-black text-center uppercase leading-none ${isDark ? 'text-white' : 'text-[#3d3d3d]'}`}>
            My <span className="text-gray-400 italic">Skills</span>
          </h1>
        </div>

        {/* 3 MARQUEE ROWS */}
        {renderRow(row1, "scroll-right")}
        {renderRow(row2, "scroll-left")}
        {renderRow(row3, "scroll-right")}

        <div className="flex justify-center mt-24"> <a href="#contact" className="px-12 py-3 rounded-full font-medium bg-black text-white hover:opacity-80 transition" > Let’s Work Together </a> </div>

      </div>
    </section>
  );
};

export default Skills;