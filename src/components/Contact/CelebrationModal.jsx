import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const CelebrationModal = ({ isOpen, onClose, formData }) => {
  useEffect(() => {
    if (isOpen) {
      // Single quick 1.2s refined stardust sparkle burst (Professional & crisp)
      confetti({
        particleCount: 45,
        spread: 60,
        startVelocity: 25,
        origin: { y: 0.5 },
        colors: ['#34A853', '#4285F4', '#cfbcff', '#e7c365'],
        ticks: 100, // Short 1-second lifespan
        scalar: 0.9,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* High-Tech Success Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative z-10 w-full max-w-md glass-card p-8 rounded-3xl border border-white/15 shadow-2xl text-center space-y-6 overflow-hidden"
        >
          {/* Subtle Ambient Light Glow */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#34A853]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#4285F4]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Animated SVG Checkmark Badge */}
          <div className="relative mx-auto w-16 h-16 rounded-2xl bg-[#16171d] border border-[#34A853]/40 shadow-[0_0_25px_rgba(52,168,83,0.4)] flex items-center justify-center">
            <svg className="w-8 h-8 text-[#34A853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <motion.path
                d="M20 6L9 17l-5-5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              />
            </svg>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-white tracking-tight">
              Message Received
            </h3>
            <p className="font-['Inter'] text-sm text-gray-300 leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData?.name || 'there'}</span>! Your inquiry has been delivered directly to Ashif.
            </p>
          </div>




          <button
            onClick={onClose}
            className="btn-modern-primary w-full py-3.5 rounded-xl font-['Hanken_Grotesk'] font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Close</span>
            <span className="material-symbols-outlined text-lg">check</span>
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CelebrationModal;
