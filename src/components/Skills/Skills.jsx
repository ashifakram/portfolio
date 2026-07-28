import React from 'react';
import { motion } from 'framer-motion';
import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiPostman,
  SiDocker,
  SiGit,
  SiSwagger,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiReact,
  SiNodedotjs,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbLayersIntersect, TbApi, TbCertificate, TbLayoutGrid } from 'react-icons/tb';

const backendStack = [
  { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F] text-base" /> },
  { name: 'Spring Security', icon: <SiSpringsecurity className="text-[#6DB33F] text-base" /> },
  { name: 'Microservices', icon: <TbLayoutGrid className="text-[#cfbcff] text-base" /> },
  { name: 'Hibernate/JPA', icon: <SiHibernate className="text-[#59666C] dark:text-[#b0bec5] text-base" /> },
  { name: 'REST APIs', icon: <TbApi className="text-[#e7c365] text-base" /> },
  { name: 'JWT Auth', icon: <TbCertificate className="text-[#e7c365] text-base" /> },
];

const languages = [
  { name: 'Java', level: 95, icon: <FaJava className="text-[#ED8B00] text-lg" /> },
  { name: 'JavaScript', level: 85, icon: <SiJavascript className="text-[#F7DF1E] text-lg" /> },
  { name: 'React', level: 80, icon: <SiReact className="text-[#61DAFB] text-lg" /> },
  { name: 'Node.js', level: 75, icon: <SiNodedotjs className="text-[#339933] text-lg" /> },
];

const databases = [
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1] text-base" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1] text-base" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] text-base" /> },
  { name: 'Redis', icon: <SiRedis className="text-[#DC382D] text-base" /> },
];

const concepts = [
  { icon: <TbLayersIntersect className="text-[#cfbcff] text-lg" />, name: 'OOP & DSA' },
  { icon: <TbApi className="text-[#e7c365] text-lg" />, name: 'API Design' },
  { icon: <SiDocker className="text-[#2496ED] text-lg" />, name: 'Docker Containerization' },
  { icon: <SiGit className="text-[#F05032] text-lg" />, name: 'Git & Version Control' },
  { icon: <SiPostman className="text-[#FF6C37] text-lg" />, name: 'Postman API Testing' },
  { icon: <SiSwagger className="text-[#85EA2D] text-lg" />, name: 'Swagger Documentation' },
];

const processSteps = [
  { step: 1, name: 'Analysis' },
  { step: 2, name: 'Design' },
  { step: 3, name: 'DB Schema' },
  { step: 4, name: 'Backend' },
  { step: 5, name: 'Frontend' },
  { step: 6, name: 'Testing' },
  { step: 7, name: 'Deployment', active: true },
];

const Skills = () => {
  return (
    <div id="skills" className="space-y-16 py-12 max-w-[1200px] mx-auto px-6">
      
      {/* Quick Stats Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="glass-card p-6 sm:p-8 rounded-3xl text-center border border-white/10">
          <div className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl font-bold text-[#e9ddff] mb-1">1.5+</div>
          <div className="font-['Geist_Mono'] text-xs uppercase text-gray-400">Years Exp.</div>
        </div>
        <div className="glass-card p-6 sm:p-8 rounded-3xl text-center border border-white/10">
          <div className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl font-bold text-[#e9ddff] mb-1">1</div>
          <div className="font-['Geist_Mono'] text-xs uppercase text-gray-400">Current Co.</div>
        </div>
        <div className="glass-card p-6 sm:p-8 rounded-3xl text-center border border-white/10">
          <div className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl font-bold text-[#e7c365] mb-1">50+</div>
          <div className="font-['Geist_Mono'] text-xs uppercase text-gray-400">APIs Built</div>
        </div>
        <div className="glass-card p-6 sm:p-8 rounded-3xl text-center border border-white/10">
          <div className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl font-bold text-[#e9ddff] mb-1">9.23</div>
          <div className="font-['Geist_Mono'] text-xs uppercase text-gray-400">CGPA (CSE)</div>
        </div>
      </motion.section>

      {/* Tech Stack Bento Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-bold mb-10 flex items-center gap-3 text-white">
          <span className="material-symbols-outlined text-[#cfbcff] text-3xl">terminal</span>
          <span className="google-text-motion">Technical Proficiency</span>
        </h2>

        <div className="grid grid-cols-12 gap-6">
          
          {/* Backend Stack Card */}
          <div className="col-span-12 md:col-span-8 glass-card p-8 rounded-3xl border border-white/10">
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-semibold mb-6 text-white">Backend Excellence</h3>
            <div className="flex flex-wrap gap-3">
              {backendStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-4 py-2.5 bg-[#6750a4]/20 border border-[#6750a4]/30 rounded-full font-['Geist_Mono'] text-xs text-[#e0d2ff] font-medium flex items-center gap-2.5 hover:bg-[#6750a4]/40 transition-colors"
                >
                  <span className="flex items-center justify-center">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className="col-span-12 md:col-span-4 glass-card p-8 rounded-3xl border border-white/10">
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-semibold mb-6 text-white">Core Stack</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <span
                  key={lang.name}
                  className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-full font-['Geist_Mono'] text-xs text-gray-200 font-medium flex items-center gap-2.5 hover:bg-white/10 transition-colors"
                >
                  <span className="flex items-center justify-center">{lang.icon}</span>
                  {lang.name}
                </span>
              ))}
            </div>
          </div>

          {/* Databases Card */}
          <div className="col-span-12 md:col-span-4 glass-card p-8 rounded-3xl border border-white/10">
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-semibold mb-6 text-white">Data Management</h3>
            <div className="flex flex-wrap gap-3">
              {databases.map((db) => (
                <span
                  key={db.name}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl font-['Geist_Mono'] text-xs text-gray-300 flex items-center gap-2.5 hover:bg-white/10 transition-colors"
                >
                  <span className="flex items-center justify-center">{db.icon}</span>
                  {db.name}
                </span>
              ))}
            </div>
          </div>

          {/* Concepts & Tools */}
          <div className="col-span-12 md:col-span-8 glass-card p-8 rounded-3xl border border-white/10">
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-semibold mb-6 text-white">DevOps & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {concepts.map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-['Inter'] text-xs font-medium text-gray-200">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.section>

      {/* Engineering Workflow */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10"
      >
        <h2 className="font-['Hanken_Grotesk'] text-3xl font-bold mb-8 text-white">Engineering Workflow</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className={`p-4 rounded-2xl border text-center transition-all ${
                step.active
                  ? 'bg-[#6750a4] border-[#cfbcff] text-white shadow-lg shadow-[#6750a4]/30'
                  : 'bg-white/5 border-white/10 text-gray-300'
              }`}
            >
              <div className="font-['Geist_Mono'] text-xs text-gray-400 mb-1">0{step.step}</div>
              <div className="font-['Hanken_Grotesk'] font-bold text-sm">{step.name}</div>
            </div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default Skills;
