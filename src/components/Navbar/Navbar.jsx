import React, { useEffect, useState } from 'react';

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
      <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-20">
          <a href="#home" className="font-['Hanken_Grotesk'] text-2xl md:text-3xl font-extrabold tracking-tighter text-[#e9ddff]">
            ASHIF.DEV
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isCurrent = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-['Inter'] text-sm transition-colors duration-300 py-1 ${
                    isCurrent
                      ? 'text-[#e9ddff] font-bold border-b-2 border-[#6750a4]'
                      : 'text-gray-400 hover:text-[#e9ddff]'
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
                aria-label="GitHub Profile"
                className="p-2 text-gray-400 hover:text-[#e9ddff] transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>
              <a
                href="#skills"
                aria-label="Technical Skills & Terminal"
                className="p-2 text-gray-400 hover:text-[#e9ddff] transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[20px]">terminal</span>
              </a>
            </div>

            <a
              href="/Ashif_Akram_Resume.pdf"
              download="Ashif_Akram_Resume.pdf"
              className="bg-[#6750a4] hover:bg-[#4f378a] text-white px-6 py-2.5 rounded-full font-['Inter'] font-semibold text-sm active:scale-95 transition-all shadow-lg shadow-[#6750a4]/20"
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
