import React, { useEffect, useRef } from 'react';

const ConstellationBackground = () => {
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

    // Color palette for Star Nodes (Matching Theme)
    const nodeColors = [
      { r: 207, g: 188, b: 255 }, // Lavender (#cfbcff)
      { r: 231, g: 195, b: 101 }, // Warm Gold (#e7c365)
      { r: 103, g: 80,  b: 164 }, // Deep Purple (#6750a4)
      { r: 66,  g: 133, b: 244 }, // Google Blue (#4285F4)
    ];

    // Create Star Particle Nodes
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const color = nodeColors[Math.floor(Math.random() * nodeColors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 1.8, // Small star size
        spikes: 5,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        color,
        baseAlpha: Math.random() * 0.35 + 0.25,
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Mouse tracking for star hover proximity & shining lines
    let mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const connectDistance = 130; // Max distance for star-to-star connecting line
    const mouseConnectDistance = 170; // Max distance for mouse-to-star shining connection

    // Helper: Function to draw 5-point star polygon
    const drawStarShape = (cx, cy, spikes, outerRadius, innerRadius, fillStyle, isShining) => {
      ctx.save();
      ctx.beginPath();
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();

      if (isShining) {
        ctx.shadowColor = fillStyle;
        ctx.shadowBlur = 12;
      }

      ctx.fillStyle = fillStyle;
      ctx.fill();
      ctx.restore();
    };

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Update positions and draw Star Particles & Connecting Network Lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        let alpha = p.baseAlpha;
        let starScale = 1.0;
        let isHovered = false;

        // Check proximity to mouse cursor (Hover Shine Effect for Stars)
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouseConnectDistance) {
            const proximity = (mouseConnectDistance - mdist) / mouseConnectDistance;
            alpha = Math.min(1.0, p.baseAlpha + proximity * 0.7);
            starScale = 1.0 + proximity * 0.8;
            isHovered = true;

            // Draw glowing shining line connecting star to cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${proximity * 0.4})`;
            ctx.lineWidth = 0.8 + proximity * 0.6;
            ctx.stroke();

            // Gentle gravitational drift toward cursor
            p.x -= mdx * 0.008;
            p.y -= mdy * 0.008;
          }
        }

        // Draw Star Particle Shape (5-point small star)
        const outerR = p.size * starScale;
        const innerR = outerR * 0.45;
        const colorStr = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;

        drawStarShape(p.x, p.y, p.spikes, outerR, innerR, colorStr, isHovered);

        // 2. Connect nearby star particles with ultra-thin constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDistance) {
            const lineAlpha = (1 - dist / connectDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw shining star cursor glow point
      if (mouse.active) {
        drawStarShape(mouse.x, mouse.y, 5, 5, 2.2, 'rgba(207, 188, 255, 0.8)', true);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ConstellationBackground;
