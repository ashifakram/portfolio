import React from 'react';
import { motion } from 'framer-motion';

const techPills = [
  { name: 'Spring Boot', bg: 'bg-[#e1d4fd]/10', border: 'border-[#e1d4fd]/20', text: 'text-[#e9ddff]' },
  { name: 'Java 17+', bg: 'bg-[#6750a4]/10', border: 'border-[#6750a4]/20', text: 'text-[#e0d2ff]' },
  { name: 'React', bg: 'bg-[#c9a74d]/10', border: 'border-[#c9a74d]/20', text: 'text-[#ffdf93]' },
  { name: 'Redis', bg: 'bg-[#e1d4fd]/10', border: 'border-[#e1d4fd]/20', text: 'text-[#e9ddff]' },
  { name: 'MySQL', bg: 'bg-[#6750a4]/10', border: 'border-[#6750a4]/20', text: 'text-[#e0d2ff]' },
  { name: 'JWT Auth', bg: 'bg-[#c9a74d]/10', border: 'border-[#c9a74d]/20', text: 'text-[#ffdf93]' },
  { name: 'Swagger', bg: 'bg-[#e1d4fd]/10', border: 'border-[#e1d4fd]/20', text: 'text-[#e9ddff]' },
];

const About = () => {
  return (
    <div id="about" className="space-y-16 py-16">
      
      {/* Hero / About Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Bio & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6750a4]/20 text-[#e9ddff] text-xs font-['Geist_Mono'] mb-6 border border-[#6750a4]/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#6750a4] animate-pulse" />
              Available for Full Stack Opportunities
            </div>

            <h2 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl font-extrabold text-[#e9ddff] mb-6 leading-tight">
              Bridging <span className="google-text-motion">Backend</span> Power with Frontend <span className="google-text-motion">Finesse</span>.
            </h2>

            <p className="font-['Inter'] text-base sm:text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
              I am <span className="text-white font-semibold">Ashif Akram</span>, a Junior Software Engineer based in <span className="text-[#e7c365]">Bengaluru, India</span>. At Esquare(E2) Software India Pvt Ltd., I build secure Java backend services and modern React applications with a focus on maintainability and performance.
            </p>

            {/* Stats Bento Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <span className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e9ddff] block mb-1">1.5+</span>
                <span className="font-['Geist_Mono'] text-xs text-gray-400 uppercase tracking-widest">Years Exp</span>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <span className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e7c365] block mb-1">50+</span>
                <span className="font-['Geist_Mono'] text-xs text-gray-400 uppercase tracking-widest">APIs Built</span>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/10 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-[#e9ddff] text-xl" aria-hidden="true">verified</span>
                  <span className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#e9ddff]">Agile</span>
                </div>
                <span className="font-['Geist_Mono'] text-xs text-gray-400 uppercase tracking-widest">Workflow</span>
              </div>
            </div>
          </div>

          {/* Right Side: Portrait with Conic Moving Border */}
          <div className="lg:col-span-5 relative group">
            <div className="moving-border p-[2px]">
              <div className="moving-border-content rounded-[calc(1.5rem-2px)] overflow-hidden">
                <img
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  alt="Ashif Akram - Software Engineer"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="500"
                  height="500"
                />
              </div>
            </div>

            {/* Decorative Floating Badge */}
            <div className="absolute -top-4 -right-4 glass-card p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-xl border border-white/10" style={{ animationDuration: '4s' }}>
              <span className="material-symbols-outlined text-[#cfbcff] text-2xl" aria-hidden="true">terminal</span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-400 font-['Geist_Mono']">Stack</span>
                <span className="text-xs font-bold text-white font-['Inter']">Java Developer</span>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* Developer Profile Container */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-[1200px] mx-auto px-6"
      >
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-white/10">
          <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-3 text-white">
            <span className="material-symbols-outlined text-[#e9ddff] text-2xl" aria-hidden="true">info</span>
            Developer Profile
          </h3>
          <p className="font-['Inter'] text-base text-gray-300 mb-8 leading-relaxed max-w-4xl">
            Java Full Stack Developer with 1.5+ years of experience building web applications. My daily responsibilities focus primarily on backend development using Java, Spring Boot, REST APIs, Spring Security, Redis, and MySQL, alongside building user interfaces with React. Backend engineering is my core interest, and I am actively expanding my knowledge into microservices architecture concepts.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {techPills.map((pill, idx) => (
              <span
                key={idx}
                className={`px-4 py-1.5 rounded-full ${pill.bg} border ${pill.border} ${pill.text} text-xs font-['Geist_Mono'] font-medium`}
              >
                {pill.name}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default About;
