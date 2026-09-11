import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress counter over ~2.2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 4) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 22);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <div className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden selection:bg-none">
          
          {/* Cinema Shutter Top Panel */}
          <motion.div
            initial={{ y: '0%' }}
            exit={{
              y: '-100%',
              transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#09090b] z-10"
          />

          {/* Cinema Shutter Bottom Panel */}
          <motion.div
            initial={{ y: '0%' }}
            exit={{
              y: '100%',
              transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
            }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#09090b] z-10"
          />



          {/* Center Content Container */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              transition: { duration: 0.35, ease: 'easeOut' }
            }}
            className="relative z-20 w-full h-full flex flex-col items-center justify-center"
          >
            {/* Ambient Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Stable Hexagon & AA Monogram SVG */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-8">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_0_25px_rgba(245,158,11,0.7)]"
              >
                {/* Outer Hexagon Frame */}
                <motion.polygon
                  points="50 5, 90 27.5, 90 72.5, 50 95, 10 72.5, 10 27.5"
                  fill="none"
                  stroke="url(#cinema-gradient-stroke)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  animate={{ pathLength: progress / 100, opacity: 1 }}
                  transition={{ duration: 0.15, ease: 'linear' }}
                />

                {/* Inner Monogram AA Stroke */}
                <motion.path
                  d="M 32 70 L 50 25 L 68 70 M 39 53 L 61 53"
                  fill="none"
                  stroke="url(#cinema-monogram-gradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 0.15, ease: 'linear' }}
                />

                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="cinema-gradient-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4285F4" />
                    <stop offset="33%" stopColor="#EA4335" />
                    <stop offset="66%" stopColor="#FBBC05" />
                    <stop offset="100%" stopColor="#34A853" />
                  </linearGradient>
                  <linearGradient id="cinema-monogram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#fde68a" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Tagline & Percentage Counter */}
            <div className="flex flex-col items-center gap-2">
              <span className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-extrabold tracking-tight google-text-motion">
                ASHIF AKRAM
              </span>

              <span className="font-['Geist_Mono'] text-xs text-gray-300 uppercase tracking-widest flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-ping" />
                {progress < 40
                  ? 'Initializing System...'
                  : progress < 85
                  ? 'Loading Architecture...'
                  : 'Welcome to Ashif.Dev'}
              </span>

              {/* Minimal Progress Track */}
              <div className="w-52 h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#34A853] rounded-full shadow-[0_0_10px_#34A853]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="font-['Geist_Mono'] text-xs font-bold text-[#fde68a] mt-1 tracking-wider">
                {progress}%
              </span>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
