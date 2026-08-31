import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const Tilt3DCard = ({
  children,
  className = '',
  intensity = 15,
  glow = true,
  scale = 1.02,
  ...props
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 350, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 350, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);

  // Specular light position
  const lightX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const lightY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);
  const lightBackground = useTransform(
    [lightX, lightY],
    ([lx, ly]) => `radial-gradient(600px circle at ${lx}% ${ly}%, rgba(207, 188, 255, 0.2), transparent 50%)`
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{ scale: isHovered ? scale : 1 }}
        transition={{ duration: 0.2 }}
        style={{
          rotateY,
          rotateX,
          transformStyle: 'preserve-3d',
        }}
        className={`relative transition-shadow duration-300 ${
          isHovered
            ? 'shadow-[0_20px_50px_rgba(103,80,164,0.35)] border-[#cfbcff]/40'
            : ''
        } ${className}`}
        {...props}
      >
        {/* Specular 3D Reflection Light Overlay */}
        {glow && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 z-30 overflow-hidden"
            style={{
              opacity: isHovered ? 0.6 : 0,
              background: lightBackground,
            }}
          />
        )}

        
        {/* Card Content with 3D Depth Layer */}
        <div style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }} className="w-full h-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Tilt3DCard;
