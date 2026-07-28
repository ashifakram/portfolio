import React from 'react';
import { motion } from 'framer-motion';
import {
  SiSpringboot,
  SiApachekafka,
  SiDocker,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import {
  TbInfinity,
  TbNetwork,
  TbHierarchy2,
  TbActivity,
  TbRuler2,
  TbBinaryTree,
} from 'react-icons/tb';

const coreStrengths = [
  { title: 'Java Development', icon: 'terminal', span: 'col-span-1' },
  { title: 'Backend Engineering', icon: 'settings_ethernet', span: 'lg:col-span-2' },
  { title: 'REST API Design', icon: 'api', span: 'lg:col-span-2' },
  { title: 'Authentication & Authorization', icon: 'enhanced_encryption', span: 'lg:col-span-2' },
  { title: 'Spring Boot', icon: 'bolt', span: 'col-span-1' },
  { title: 'Problem Solving', icon: 'psychology', span: 'lg:col-span-2' },
  { title: 'Database Design', icon: 'database', span: 'col-span-1' },
  { title: 'React', icon: 'layers', span: 'lg:col-span-2' },
  { title: 'Optimization', icon: 'speed', span: 'col-span-1' },
  { title: 'Clean Code', icon: 'code_blocks', span: 'col-span-1' },
];

const exploringChips = [
  { name: 'Spring Cloud', icon: <SiSpringboot className="text-[#6DB33F] text-base" /> },
  { name: 'Microservices', icon: <TbNetwork className="text-[#cfbcff] text-base" /> },
  { name: 'Kafka', icon: <SiApachekafka className="text-[#e9ddff] text-base" /> },
  { name: 'Docker', icon: <SiDocker className="text-[#2496ED] text-base" /> },
  { name: 'AWS', icon: <FaAws className="text-[#FF9900] text-base" /> },
  { name: 'CI/CD', icon: <TbInfinity className="text-[#cfbcff] text-base" /> },
  { name: 'System Design', icon: <TbBinaryTree className="text-[#e7c365] text-base" /> },
  { name: 'Distributed Systems', icon: <TbHierarchy2 className="text-[#cfbcff] text-base" /> },
  { name: 'Observability', icon: <TbActivity className="text-[#e7c365] text-base" /> },
  { name: 'Scalable Architecture', icon: <TbRuler2 className="text-[#cfbcff] text-base" /> },
];

const Philosophy = () => {
  return (
    <div id="philosophy" className="py-12 max-w-[1200px] mx-auto px-6 space-y-20">
      
      {/* Engineering Philosophy Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="animated-border-box p-[3px] rounded-3xl">
          <div className="bg-[#09090b] rounded-[calc(1.5rem-3px)] p-8 sm:p-16 md:p-20 text-center relative overflow-hidden">
            <span
              className="material-symbols-outlined text-[#6750a4] text-5xl sm:text-6xl mb-6 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold mb-8 leading-tight max-w-4xl mx-auto text-white">
              "I enjoy building <span className="google-text-motion">secure, maintainable, and reliable</span> software with a strong focus on backend engineering."
            </h2>
            <p className="font-['Inter'] text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My primary area of interest is Java backend engineering using Spring Boot, RESTful APIs, and relational databases, paired with building responsive React interfaces. I value clean architecture, effective authentication workflows, and data caching. I am also actively studying microservices architecture concepts to continue growing as a backend developer.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Core Strengths Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-bold text-[#e9ddff] mb-2">
              Core Strengths
            </h2>
            <p className="font-['Inter'] text-base text-gray-400">
              Forging robust digital backbones with precision.
            </p>
          </div>
          <div className="h-[1px] flex-grow mx-8 bg-white/10 hidden md:block mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {coreStrengths.map((item, i) => (
            <div
              key={i}
              className={`glass-card p-6 rounded-2xl flex flex-col gap-4 border border-white/10 ${item.span}`}
            >
              <span
                className="material-symbols-outlined text-[#cfbcff] text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              <h3 className="font-['Hanken_Grotesk'] text-base font-bold text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Currently Exploring Roadmap Chips with Real Tech Icons */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#6750a4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-['Hanken_Grotesk'] text-3xl font-bold text-white mb-8">
              Currently Exploring
            </h2>
            <div className="flex flex-wrap gap-3.5">
              {exploringChips.map((chip) => (
                <span
                  key={chip.name}
                  className="px-5 py-2.5 rounded-full bg-[#16171d] border border-white/10 font-['Geist_Mono'] text-xs text-gray-300 flex items-center gap-2.5 hover:bg-[#6750a4]/40 hover:border-[#cfbcff]/50 hover:text-white hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                >
                  <span className="flex items-center justify-center">{chip.icon}</span>
                  {chip.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Philosophy;
