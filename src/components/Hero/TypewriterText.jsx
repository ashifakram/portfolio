import React, { useState, useEffect } from 'react';

const FULL_TEXT = "Java Full Stack Developer | Java Backend Developer | Spring Boot | React | REST APIs | Redis | Microservices";



const TypewriterText = ({ startTyping = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!startTyping) return;

    let currentIndex = 0;
    setDisplayedText('');
    setIsComplete(false);

    // Start typing right after preloader finishes
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < FULL_TEXT.length) {
          setDisplayedText(FULL_TEXT.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 35); // Smooth character typing speed

      return () => clearInterval(interval);
    }, 200);

    return () => clearTimeout(startTimeout);
  }, [startTyping]);


  return (
    <h2 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold leading-snug relative min-h-[4rem] sm:min-h-[4.5rem]">
      <span className="google-text-motion">
        {displayedText}
      </span>
      {!isComplete && (
        <span className="inline-block w-2.5 h-6 sm:h-7 bg-[#cfbcff] ml-1.5 animate-pulse rounded-sm shadow-[0_0_12px_#cfbcff] align-middle" />
      )}
    </h2>
  );
};

export default TypewriterText;
