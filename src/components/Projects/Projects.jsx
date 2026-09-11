import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { flagshipProject, enterpriseProjects } from '../../data/projects';
import SpotlightCard from '../Common/SpotlightCard';




const sahayakFlow = [
  { icon: 'person', title: 'Teacher', sub: 'End User' },
  { icon: 'laptop_mac', title: 'React SPA', sub: 'Frontend Layer' },
  { icon: 'settings_ethernet', title: 'Node & Express', sub: 'RESTful API', active: true },
  { icon: 'local_fire_department', title: 'Firebase', sub: 'OAuth 2.0 & Firestore' },
  { icon: 'neurology', title: 'Gemini API', sub: 'GCP AI Engine' }
];

const Projects = () => {
  return (
    <div id="projects" className="py-12 max-w-[1200px] mx-auto px-6 space-y-20">

      {/* Hero Section / Sahayak Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12">
          <span className="font-['Geist_Mono'] text-xs uppercase tracking-widest text-[#fde68a] mb-4 block font-medium">
            {flagshipProject.tag}
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl font-extrabold google-text-motion mb-6">
            {flagshipProject.title}
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            {flagshipProject.subtitle}
          </p>
        </div>

        {/* Project Hero Card */}
        <div className="glass-card rounded-[2rem] p-6 md:p-10 mb-16 border border-white/10 relative group overflow-hidden">
          <div className="aspect-video w-full rounded-2xl overflow-hidden mb-10 shadow-2xl relative">
            <img
              src={flagshipProject.image}
              alt="Sahayak AI Platform"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
              width="800"
              height="450"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-white mb-4">Overview</h3>
              <p className="font-['Inter'] text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
                {flagshipProject.overview}
              </p>
              <div className="flex flex-wrap gap-2">
                {flagshipProject.tech.map((t) => (
                  <span
                    key={t}
                    className="skill-pill-magnetic font-['Geist_Mono'] text-xs px-3.5 py-1.5 bg-amber-500/15 text-[#fde68a] border border-amber-500/30 rounded-full font-medium cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="group/problem flex gap-4 cursor-default transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center group-hover/problem:bg-rose-500 group-hover/problem:border-rose-400 group-hover/problem:shadow-[0_0_15px_rgba(244,63,94,0.5)] transition-all duration-300">
                  <span className="material-symbols-outlined text-rose-400 group-hover/problem:text-black text-2xl transition-colors duration-300">warning</span>
                </div>
                <div>
                  <h4 className="font-['Hanken_Grotesk'] font-bold text-lg text-white group-hover/problem:text-rose-200 transition-colors mb-1">Problem Statement</h4>
                  <p className="font-['Inter'] text-xs sm:text-sm text-gray-300 group-hover/problem:text-gray-200 transition-colors leading-relaxed">
                    {flagshipProject.problem}
                  </p>
                </div>
              </div>

              <div className="group/solution flex gap-4 cursor-default transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center group-hover/solution:bg-amber-500 group-hover/solution:border-amber-400 group-hover/solution:shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#f59e0b] group-hover/solution:text-black text-2xl transition-colors duration-300">verified</span>
                </div>
                <div>
                  <h4 className="font-['Hanken_Grotesk'] font-bold text-lg text-white group-hover/solution:text-amber-200 transition-colors mb-1">Our Solution</h4>
                  <p className="font-['Inter'] text-xs sm:text-sm text-gray-300 group-hover/solution:text-gray-200 transition-colors leading-relaxed">
                    {flagshipProject.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Stack Architecture Section */}
        <div className="mb-20">
          <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold text-center mb-12 text-white">
            Full-Stack Architecture (Node.js, React, Firebase & GCP)
          </h3>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-8 glass-card rounded-3xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-amber-500 to-rose-500 pointer-events-none" />

            {sahayakFlow.map((node, index) => (
              <React.Fragment key={node.title}>
                <div className="flex flex-col items-center text-center z-10 w-40">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${node.active
                    ? 'bg-amber-500/15 border-2 border-amber-400 text-[#fde68a] shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                    : 'bg-[#16171d] border border-white/10 text-gray-400'
                    }`}>
                    <span className="material-symbols-outlined text-3xl">{node.icon}</span>
                  </div>
                  <span className={`font-['Geist_Mono'] text-xs font-bold uppercase ${node.active ? 'text-[#fde68a]' : 'text-gray-300'}`}>{node.title}</span>
                  <span className="font-['Inter'] text-[10px] text-gray-400 mt-0.5">{node.sub}</span>
                </div>

                {index < sahayakFlow.length - 1 && (
                  <span className="material-symbols-outlined text-gray-500 rotate-90 md:rotate-0 text-xl hidden sm:block">
                    trending_flat
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Contribution Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 glass-card rounded-3xl border border-white/10">
            <h4 className="font-['Hanken_Grotesk'] text-xl font-bold mb-4 text-[#fde68a]">Key Contributions</h4>
            <ul className="space-y-3 font-['Inter'] text-sm text-gray-300">
              {flagshipProject.contributions.map((c, i) => (
                <li key={i} className="group flex items-start gap-3.5 cursor-default transition-colors">
                  <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                    <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">check</span>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 glass-card rounded-3xl border border-white/10">
            <h4 className="font-['Hanken_Grotesk'] text-xl font-bold mb-4 text-[#fde68a]">Challenges</h4>
            <p className="font-['Inter'] text-sm text-gray-300 leading-relaxed">
              {flagshipProject.challenges}
            </p>
          </div>

          <div className="p-8 glass-card rounded-3xl border border-white/10">
            <h4 className="font-['Hanken_Grotesk'] text-xl font-bold mb-4 text-[#fde68a]">Future Roadmap</h4>
            <p className="font-['Inter'] text-sm text-gray-300 leading-relaxed">
              {flagshipProject.roadmap}
            </p>
          </div>
        </div>

        {/* Sahayak Live Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {flagshipProject.liveUrl && (
            <a
              href={flagshipProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${flagshipProject.title}`}
              className="btn-modern-primary px-8 py-3.5 rounded-full font-['Hanken_Grotesk'] font-bold flex items-center justify-center gap-2 transition-all group"
            >
              <span className="material-symbols-outlined text-xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">rocket_launch</span> Live Demo
            </a>
          )}
          <a
            href={flagshipProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${flagshipProject.title} source code on GitHub`}
            className="btn-modern-secondary px-8 py-3.5 rounded-full font-['Hanken_Grotesk'] font-bold flex items-center justify-center gap-2 transition-all group"
          >
            <span className="material-symbols-outlined text-xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">code</span> View on GitHub
          </a>
        </div>

      </motion.section>

      {/* Enterprise Applications Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mb-12">
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-bold text-white mb-4">
            Enterprise Applications
          </h2>
          <p className="font-['Inter'] text-base text-gray-300 max-w-xl">
            Robust applications built with clean architecture, reliability, and user experience in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {enterpriseProjects.map((proj) => (
            <SpotlightCard
              key={proj.id}
              className="rounded-[2.5rem] p-6 group flex flex-col justify-between"
            >
              <div>
                <div className="h-48 w-full rounded-3xl overflow-hidden mb-6 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="250"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-['Geist_Mono'] text-[10px] px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[#fde68a] uppercase tracking-wider font-medium">
                      {proj.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-white mb-3">
                  {proj.title}
                </h3>
                <p className="font-['Inter'] text-sm text-gray-300 mb-6 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex -space-x-2">
                  {proj.icons.map((ic, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#16171d] flex items-center justify-center border-2 border-[#09090b] text-gray-300"
                    >
                      <span className="material-symbols-outlined text-xs" aria-hidden="true">{ic}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${proj.title} repository on GitHub`}
                  className="material-symbols-outlined text-[#fde68a] group-hover:text-[#f59e0b] group-hover:translate-x-2 transition-all text-2xl"
                >
                  arrow_forward
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>



      </motion.section>

      {/* Explore GitHub CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="glass-card rounded-[3rem] p-10 sm:p-16 text-center relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white mb-6">
            Want to see more projects?
          </h2>
          <p className="font-['Inter'] text-base text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Explore my GitHub repositories to see production-ready Java, Spring Boot, React, and AI applications. I'm always open to discussing new technical challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/ashifakram"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern-primary w-full sm:w-auto px-10 py-3.5 rounded-full font-['Hanken_Grotesk'] font-bold flex items-center justify-center gap-2 transition-all group"
            >
              <FaGithub className="text-xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" /> GitHub
            </a>
            <a
              href="#contact"
              className="btn-modern-secondary w-full sm:w-auto px-10 py-3.5 rounded-full font-['Hanken_Grotesk'] font-bold flex items-center justify-center gap-2 transition-all group"
            >
              <span className="material-symbols-outlined text-xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">mail</span> Contact Me
            </a>
          </div>

        </div>
      </motion.section>

    </div>
  );
};

export default Projects;
