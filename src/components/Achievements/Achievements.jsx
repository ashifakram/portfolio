import React from 'react';
import { motion } from 'framer-motion';

const featureCards = [
  {
    icon: 'key',
    title: 'Auth & Security',
    desc: 'Robust JWT implementation with Role-Based Access Control (RBAC) to ensure application data privacy.'
  },
  {
    icon: 'bolt',
    title: 'Performance Opt.',
    desc: 'Redis cache integration for frequently accessed endpoints and database lookups.'
  },
  {
    icon: 'auto_stories',
    title: 'API Documentation',
    desc: 'Interactive Swagger/OpenAPI documentation enabling clear and standardized backend API integration.'
  }
];

const metricBadges = [
  { val: 'REST APIs', label: 'Backend Services' },
  { val: 'JWT', label: 'RBAC Secured' },
  { val: 'Redis', label: 'Caching Layer' },
  { val: 'Spring', label: 'Microservices' }
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
          <div key={i} className="glass-card p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-colors">
            <span className="material-symbols-outlined text-[#f59e0b] text-3xl mb-4 block">
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
          <div key={i} className="bg-amber-500/10 p-6 rounded-2xl border border-amber-500/25 text-center">
            <div className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-bold text-[#fde68a] mb-1">
              {badge.val}
            </div>
            <div className="font-['Geist_Mono'] text-xs text-gray-300 uppercase tracking-wider">
              {badge.label}
            </div>
          </div>
        ))}
      </motion.section>



    </div>
  );
};

export default Achievements;
