import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Branding & Info */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6750a4]/20 text-[#e0d2ff] border border-[#6750a4]/30 font-['Geist_Mono'] text-xs uppercase tracking-widest font-medium">
              <span className="w-2 h-2 rounded-full bg-[#6750a4] animate-pulse" />
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Hanken_Grotesk'] text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Ashif Akram
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold google-text-motion leading-snug"
          >
            Java Full Stack Developer | Spring Boot | React | REST APIs | Redis | Microservices
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-['Inter'] text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
          >
            Software Developer with 1.5+ years of professional experience building secure backend services and responsive web applications using Java, Spring Boot, REST APIs, and React.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="/Ashif_Akram_Resume.pdf"
              download="Ashif_Akram_Resume.pdf"
              aria-label="Download Ashif Akram Resume (PDF)"
              className="flex items-center gap-2 bg-[#6750a4] hover:bg-[#4f378a] text-white px-8 py-4 rounded-2xl font-semibold transition-all group shadow-xl shadow-[#6750a4]/20"
            >
              <span>Download Resume</span>
              <span className="material-symbols-outlined text-[20px] group-hover:translate-y-1 transition-transform" aria-hidden="true">
                download
              </span>
            </a>
            <a
              href="#contact"
              aria-label="Navigate to contact section"
              className="flex items-center gap-2 glass-card px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:bg-white/10"
            >
              <span>Contact Me</span>
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">send</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-6 pt-4"
          >
            <a
              href="https://github.com/ashifakram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashif Akram GitHub Profile"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-['Geist_Mono'] text-sm"
            >
              <FaGithub className="text-lg text-white" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashif-akram-893996227"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashif Akram LinkedIn Profile"
              className="text-gray-400 hover:text-[#0A66C2] transition-colors flex items-center gap-2 font-['Geist_Mono'] text-sm"
            >
              <FaLinkedin className="text-lg text-[#0A66C2]" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right Column: Bento Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 grid grid-cols-2 gap-4"
        >
          {/* Card 1: Core Tech */}
          <div className="col-span-2 glass-card p-6 sm:p-8 rounded-2xl flex flex-col gap-4 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <span className="material-symbols-outlined text-[120px] text-[#cfbcff]" aria-hidden="true">cloud_done</span>
            </div>
            <span className="text-[#cfbcff] font-['Geist_Mono'] text-xs font-medium tracking-wider">
              CORE TECH
            </span>
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-semibold text-white">
              Full Stack Reliability
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-['Geist_Mono'] text-gray-300">
                Java
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-['Geist_Mono'] text-gray-300">
                Spring Boot
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-['Geist_Mono'] text-gray-300">
                MySQL
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-['Geist_Mono'] text-gray-300">
                React
              </span>
            </div>
          </div>

          {/* Card 2: 1.5+ Years Exp. */}
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-2">
            <span className="material-symbols-outlined text-[#cfbcff] text-[40px]" aria-hidden="true">bolt</span>
            <span className="font-['Hanken_Grotesk'] text-4xl font-bold text-white">1.5+</span>
            <span className="text-gray-400 text-xs font-['Geist_Mono'] uppercase tracking-tight">
              Years Exp.
            </span>
          </div>

          {/* Card 3: 100% Secure Code */}
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-2">
            <span className="material-symbols-outlined text-[#cfbcff] text-[40px]" aria-hidden="true">
              verified_user
            </span>
            <span className="font-['Hanken_Grotesk'] text-4xl font-bold text-white">100%</span>
            <span className="text-gray-400 text-xs font-['Geist_Mono'] uppercase tracking-tight">
              Secure Code
            </span>
          </div>

          {/* Card 4: Architecture Image Banner */}
          <div className="col-span-2 glass-card h-48 rounded-2xl relative overflow-hidden group">
            <div
              className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6">
              <p className="text-white font-semibold flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">terminal</span>
                Production-ready architecture
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
