import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { val: '9.23', label: 'CGPA / 10', icon: 'grade', textCol: 'text-[#cfbcff]' },
  { val: '1.5+', label: 'Years Exp', icon: 'history', textCol: 'text-[#e7c365]' },
  { val: '20+', label: 'Tech Stack', icon: 'code_blocks', textCol: 'text-[#cdc0e9]' },
  { val: '5+', label: 'Live Projects', icon: 'rocket_launch', textCol: 'text-[#cfbcff]' },
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
          <div key={item.label} className="glass-card p-6 sm:p-8 rounded-2xl text-center group border border-white/10">
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

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-[2px] timeline-line opacity-40" />

          <div className="relative mb-12">
            <div className="absolute left-[-35px] md:left-[-42px] top-2 w-10 h-10 md:w-12 md:h-12 glass-card rounded-full flex items-center justify-center border-[#6750a4] shadow-[0_0_20px_rgba(103,80,164,0.3)]">
              <span className="material-symbols-outlined text-[#cfbcff] text-xl">school</span>
            </div>

            <div className="glass-card p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center border border-white/10">
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
                <div className="absolute inset-0 bg-[#6750a4]/20 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[#e9ddff] font-['Geist_Mono'] text-xs px-3.5 py-1 bg-[#6750a4]/20 rounded-full border border-[#6750a4]/30 font-medium">
                    2018 – 2022
                  </span>
                  <span className="animated-badge text-white font-bold text-xs px-4 py-1 rounded-full shadow-lg font-['Geist_Mono']">
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
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#6750a4] mt-0.5">check_circle</span>
                    <p className="text-sm text-gray-300 font-['Inter']">Focused on Core Computer Science, Data Structures & Software Engineering</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#6750a4] mt-0.5">check_circle</span>
                    <p className="text-sm text-gray-300 font-['Inter']">Active member of University Coding Society</p>
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
