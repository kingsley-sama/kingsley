import React, { useState } from 'react';

const NavBar = () => {
  return (
    <div className="bg-neutral-950 p-4 mb-8 mt-8 md:p-8">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getTextStyle = (index) => {
    if (hoveredIndex === null) {
      return 'font-thin text-neutral-50 transition-all duration-300';
    }

    // Current hovered letter
    if (index === hoveredIndex) {
      return 'font-black text-indigo-50 transition-all duration-300';
    }

    // One letter to the right
    if (index === hoveredIndex + 1) {
      return 'font-medium text-indigo-200 transition-all duration-300';
    }

    // Two letters to the right
    if (index === hoveredIndex + 2) {
      return 'font-light text-neutral-50 transition-all duration-300';
    }

    // One letter to the left
    if (index === hoveredIndex - 1) {
      return 'font-medium text-indigo-200 transition-all duration-300';
    }

    // Two letters to the left
    if (index === hoveredIndex - 2) {
      return 'font-light text-neutral-50 transition-all duration-300';
    }

    // Default state for other letters
    return 'font-thin text-neutral-50 transition-all duration-300';
  };

  return (
    <h2 className="text-left text-5xl">
      {"Kingsley Okpo".split("").map((child, idx) => (
        <span
          key={idx}
          className={getTextStyle(idx)}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {child}
        </span>
      ))}
    </h2>
  );
};

export default NavBar;