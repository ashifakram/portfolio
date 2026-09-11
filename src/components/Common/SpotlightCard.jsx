import React, { useRef, useState } from 'react';

export const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(245, 158, 11, 0.15)', ...props }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-white/10 glass-card transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)] ${className}`}
      {...props}
    >
      {/* Cursor tracking spotlight gradient background */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
