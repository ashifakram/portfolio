import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import BrandLogo from '../Common/BrandLogo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }

      // Dynamic active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* TopNavBar */}
      <nav aria-label="Main Navigation" className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-20">
          <a href="#home" className="flex items-center gap-3 group font-['Hanken_Grotesk'] text-2xl md:text-3xl font-extrabold tracking-tighter">
            <BrandLogo className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
            <span className="google-text-motion">ASHIF.DEV</span>
          </a>


          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isCurrent = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`font-['Inter'] text-sm transition-colors duration-300 py-1 ${
                    isCurrent
                      ? 'text-[#fef08a] font-bold border-b-2 border-[#f59e0b] drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                      : 'text-gray-400 hover:text-[#fef08a]'
                  }`}
                >
                  {item.label}
                </a>

              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-2">
              <a
                href="https://github.com/ashifakram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashif Akram GitHub Profile"
                className="icon-glow-btn w-9 h-9 rounded-full glass-card border border-white/10 text-gray-300 hover:text-[#e9ddff] flex items-center justify-center"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="#skills"
                aria-label="View Technical Skills section"
                className="icon-glow-btn w-9 h-9 rounded-full glass-card border border-white/10 text-gray-300 hover:text-[#e9ddff] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">terminal</span>
              </a>
            </div>

            <a
              href="/Ashif_Akram_Resume.pdf"
              download="Ashif_Akram_Resume.pdf"
              aria-label="Download Resume PDF"
              className="btn-modern-primary px-6 py-2.5 rounded-full font-['Inter'] font-semibold text-sm transition-all"
            >
              Resume
            </a>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
