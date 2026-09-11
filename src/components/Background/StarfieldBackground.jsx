import React, { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
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

    // Color palette for cosmic stars & planets (Sunset Aurora & Amber Gold)
    const colors = [
      { r: 245, g: 158, b: 11,  name: 'amber' },   // #f59e0b
      { r: 244, g: 63,  b: 94,  name: 'rose' },    // #f43f5e
      { r: 253, g: 230, b: 138, name: 'gold' },    // #fde68a
      { r: 236, g: 72,  b: 153, name: 'pink' },    // #ec4899
      { r: 255, g: 255, b: 255, name: 'white' },   // Pure Starlight
    ];

    // 1. Generate Stars (80-100 twinkling celestial stars)
    const starCount = Math.min(Math.floor((width * height) / 14000), 90);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        color,
        baseAlpha: Math.random() * 0.4 + 0.15,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      });
    }

    // 2. Generate Mini Floating Planets with Planetary Rings (6-8 planets)
    const planets = [
      { x: width * 0.15, y: height * 0.25, radius: 12, ring: true, color: colors[0], speed: 0.1, angle: 0 },
      { x: width * 0.85, y: height * 0.2, radius: 16, ring: true, color: colors[1], speed: 0.08, angle: Math.PI * 0.5 },
      { x: width * 0.78, y: height * 0.75, radius: 10, ring: false, color: colors[3], speed: 0.12, angle: Math.PI },
      { x: width * 0.12, y: height * 0.8, radius: 14, ring: true, color: colors[2], speed: 0.09, angle: Math.PI * 1.5 },
    ];

    // 3. Shooting Stars / Starlight Streaks
    let shootingStar = null;
    const spawnShootingStar = () => {
      shootingStar = {
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.4,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4, // 45 degrees
        alpha: 1,
      };
    };

    // Spawn a shooting star every 6-10 seconds
    const shootingStarInterval = setInterval(() => {
      if (!shootingStar) spawnShootingStar();
    }, 7000);

    // Mouse tracking for interactive shining flare effect
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

    let time = 0;

    // Helper: Draw 4-point shining star cross flare
    const drawStarFlare = (x, y, size, alpha, colorRgb) => {
      ctx.save();
      ctx.translate(x, y);

      const flareLength = size * 5;
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, flareLength);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      gradient.addColorStop(0.3, `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${alpha * 0.6})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      // Horizontal ray
      ctx.beginPath();
      ctx.moveTo(-flareLength, 0);
      ctx.lineTo(flareLength, 0);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Vertical ray
      ctx.beginPath();
      ctx.moveTo(0, -flareLength);
      ctx.lineTo(0, flareLength);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Twinkling Stars & Hover Shining Flare Effect
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle sinusoidal animation
        let alpha = star.baseAlpha + Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.15;
        let radius = star.radius;
        let isHovered = false;

        // Mouse Proximity Hover Check (Shine Brightly on Hover)
        if (mouse.active) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const hoverRadius = 150;

          if (dist < hoverRadius) {
            const proximity = (hoverRadius - dist) / hoverRadius;
            alpha = Math.min(1.0, alpha + proximity * 0.65);
            radius = star.radius + proximity * 3;
            isHovered = true;

            // Draw thin shining starlight ray connecting to cursor
            if (proximity > 0.4) {
              ctx.beginPath();
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${proximity * 0.25})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        // Draw Star Body with Soft Glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${Math.max(0.1, alpha)})`;
        
        if (isHovered) {
          ctx.shadowColor = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0.9)`;
          ctx.shadowBlur = 12;
        }

        ctx.fill();
        ctx.restore();

        // If mouse is near, draw a brilliant 4-point shining star flare!
        if (isHovered && alpha > 0.4) {
          drawStarFlare(star.x, star.y, radius, alpha, star.color);
        }
      });

      // 2. Draw Mini Floating Planets
      planets.forEach((p) => {
        // Slow orbital floating movement
        p.x += Math.cos(time * p.speed + p.angle) * 0.3;
        p.y += Math.sin(time * p.speed + p.angle) * 0.3;

        let pAlpha = 0.35;
        let isPHovered = false;

        if (mouse.active) {
          const pdx = p.x - mouse.x;
          const pdy = p.y - mouse.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
          if (pdist < 180) {
            const pProximity = (180 - pdist) / 180;
            pAlpha = 0.35 + pProximity * 0.55;
            isPHovered = true;
          }
        }

        ctx.save();

        // Planet Outer Glow
        if (isPHovered) {
          ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.8)`;
          ctx.shadowBlur = 25;
        }

        // Planet Body Gradient
        const pGrad = ctx.createRadialGradient(
          p.x - p.radius * 0.3,
          p.y - p.radius * 0.3,
          p.radius * 0.1,
          p.x,
          p.y,
          p.radius
        );
        pGrad.addColorStop(0, `rgba(255, 255, 255, ${pAlpha * 1.2})`);
        pGrad.addColorStop(0.5, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${pAlpha})`);
        pGrad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.1)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = pGrad;
        ctx.fill();

        // Planetary Ring (Saturn Ring Effect)
        if (p.ring) {
          ctx.beginPath();
          ctx.ellipse(p.x, p.y, p.radius * 1.8, p.radius * 0.5, Math.PI / 6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${pAlpha * 0.7})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        ctx.restore();

        if (isPHovered) {
          drawStarFlare(p.x, p.y, p.radius * 0.8, pAlpha, p.color);
        }
      });

      // 3. Draw Shooting Stars / Starlight Streaks
      if (shootingStar) {
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.alpha -= 0.015;

        if (shootingStar.alpha <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar = null;
        } else {
          ctx.save();
          const headX = shootingStar.x;
          const headY = shootingStar.y;
          const tailX = headX - Math.cos(shootingStar.angle) * shootingStar.length;
          const tailY = headY - Math.sin(shootingStar.angle) * shootingStar.length;

          const streakGrad = ctx.createLinearGradient(headX, headY, tailX, tailY);
          streakGrad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.alpha})`);
          streakGrad.addColorStop(0.4, `rgba(207, 188, 255, ${shootingStar.alpha * 0.6})`);
          streakGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.beginPath();
          ctx.moveTo(headX, headY);
          ctx.lineTo(tailX, tailY);
          ctx.strokeStyle = streakGrad;
          ctx.lineWidth = 1.8;
          ctx.stroke();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(shootingStarInterval);
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

export default StarfieldBackground;
