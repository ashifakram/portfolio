import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] border-t border-white/10 relative">
      {/* Decorative Gradient Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#6750a4] to-transparent opacity-50" />

      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: Branding & Intro */}
          <div className="space-y-4">
            <div className="font-['Hanken_Grotesk'] text-2xl font-extrabold text-[#e9ddff] tracking-tight">
              ASHIF.DEV
            </div>
            <p className="font-['Inter'] text-sm text-gray-400 leading-relaxed">
              Crafting high-performance digital experiences with Java, Spring Boot, and modern web technologies.
            </p>
            <div className="flex gap-4 text-[#cfbcff]">
              <span className="material-symbols-outlined text-lg">terminal</span>
              <span className="material-symbols-outlined text-lg">code</span>
              <span className="material-symbols-outlined text-lg">verified</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-['Geist_Mono'] text-xs font-bold uppercase tracking-widest text-[#cfbcff]">
              Navigation
            </h4>
            <ul className="space-y-2 font-['Inter'] text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Me</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">My Projects</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Info */}
          <div className="space-y-4">
            <h4 className="font-['Geist_Mono'] text-xs font-bold uppercase tracking-widest text-[#cfbcff]">
              Support
            </h4>
            <ul className="space-y-2 font-['Inter'] text-sm">
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Back to Top & Social Links */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white font-['Inter'] text-sm font-semibold hover:text-[#cfbcff] transition-colors"
            >
              Back to Top
              <span className="material-symbols-outlined bg-white/5 p-2 rounded-full group-hover:-translate-y-1 transition-transform text-base">
                arrow_upward
              </span>
            </button>

            <div className="mt-8 md:mt-0 space-y-2 text-left md:text-right">
              <p className="font-['Geist_Mono'] text-xs text-gray-400 uppercase tracking-wider">
                Find Me Online
              </p>
              <div className="flex gap-4 justify-start md:justify-end font-['Inter'] text-sm">
                <a
                  href="https://github.com/ashifakram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FaGithub className="text-base" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ashif-akram-893996227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0A66C2] transition-colors flex items-center gap-1.5"
                >
                  <FaLinkedin className="text-base text-[#0A66C2]" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Status */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-['Inter'] text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Ashif Akram. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs font-['Geist_Mono'] text-[#cfbcff]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Bengaluru, KA, India • Open for Roles</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
