import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { val: '9.23', label: 'CGPA / 10', icon: 'grade', textCol: 'text-[#fde68a]' },
  { val: '1.5+', label: 'Years Exp', icon: 'history', textCol: 'text-[#f59e0b]' },
  { val: '20+', label: 'Tech Stack', icon: 'code_blocks', textCol: 'text-[#f43f5e]' },
  { val: '5+', label: 'Live Projects', icon: 'rocket_launch', textCol: 'text-[#fde68a]' },
];

const Education = () => {
  return (
    <div id="education" className="py-12 max-w-[1200px] mx-auto px-6 space-y-16">
      
      {/* Hero Stats Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((item) => (
          <div key={item.label} className="glass-card p-6 sm:p-8 rounded-2xl text-center group border border-white/10 hover:border-amber-500/30 transition-colors">
            <span className={`material-symbols-outlined text-4xl mb-4 block ${item.textCol} group-hover:scale-110 transition-transform`}>
              {item.icon}
            </span>
            <h3 className={`font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold mb-1 ${item.textCol}`}>
              {item.val}
            </h3>
            <p className="font-['Geist_Mono'] text-xs text-gray-400 uppercase tracking-widest">
              {item.label}
            </p>
          </div>
        ))}
      </motion.section>

      {/* Education Timeline Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-bold text-white">
            Education
          </h2>
          <div className="h-[2px] flex-1 bg-white/10" />
        </div>

        <div className="relative">
          {/* Vertical Timeline Track */}
          <div className="absolute left-5 sm:left-6 md:left-8 top-0 bottom-0 w-[2px] timeline-line opacity-40" />

          <div className="relative pl-12 sm:pl-16 md:pl-20 mb-12">
            {/* Perfectly Centered on the Line (left-5/6/8 with -translate-x-1/2 matches track exactly) */}
            <div className="group absolute left-5 sm:left-6 md:left-8 -translate-x-1/2 top-6 sm:top-8 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#18181b] border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center justify-center z-20 hover:bg-amber-500 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-base sm:text-lg transition-colors duration-300">school</span>
            </div>

            <div className="glass-card p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center border border-white/10 hover:border-amber-500/30 transition-colors relative z-10">
              <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden relative group">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Netaji_college_at_Garia.jpg/1920px-Netaji_college_at_Garia.jpg"
                  alt="Netaji Subhash Engineering College (NSEC) Garia, Kolkata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="400"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-amber-500/10 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="skill-pill-magnetic cursor-default text-[#fde68a] font-['Geist_Mono'] text-xs px-3.5 py-1 bg-amber-500/15 rounded-full border border-amber-500/30 font-medium">
                    2018 – 2022
                  </span>
                  <span className="skill-pill-magnetic cursor-default bg-amber-500/20 text-[#fde68a] font-bold text-xs px-4 py-1 rounded-full font-['Geist_Mono'] border border-amber-500/40">
                    CGPA: 9.23 / 10
                  </span>
                </div>

                <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2">
                  Bachelor of Technology in Computer Science & Engineering
                </h3>
                <p className="text-lg text-gray-300 font-['Inter'] mb-6 font-medium">
                  Netaji Subhash Engineering College
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group flex items-start gap-3.5 cursor-default transition-colors">
                    <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                      <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">check</span>
                    </div>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors font-['Inter']">Focused on Core Computer Science, Data Structures & Software Engineering</p>
                  </div>
                  <div className="group flex items-start gap-3.5 cursor-default transition-colors">
                    <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-300">
                      <span className="material-symbols-outlined text-[#fde68a] group-hover:text-black text-xs font-bold transition-colors" aria-hidden="true">check</span>
                    </div>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors font-['Inter']">Active member of University Coding Society</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Education;
