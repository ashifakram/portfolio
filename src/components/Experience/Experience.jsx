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
              <span className="skill-pill-magnetic text-[#fde68a] font-['Geist_Mono'] text-xs bg-amber-500/15 px-4 py-1.5 rounded-full border border-amber-500/30 inline-flex items-center gap-2 cursor-default hover:border-amber-400/50 hover:bg-amber-500/25 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Jan 2025 – Present
              </span>
              <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold mt-4 text-white">
                Esquare(E2) Software India Pvt Ltd.
              </h3>
              <p className="text-gray-300 font-medium font-['Inter'] text-base mt-1">
                Junior Software Engineer
              </p>
            </div>

            {/* Center Blinking Radar Orb */}
            <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 top-4 flex items-center justify-center z-10">
              <span className="absolute w-6 h-6 rounded-full bg-amber-400 opacity-75 animate-ping pointer-events-none" />
              <div className="relative w-4 h-4 rounded-full bg-[#f59e0b] shadow-[0_0_15px_rgba(245,158,11,0.9)] border-4 border-[#09090b] transition-all duration-300 hover:scale-150 hover:shadow-[0_0_25px_#f59e0b] cursor-pointer" />
            </div>

            <div className="pt-6 md:pt-4">
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="flex items-center gap-3 mb-6 group cursor-default">
                  <span className="material-symbols-outlined text-[#f59e0b] text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    medical_services
                  </span>
                  <h4 className="text-xl font-bold text-white font-['Hanken_Grotesk']">
                    Dubai Healthcare Management Platform
                  </h4>
                </div>

                <ul className="space-y-4 text-gray-300 font-['Inter'] text-sm sm:text-base mb-8">
                  <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                    <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                      <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">
                        check
                      </span>
                    </div>
                    <span className="group-hover:text-white transition-colors">
                      Developed robust <strong className="text-white font-semibold">Spring Boot REST APIs</strong> for core application workflows and data management.
                    </span>
                  </li>
                  <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                    <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                      <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">
                        check
                      </span>
                    </div>
                    <span className="group-hover:text-white transition-colors">
                      Implemented application security using <strong className="text-white font-semibold">Spring Security & JWT</strong> with Role-Based Access Control (RBAC).
                    </span>
                  </li>
                  <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                    <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                      <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">
                        check
                      </span>
                    </div>
                    <span className="group-hover:text-white transition-colors">
                      Optimized data retrieval speed by implementing <strong className="text-white font-semibold">Redis caching</strong> strategies.
                    </span>
                  </li>
                  <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                    <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                      <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">
                        check
                      </span>
                    </div>
                    <span className="group-hover:text-white transition-colors">
                      Connected backend services with <strong className="text-white font-semibold">React</strong> frontend components to deliver interactive user dashboards.
                    </span>
                  </li>
                  <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                    <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                      <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">
                        check
                      </span>
                    </div>
                    <span className="group-hover:text-white transition-colors">
                      Documented API endpoints using <strong className="text-white font-semibold">Swagger / OpenAPI</strong> and established centralized exception handling.
                    </span>
                  </li>
                  <li className="group flex items-start gap-3.5 transition-colors cursor-default">
                    <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                      <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">
                        check
                      </span>
                    </div>
                    <span className="group-hover:text-white transition-colors">
                      Guaranteed backend reliability and code coverage by writing unit and integration tests with <strong className="text-white font-semibold">JUnit & Mockito</strong>.
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-6">
                  {['Java', 'Spring Boot', 'Spring Security', 'JWT', 'REST APIs', 'Redis', 'JUnit', 'Mockito', 'Swagger', 'React', 'MySQL', 'Git', 'Jira'].map((tech) => (
                    <span
                      key={tech}
                      className="skill-pill-magnetic px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-['Geist_Mono'] text-gray-300 hover:text-white cursor-default"
                    >
                      {tech}
                    </span>
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
