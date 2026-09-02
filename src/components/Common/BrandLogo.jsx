import React from 'react';

export const BrandLogo = ({ className = 'w-7 h-7' }) => {
  return (
    <svg viewBox="0 0 100 100" className={`${className} drop-shadow-[0_0_10px_rgba(207,188,255,0.7)] flex-shrink-0`}>
      <polygon
        points="50 5, 90 27.5, 90 72.5, 50 95, 10 72.5, 10 27.5"
        fill="none"
        stroke="url(#brand-stroke)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 32 70 L 50 25 L 68 70 M 39 53 L 61 53"
        fill="none"
        stroke="url(#brand-monogram)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="brand-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4">
            <animate attributeName="stop-color" values="#4285F4;#EA4335;#FBBC05;#34A853;#4285F4" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="33%" stopColor="#EA4335">
            <animate attributeName="stop-color" values="#EA4335;#FBBC05;#34A853;#4285F4;#EA4335" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="66%" stopColor="#FBBC05">
            <animate attributeName="stop-color" values="#FBBC05;#34A853;#4285F4;#EA4335;#FBBC05" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#34A853">
            <animate attributeName="stop-color" values="#34A853;#4285F4;#EA4335;#FBBC05;#34A853" dur="6s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient id="brand-monogram" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff">
            <animate attributeName="stop-color" values="#ffffff;#cfbcff;#e7c365;#ffffff" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#cfbcff">
            <animate attributeName="stop-color" values="#cfbcff;#e7c365;#ffffff;#cfbcff" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#e7c365">
            <animate attributeName="stop-color" values="#e7c365;#ffffff;#cfbcff;#e7c365" dur="6s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    </svg>

  );
};

export default BrandLogo;
