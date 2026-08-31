import React, { useEffect, useRef } from 'react';

const FloatingBubbles = () => {
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

    // Color palette matching Google & Material 3 Dark theme
    const colors = [
      { r: 103, g: 80, b: 164 },  // #6750a4 (Deep Purple)
      { r: 207, g: 188, b: 255 }, // #cfbcff (Lavender)
      { r: 231, g: 195, b: 101 }, // #e7c365 (Warm Gold)
      { r: 66,  g: 133, b: 244 }, // #4285F4 (Google Blue)
      { r: 54,  g: 168, b: 83 },  // #34A853 (Emerald Green)
    ];

    // Create 45 floating glass bubbles with higher density on sides
    const bubbleCount = Math.min(Math.floor(width / 28), 50);
    const bubbles = [];

    for (let i = 0; i < bubbleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 50 + 20,
        color,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.45 - 0.15, // upward float
        baseAlpha: Math.random() * 0.35 + 0.35, // Vibrant base alpha on sides
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.01 + 0.005,
        wobbleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Mouse tracking for soft interactive repulsion
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const contentHalfWidth = Math.min(580, width * 0.42); // 1160px reading container zone

      bubbles.forEach((b) => {
        // Upward float & gentle horizontal wobble
        b.y += b.vy;
        b.x += b.vx + Math.sin(time * b.wobbleSpeed * 60 + b.wobbleOffset) * 0.35;

        // Wrap around screen boundaries smoothly
        if (b.y + b.radius < -20) {
          b.y = height + b.radius;
          b.x = Math.random() * width;
        }
        if (b.x - b.radius > width + 20) b.x = -b.radius;
        if (b.x + b.radius < -20) b.x = width + b.radius;

        // Mouse distance repulsion (smoothly drifts away when cursor approaches)
        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = 180;

        if (dist < minDist && dist > 0) {
          const force = (minDist - dist) / minDist;
          b.x += (dx / dist) * force * 1.8;
          b.y += (dy / dist) * force * 1.8;
        }

        // Smart Content-Aware Spatial Alpha:
        // High & vibrant on sides (side gutters), soft & non-distracting in reading area
        const distFromCenter = Math.abs(b.x - centerX);
        let spatialMultiplier = 1.0;

        if (distFromCenter < contentHalfWidth) {
          const ratio = distFromCenter / contentHalfWidth;
          // Smooth quadratic curve: 0.15 at center, 1.0 at content boundary
          spatialMultiplier = 0.12 + 0.88 * Math.pow(ratio, 2.2);
        }

        const effectiveAlpha = b.baseAlpha * spatialMultiplier;

        // Pulsing radius effect
        const pulse = Math.sin(time * b.pulseSpeed * 60 + b.pulseOffset) * 4;
        const currentRadius = Math.max(10, b.radius + pulse);

        // Render 3D Glass Bubble
        ctx.save();

        // Outer glow on side margins
        if (spatialMultiplier > 0.4) {
          ctx.shadowColor = `rgba(${b.color.r}, ${b.color.g}, ${b.color.b}, ${effectiveAlpha * 0.5})`;
          ctx.shadowBlur = 20;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, currentRadius, 0, Math.PI * 2);

        // Radial gradient for 3D glass sphere look
        const gradient = ctx.createRadialGradient(
          b.x - currentRadius * 0.3,
          b.y - currentRadius * 0.3,
          currentRadius * 0.08,
          b.x,
          b.y,
          currentRadius
        );

        const { r, g, b: blueVal } = b.color;
        gradient.addColorStop(0, `rgba(255, 255, 255, ${effectiveAlpha * 1.2})`);
        gradient.addColorStop(0.35, `rgba(${r}, ${g}, ${blueVal}, ${effectiveAlpha * 0.85})`);
        gradient.addColorStop(0.8, `rgba(${r}, ${g}, ${blueVal}, ${effectiveAlpha * 0.25})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${blueVal}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fill();

        // Delicate glass border ring (stronger on side margins, ultra-soft in center)
        ctx.strokeStyle = `rgba(255, 255, 255, ${effectiveAlpha * 0.45})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner specular highlight crescent (only rendered when outside center reading area)
        if (spatialMultiplier > 0.35) {
          ctx.beginPath();
          ctx.arc(
            b.x - currentRadius * 0.25,
            b.y - currentRadius * 0.25,
            currentRadius * 0.35,
            Math.PI * 1.2,
            Math.PI * 1.8
          );
          ctx.strokeStyle = `rgba(255, 255, 255, ${effectiveAlpha * 0.7})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        ctx.restore();
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

export default FloatingBubbles;
