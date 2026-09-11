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
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


import Preloader from './components/Common/Preloader';

function App() {
  const [isPreloaderComplete, setIsPreloaderComplete] = React.useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animId;
    function raf(time) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }

    animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Ashif Akram | Java Backend & Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Ashif Akram - Java Backend & Full Stack Developer specializing in Java, Spring Boot, REST APIs, Microservices, and React."
        />
        <link rel="canonical" href="https://ashifakram.github.io/portfolio/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ashifakram.github.io/portfolio/" />
        <meta property="og:title" content="Ashif Akram | Java Backend & Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Ashif Akram - Java Backend & Full Stack Developer specializing in Java, Spring Boot, REST APIs, Microservices, and React." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ashifakram.github.io/portfolio/" />
        <meta name="twitter:title" content="Ashif Akram | Java Backend & Full Stack Developer" />
        <meta name="twitter:description" content="Portfolio of Ashif Akram - Java Backend & Full Stack Developer specializing in Java, Spring Boot, REST APIs, Microservices, and React." />

        <meta name="twitter:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" />
      </Helmet>

      <div className="relative min-h-screen bg-[#09090b] text-gray-100 selection:bg-[#f59e0b] selection:text-black font-['Inter']">
        <Preloader onComplete={() => setIsPreloaderComplete(true)} />
        <ShaderBackground />
        <Navbar />

        <main className="relative z-10 space-y-12 pb-12">
          <Hero startTyping={isPreloaderComplete} />

          <About />
          <Experience />
          <CaseStudy />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Philosophy />
          <Contact />
        </main>



        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
