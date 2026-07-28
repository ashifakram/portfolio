import React from 'react';
import { motion } from 'framer-motion';

const featureCards = [
  {
    icon: 'key',
    title: 'Auth & Security',
    desc: 'Robust JWT implementation with Refresh Token rotation and Role-Based access control for healthcare privacy.'
  },
  {
    icon: 'bolt',
    title: 'Performance Opt.',
    desc: 'Redis cache integration for frequently accessed doctor availability and patient record lookups.'
  },
  {
    icon: 'auto_stories',
    title: 'API Documentation',
    desc: 'Fully interactive Swagger/OpenAPI documentation for all 20+ endpoints enabling quick partner integration.'
  }
];

const metricBadges = [
  { val: '20+', label: 'REST APIs' },
  { val: 'JWT', label: 'RBAC Secured' },
  { val: 'Redis', label: 'Caching Layer' },
  { val: 'Cloud', label: 'Microservices' }
];

const Achievements = () => {
  return (
    <div className="space-y-16 py-12 max-w-[1200px] mx-auto px-6">
      
      {/* Feature Cards Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {featureCards.map((card, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl border border-white/10">
            <span className="material-symbols-outlined text-[#cfbcff] text-3xl mb-4 block">
              {card.icon}
            </span>
            <h4 className="font-['Hanken_Grotesk'] text-xl font-bold text-white mb-2">
              {card.title}
            </h4>
            <p className="font-['Inter'] text-sm text-gray-400 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </motion.section>

      {/* Metric Badges Row */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {metricBadges.map((badge, i) => (
          <div key={i} className="bg-[#6750a4]/10 p-6 rounded-2xl border border-[#6750a4]/20 text-center">
            <div className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-bold text-[#cfbcff] mb-1">
              {badge.val}
            </div>
            <div className="font-['Geist_Mono'] text-xs text-gray-300 uppercase tracking-wider">
              {badge.label}
            </div>
          </div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="glass-card bg-[#6750a4]/10 p-12 sm:p-16 rounded-[3rem] text-center relative overflow-hidden border border-[#6750a4]/30">
          <div className="relative z-10">
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white mb-8">
              Interested in discussing backend architecture?
            </h2>
            <a
              href="#contact"
              className="inline-block bg-[#6750a4] hover:bg-[#4f378a] text-white px-10 py-4 rounded-full font-['Hanken_Grotesk'] font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#6750a4]/40"
            >
              Let's Connect
            </a>
          </div>

          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#6750a4]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#765b00]/20 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </motion.section>

    </div>
  );
};

export default Achievements;
