"use client";
import { useEffect, useState, useCallback } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

interface TextScrambleProps {
  text: string;
  speed?: number;
}

export default function TextScramble({ text, speed = 60 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const runScrambleAnimation = useCallback(() => {
    if (isAnimating) return; // Prevent multiple animations running simultaneously
    
    setIsAnimating(true);
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, idx) => {
            if (idx < Math.floor(i)) {
              return text[idx];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      i += 1 / 4;
      if (i >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, speed);

    return () => {
      clearInterval(interval);
      setIsAnimating(false);
    };
  }, [text, speed, isAnimating]);

  useEffect(() => {
    // Run initial animation
    runScrambleAnimation();
  }, [text, speed]);

  const handleHover = () => {
    runScrambleAnimation();
  };

  return (
    <span 
      className="text-xl ml-2 text-white cursor-pointer transition-colors duration-200 hover:text-gray-300"
      onMouseEnter={handleHover}
    >
      {displayText}
    </span>
  );
}
