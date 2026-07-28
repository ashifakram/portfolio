import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-16 max-w-[1200px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl font-bold google-text-motion">
              Career Journey
            </h2>
            <p className="text-gray-400 font-['Inter'] text-base mt-2">
              My professional roadmap and key contributions.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-8 bg-white/10 mb-6" />
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line opacity-30 hidden md:block" />

          {/* Timeline Item 1: ESQUARE SOFTWARE */}
          <div className="relative mb-20 md:grid md:grid-cols-2 md:gap-20">
            <div className="md:text-right md:pt-4">
              <span className="text-[#ffdf93] font-['Geist_Mono'] text-xs bg-[#765b00]/20 px-4 py-1.5 rounded-full border border-[#765b00]/30 inline-block">
                Jan 2025 – Present
              </span>
              <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold mt-4 text-[#e9ddff]">
                Esquare(E2) Software India Pvt Ltd.
              </h3>
              <p className="text-gray-300 font-medium font-['Inter'] text-base mt-1">
                Junior Software Engineer
              </p>
            </div>

            {/* Center Orb */}
            <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 top-4 w-4 h-4 rounded-full bg-[#6750a4] shadow-[0_0_15px_rgba(103,80,164,0.6)] z-10 border-4 border-[#09090b]" />

            <div className="pt-6 md:pt-4">
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#e7c365] text-2xl">
                    medical_services
                  </span>
                  <h4 className="text-xl font-bold text-white font-['Hanken_Grotesk']">
                    Dubai Healthcare Management Platform
                  </h4>
                </div>

                <ul className="space-y-4 text-gray-300 font-['Inter'] text-sm sm:text-base mb-8">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-[#6750a4] text-base mt-1" aria-hidden="true">
                      check_circle
                    </span>
                    <span>
                      Developed robust <strong className="text-white font-semibold">Spring Boot REST APIs</strong> for core application workflows and data management.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-[#6750a4] text-base mt-1" aria-hidden="true">
                      check_circle
                    </span>
                    <span>
                      Implemented application security using <strong className="text-white font-semibold">Spring Security & JWT</strong> with Role-Based Access Control (RBAC).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-[#6750a4] text-base mt-1" aria-hidden="true">
                      check_circle
                    </span>
                    <span>
                      Optimized data retrieval speed by implementing <strong className="text-white font-semibold">Redis caching</strong> strategies.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-[#6750a4] text-base mt-1" aria-hidden="true">
                      check_circle
                    </span>
                    <span>
                      Connected backend services with <strong className="text-white font-semibold">React</strong> frontend components to deliver interactive user dashboards.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-[#6750a4] text-base mt-1" aria-hidden="true">
                      check_circle
                    </span>
                    <span>
                      Documented API endpoints using <strong className="text-white font-semibold">Swagger / OpenAPI</strong> and established centralized exception handling.
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-6">
                  {['Java', 'Spring Boot', 'Spring Security', 'JWT', 'REST APIs', 'Redis', 'Swagger', 'React', 'MySQL', 'Git', 'Jira'].map((tech) => (
                    <div key={tech} className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#09090b]/60 border border-white/10 text-xs font-['Geist_Mono'] text-[#cfbcff]">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2: Growth Phase */}
          <div className="relative opacity-50 hover:opacity-100 transition-opacity duration-500 md:grid md:grid-cols-2 md:gap-20">
            <div className="md:text-right md:pt-4 md:order-2">
              <span className="font-['Geist_Mono'] text-xs text-gray-400">
                Past Experience & Learning
              </span>
              <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold mt-2 text-white">
                Growth Phase
              </h3>
            </div>

            <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 top-4 w-4 h-4 rounded-full bg-gray-600 z-10 border-4 border-[#09090b]" />

            <div className="pt-6 md:pt-4 md:order-1">
              <div className="glass-card p-6 rounded-2xl border-dashed border-white/20">
                <p className="italic text-sm text-gray-400">
                  Prior foundational projects in Full Stack Java development, focusing on Spring Framework core concepts and database normalization.
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
