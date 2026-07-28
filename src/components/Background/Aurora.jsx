import React from 'react';

const Aurora = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top glowing ambient gradient */}
      <div 
        className="absolute -top-[20%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #a855f7 50%, transparent 100%)',
        }}
      />

      {/* Bottom right subtle cyan aura */}
      <div 
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 50%, transparent 100%)',
        }}
      />

      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};

export default Aurora;
