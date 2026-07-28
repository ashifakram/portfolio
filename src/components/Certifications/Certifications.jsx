import React from 'react';
import { motion } from 'framer-motion';

const certsList = [
  {
    title: 'Java Full Stack Training',
    org: 'JSpiders Institute',
    badge: 'Verified Certification',
    icon: 'terminal',
    bg: 'bg-[#6750a4]/10',
    color: 'text-[#cfbcff]'
  },
  {
    title: 'Soft Skills',
    org: 'NPTEL (IIT Roorkee)',
    badge: 'Elite Certificate',
    icon: 'groups',
    bg: 'bg-[#765b00]/10',
    color: 'text-[#e7c365]'
  },
  {
    title: 'Ethics in Engineering',
    org: 'NPTEL (IIT Kharagpur)',
    badge: 'Professional Badge',
    icon: 'gavel',
    bg: 'bg-[#63597c]/10',
    color: 'text-[#cdc0e9]'
  },
  {
    title: 'Joy of Computing',
    org: 'NPTEL (Python Focus)',
    badge: 'Distinction',
    icon: 'hub',
    bg: 'bg-[#6750a4]/10',
    color: 'text-[#cfbcff]'
  }
];

const whyHireMe = [
  {
    title: 'Backend Engineering',
    icon: 'database',
    points: ['Advanced Spring Boot ecosystem', 'Distributed data management', 'Performance benchmarking']
  },
  {
    title: 'API Development',
    icon: 'api',
    points: ['RESTful & GraphQL architecture', 'Swagger/OpenAPI documentation', 'High-concurrency handling']
  },
  {
    title: 'Authentication',
    icon: 'lock',
    points: ['OAuth2 & JWT Security', 'Multi-factor implementation', 'Stateless auth protocols']
  },
  {
    title: 'Full Stack Dev',
    icon: 'layers',
    points: ['React.js & State management', 'Dynamic UI micro-interactions', 'End-to-end integration']
  }
];

const focusRoadmap = [
  { title: 'Spring Cloud', sub: 'Microservices', icon: 'cloud_done', border: 'border-l-[#6750a4]' },
  { title: 'Kafka', sub: 'Event Streaming', icon: 'developer_board', border: 'border-l-[#e7c365]' },
  { title: 'Docker', sub: 'Containerization', icon: 'dock', border: 'border-l-[#cdc0e9]' },
  { title: 'System Design', sub: 'Architectural Patterns', icon: 'architecture', border: 'border-l-[#cfbcff]' }
];

const Certifications = () => {
  return (
    <div id="certifications" className="py-12 max-w-[1200px] mx-auto px-6 space-y-20">
      
      {/* Professional Certifications Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-bold text-white">
            Professional Certifications
          </h2>
          <div className="h-[2px] flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certsList.map((cert) => (
            <div key={cert.title} className="glass-card p-6 rounded-2xl h-full flex flex-col justify-between border border-white/10">
              <div>
                <div className={`w-12 h-12 ${cert.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <span className={`material-symbols-outlined ${cert.color} text-2xl`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {cert.icon}
                  </span>
                </div>
                <h4 className="font-['Hanken_Grotesk'] text-lg font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-400 font-['Inter'] text-sm mb-6">{cert.org}</p>
              </div>
              <div className="flex items-center gap-2 text-[#cfbcff] font-['Geist_Mono'] text-xs">
                <span className="material-symbols-outlined text-sm">verified</span> {cert.badge}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why Hire Me & Specializations */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-1/3">
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white mb-6">
              Why Hire Me?
            </h2>
            <p className="text-base text-gray-300 font-['Inter'] leading-relaxed">
              Bridging the gap between robust backend architecture and seamless frontend user experiences with a focus on scalability and clean code.
            </p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyHireMe.map((item) => (
              <div key={item.title} className="glass-card p-8 rounded-3xl group border border-white/10">
                <div className="w-14 h-14 bg-[#6750a4]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#6750a4] transition-colors">
                  <span className="material-symbols-outlined text-[#cfbcff] group-hover:text-white text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-white mb-3">{item.title}</h3>
                <ul className="space-y-2 text-gray-300 font-['Inter'] text-sm">
                  {item.points.map((pt, i) => (
                    <li key={i}>• {pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Current Focus Roadmap */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="glass-card p-8 sm:p-14 rounded-[40px] overflow-hidden relative border border-white/10">
          <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block pointer-events-none">
            <span className="material-symbols-outlined text-[200px] text-[#cfbcff]">auto_awesome</span>
          </div>
          <div className="relative z-10">
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-4">
              Current Focus & Roadmap
            </h2>
            <p className="text-base text-gray-300 font-['Inter'] mb-10 max-w-2xl leading-relaxed">
              Always evolving. Currently deepening my expertise in enterprise-grade distributed systems and modern dev-ops cycles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {focusRoadmap.map((f) => (
                <div key={f.title} className={`glass-card px-6 py-4 rounded-2xl border-l-4 ${f.border} flex items-center gap-4 border border-white/10`}>
                  <span className="material-symbols-outlined text-[#cfbcff] text-2xl">{f.icon}</span>
                  <div>
                    <h4 className="font-['Hanken_Grotesk'] font-bold text-white text-base">{f.title}</h4>
                    <p className="text-[10px] text-gray-400 font-['Geist_Mono'] uppercase tracking-wider">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Certifications;
