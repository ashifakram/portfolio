import React, { useEffect, useRef } from 'react';

export const AmbientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Micro stardust particles (tiny, subtle 1-2px dots)
    const particleCount = Math.min(Math.floor(width / 25), 50);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.8,
        vy: -Math.random() * 0.3 - 0.1,
        vx: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.25 + 0.05,
        baseAlpha: Math.random() * 0.25 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Soft floating ambient glow pools (Aurora Orbs)
    const orbs = [
      { x: width * 0.2, y: height * 0.25, r: 350, color: '103, 80, 164', vx: 0.2, vy: 0.15, phase: 0 },   // Deep Purple
      { x: width * 0.8, y: height * 0.35, r: 380, color: '207, 188, 255', vx: -0.15, vy: 0.2, phase: 2 },  // Lavender
      { x: width * 0.5, y: height * 0.75, r: 320, color: '231, 195, 101', vx: 0.18, vy: -0.15, phase: 4 }, // Warm Gold
      { x: width * 0.85, y: height * 0.85, r: 300, color: '66, 133, 244', vx: -0.2, vy: -0.1, phase: 1.5 }, // Google Blue
    ];

    // Mouse tracking for dynamic ambient spotlight
    let mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Soft Floating Aurora Mesh (Deep Background Glow)
      orbs.forEach((orb) => {
        orb.x += orb.vx + Math.sin(time * 0.5 + orb.phase) * 0.4;
        orb.y += orb.vy + Math.cos(time * 0.4 + orb.phase) * 0.4;

        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, `rgba(${orb.color}, 0.08)`);
        grad.addColorStop(0.5, `rgba(${orb.color}, 0.03)`);
        grad.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Interactive Cursor Glow Spotlight
      const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 450);
      mouseGrad.addColorStop(0, 'rgba(207, 188, 255, 0.06)');
      mouseGrad.addColorStop(0.6, 'rgba(103, 80, 164, 0.02)');
      mouseGrad.addColorStop(1, 'rgba(9, 9, 11, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 450, 0, Math.PI * 2);
      ctx.fill();

      // 3. Draw Micro Stardust Particles (Ultra-subtle dots)
      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx + Math.sin(time + p.x) * 0.1;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        p.alpha = p.baseAlpha + Math.sin(time * p.twinkleSpeed * 60) * 0.08;

        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.02, p.alpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default AmbientBackground;
