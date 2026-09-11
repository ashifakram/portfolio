import React from 'react';
import { motion } from 'framer-motion';

const archNodes = [
  { icon: 'web', title: 'React Frontend' },
  { icon: 'api', title: 'REST API Layer' },
  { icon: 'security', title: 'Spring Security + JWT' },
  { icon: 'memory', title: 'Redis Caching' },
  { icon: 'database', title: 'MySQL DB' },
];

const CaseStudy = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 sm:p-12 rounded-[2rem] border border-amber-500/30 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[120px] text-[#fde68a]">
            medical_services
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
          <div>
            <span className="font-['Geist_Mono'] text-xs text-[#fde68a] bg-amber-500/15 px-4 py-1.5 rounded-full mb-4 inline-block border border-amber-500/30 font-medium">
              Case Study
            </span>
            <h3 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-2">
              Dubai Healthcare Management Platform
            </h3>
            <p className="font-['Inter'] text-base text-gray-300">
              Junior Software Engineer at Esquare Software India Pvt Ltd.
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="font-['Inter'] text-base font-bold text-[#fde68a]">Jan 2025 – Present</p>
            <p className="font-['Geist_Mono'] text-xs text-gray-400 uppercase mt-1">Bengaluru, India</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Left 2 Cols: Challenge & Responsibilities */}
          <div className="lg:col-span-2">
            <h4 className="font-['Hanken_Grotesk'] text-2xl font-semibold mb-6 text-white">
              Core Responsibilities & Architecture
            </h4>
            <ul className="space-y-4 mb-8 text-gray-300 font-['Inter'] text-sm sm:text-base">
              <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">check</span>
                </div>
                <p className="group-hover:text-white transition-colors">Developed REST APIs across 6 core platform modules: Auth & Role Management, Appointments, Patient Records, Documents, Doctor Management, and Notifications.</p>
              </li>
              <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">check</span>
                </div>
                <p className="group-hover:text-white transition-colors">Architected REST endpoints with centralized exception handling and Spring Security with JWT auth for doctors, patients, and admins.</p>
              </li>
              <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">check</span>
                </div>
                <p className="group-hover:text-white transition-colors">Implemented Redis caching layer to optimize access for frequently retrieved healthcare records and improve API response times.</p>
              </li>
              <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">check</span>
                </div>
                <p className="group-hover:text-white transition-colors">Built React onboarding pages with dynamic, admin-driven conditional field rendering and responsive layout consistency.</p>
              </li>
              <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">check</span>
                </div>
                <p className="group-hover:text-white transition-colors">Wrote comprehensive unit and integration test suites using JUnit and Mockito to guarantee code quality and stability.</p>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2.5">
              {['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Redis', 'MySQL', 'React', 'JUnit', 'Mockito', 'Swagger'].map((tag) => (
                <span
                  key={tag}
                  className="skill-pill-magnetic px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl font-['Geist_Mono'] text-xs text-gray-300 hover:text-white cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>


          {/* Right Col: Architecture Flow Diagram */}
          <div className="bg-[#16171d]/90 p-6 sm:p-8 rounded-2xl border border-white/10">
            <h4 className="font-['Geist_Mono'] text-xs uppercase tracking-wider mb-6 text-[#fde68a] font-bold">
              Architecture Flow
            </h4>
            <div className="flex flex-col gap-4">
              {archNodes.map((node, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xl">
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
