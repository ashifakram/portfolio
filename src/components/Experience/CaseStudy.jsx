import React from 'react';
import { motion } from 'framer-motion';

const archNodes = [
  { icon: 'web', title: 'React Frontend' },
  { icon: 'api', title: 'REST API Layer' },
  { icon: 'security', title: 'Spring Security + JWT' },
  { icon: 'memory', title: 'Redis Caching' },
  { icon: 'database', title: 'PostgreSQL DB' },
];

const CaseStudy = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 sm:p-12 rounded-[2rem] border border-[#6750a4]/30 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[120px] text-[#cfbcff]">
            medical_services
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
          <div>
            <span className="font-['Geist_Mono'] text-xs text-[#cfbcff] bg-[#6750a4]/20 px-4 py-1.5 rounded-full mb-4 inline-block border border-[#6750a4]/30">
              Case Study
            </span>
            <h3 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-2">
              Dubai Healthcare Management Platform
            </h3>
            <p className="font-['Inter'] text-base text-gray-300">
              Junior Software Engineer at ESQUARE SOFTWARE INDIA PVT LTD
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="font-['Inter'] text-base font-bold text-[#cfbcff]">Jan 2025 – Present</p>
            <p className="font-['Geist_Mono'] text-xs text-gray-400 uppercase mt-1">Karnataka, India</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* Left 2 Cols: Challenge & Responsibilities */}
          <div className="lg:col-span-2">
            <h4 className="font-['Hanken_Grotesk'] text-2xl font-semibold mb-6 text-white">
              The Challenge & Responsibilities
            </h4>
            <ul className="space-y-4 mb-8 text-gray-300 font-['Inter'] text-sm sm:text-base">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#6750a4] mt-1 text-xl">check_circle</span>
                <p>Engineered scalable backend systems using Spring Boot and PostgreSQL, ensuring high performance and data integrity.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#6750a4] mt-1 text-xl">check_circle</span>
                <p>Implemented Spring Security and JWT-based authentication for secure role-based access control (RBAC).</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#6750a4] mt-1 text-xl">check_circle</span>
                <p>Designed and optimized RESTful APIs for seamless frontend integration and efficient data retrieval.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#6750a4] mt-1 text-xl">check_circle</span>
                <p>Integrated Redis caching to reduce latency and improve system responsiveness by 40%.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#6750a4] mt-1 text-xl">check_circle</span>
                <p>Developed responsive user interfaces with React and Tailwind CSS for a premium dashboard experience.</p>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2.5">
              {['Spring Boot', 'React', 'JWT', 'Redis', 'PostgreSQL', 'Swagger'].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl font-['Geist_Mono'] text-xs text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Col: Architecture Flow Diagram */}
          <div className="bg-[#16171d]/90 p-6 sm:p-8 rounded-2xl border border-white/10">
            <h4 className="font-['Geist_Mono'] text-xs uppercase tracking-wider mb-6 text-[#cfbcff] font-bold">
              Architecture Flow
            </h4>
            <div className="flex flex-col gap-4">
              {archNodes.map((node, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#6750a4]/20 border border-[#6750a4]/30 flex items-center justify-center group-hover:bg-[#6750a4] transition-colors">
                    <span className="material-symbols-outlined text-[#cfbcff] group-hover:text-white text-xl">
                      {node.icon}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="font-['Geist_Mono'] text-xs text-gray-300 font-medium">
                    {node.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudy;
