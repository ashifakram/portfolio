import React, { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Lenis from 'lenis';

import ShaderBackground from './components/Background/ShaderBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Philosophy from './components/Philosophy/Philosophy';
import Experience from './components/Experience/Experience';
import CaseStudy from './components/Experience/CaseStudy';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Engineering Philosophy | Ashif Akram</title>
        <meta
          name="description"
          content="Engineering Philosophy and Core Strengths of Ashif Akram - Java Full Stack Developer specializing in Spring Boot, React, and scalable backend architecture."
        />
      </Helmet>

      <div className="relative min-h-screen bg-[#09090b] text-gray-100 selection:bg-[#6750a4] selection:text-white font-['Inter']">
        <ShaderBackground />
        <Navbar />

        <main className="relative z-10 space-y-12 pb-12">
          <Hero />
          <About />
          <Philosophy />
          <Experience />
          <Education />
          <Certifications />
          <Skills />
          <CaseStudy />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
