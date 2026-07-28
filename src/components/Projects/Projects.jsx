import React from 'react';
import { motion } from 'framer-motion';
import { flagshipProject, enterpriseProjects } from '../../data/projects';

const sahayakFlow = [
  { icon: 'person', title: 'Teacher', sub: 'End User' },
  { icon: 'laptop_mac', title: 'React SPA', sub: 'Frontend Layer' },
  { icon: 'settings_ethernet', title: 'Node & Express', sub: 'RESTful API', active: true },
  { icon: 'neurology', title: 'Gemini AI', sub: 'ML Engine' }
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
          <span className="font-['Geist_Mono'] text-xs uppercase tracking-widest text-[#cfbcff] mb-4 block font-medium">
            {flagshipProject.tag}
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl font-extrabold text-white mb-6">
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
                    className="font-['Geist_Mono'] text-xs px-3.5 py-1.5 bg-[#6750a4]/20 text-[#e0d2ff] border border-[#6750a4]/30 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-rose-400 text-2xl">warning</span>
                </div>
                <div>
                  <h4 className="font-['Hanken_Grotesk'] font-bold text-lg text-white mb-1">Problem Statement</h4>
                  <p className="font-['Inter'] text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {flagshipProject.problem}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#6750a4]/20 border border-[#6750a4]/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#cfbcff] text-2xl">verified</span>
                </div>
                <div>
                  <h4 className="font-['Hanken_Grotesk'] font-bold text-lg text-white mb-1">Our Solution</h4>
                  <p className="font-['Inter'] text-xs sm:text-sm text-gray-300 leading-relaxed">
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
            Full-Stack Architecture (MERN)
          </h3>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-8 glass-card rounded-3xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#6750a4] to-transparent pointer-events-none" />
            
            {sahayakFlow.map((node, index) => (
              <React.Fragment key={node.title}>
                <div className="flex flex-col items-center text-center z-10 w-40">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg border ${
                    node.active
                      ? 'bg-[#6750a4] border-[#cfbcff] text-white shadow-[0_0_20px_rgba(103,80,164,0.5)]'
                      : 'bg-[#16171d] border-white/20 text-[#cfbcff]'
                  }`}>
                    <span className="material-symbols-outlined text-3xl">{node.icon}</span>
                  </div>
                  <span className="font-['Geist_Mono'] text-xs font-bold uppercase text-[#e9ddff]">{node.title}</span>
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
            <h4 className="font-['Hanken_Grotesk'] text-xl font-bold mb-4 text-[#cfbcff]">Key Contributions</h4>
            <ul className="space-y-3 font-['Inter'] text-sm text-gray-300">
              {flagshipProject.contributions.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#cfbcff] text-sm mt-1">circle</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 glass-card rounded-3xl border border-white/10">
            <h4 className="font-['Hanken_Grotesk'] text-xl font-bold mb-4 text-[#cfbcff]">Challenges</h4>
            <p className="font-['Inter'] text-sm text-gray-300 leading-relaxed">
              {flagshipProject.challenges}
            </p>
          </div>

          <div className="p-8 glass-card rounded-3xl border border-white/10">
            <h4 className="font-['Hanken_Grotesk'] text-xl font-bold mb-4 text-[#cfbcff]">Future Roadmap</h4>
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
              className="px-8 py-3.5 bg-[#6750a4] hover:bg-[#4f378a] text-white rounded-full font-['Hanken_Grotesk'] font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#6750a4]/30"
            >
              <span className="material-symbols-outlined text-xl">rocket_launch</span> Live Demo
            </a>
          )}
          <a
            href={flagshipProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#6750a4] hover:bg-[#4f378a] text-white rounded-full font-['Hanken_Grotesk'] font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#6750a4]/30"
          >
            <span className="material-symbols-outlined text-xl">code</span> View on GitHub
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
          <p className="font-['Inter'] text-base text-gray-400 max-w-xl">
            Robust, production-ready systems built with scalability and user experience in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {enterpriseProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-[2.5rem] p-6 group hover:border-[#cfbcff]/40 hover:-translate-y-1 transition-all duration-500 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="h-48 w-full rounded-3xl overflow-hidden mb-6 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-['Geist_Mono'] text-[10px] px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[#cfbcff] uppercase tracking-wider">
                      {proj.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-white mb-3">
                  {proj.title}
                </h3>
                <p className="font-['Inter'] text-sm text-gray-400 mb-6 leading-relaxed">
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
                      <span className="material-symbols-outlined text-xs">{ic}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="material-symbols-outlined text-[#cfbcff] group-hover:translate-x-2 transition-transform text-2xl"
                >
                  arrow_forward
                </a>
              </div>
            </div>
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6750a4]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#63597c]/10 blur-[100px] rounded-full pointer-events-none" />

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
              className="w-full sm:w-auto px-10 py-3.5 bg-[#6750a4] hover:bg-[#4f378a] text-white rounded-full font-['Hanken_Grotesk'] font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#6750a4]/30"
            >
              <span className="material-symbols-outlined text-xl">hub</span> GitHub
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-3.5 glass-card border border-white/20 text-white rounded-full font-['Hanken_Grotesk'] font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              <span className="material-symbols-outlined text-xl">mail</span> Contact Me
            </a>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Projects;
