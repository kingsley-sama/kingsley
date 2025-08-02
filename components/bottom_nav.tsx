import React, { useState } from 'react';
import { ArrowBigUp, ArrowUp } from 'lucide-react';
import Animated3DWrapper from './animated_3d_wrapper';

const DownBar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

interface Link {
    name: string;
    href: string;
}

const handleMouseEnter = (linkName: string): void => {
    setHoveredLink(linkName);
};

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const links = [
    { name: 'GitHub', href: 'https://github.com/kingsley-sama' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kingsley-okpo-13825b318' },
    { name: 'X', href: 'https://x.com/TechWithKing' },
    { name: 'Email', href: 'mailto:kngsley2018@gmail.com' },
    { name: 'TheRoom', href: '#' }
  ];

  return (
    <div className="container mx-auto px-4 max-w-6xl mt-20">
      <Animated3DWrapper className="bg-neutral-950 rounded-2xl shadow-2xl overflow-hidden">
        {({ isHovered, mousePosition }) => (
          <div className="pb-8">
            {/* Simple number indicator */}
            <div className="flex justify-end mb-8 pt-8 pr-8">
              <span className={`text-4xl font-bold transition-colors duration-300 ${
                isHovered ? 'text-green-100' : 'text-gray-500'
              }`}>
                04
              </span>
            </div>
            
            <div className="px-5 flex justify-around flex-col md:flex-row items-center h-[500px] w-full gap-36  md:gap-5 md:h-fit">
              <div className="text-left">
          <h1 className="text-5xl font-bold m-0 leading-tight text-white md:text-7xl">
            Let's<br />Collaborate
          </h1>
          <div className="mt-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-gray-500 no-underline mr-4 text-base transition-all duration-300 ease-in-out hover:text-white hover:translate-x-2 relative ${
                  hoveredLink === link.name 
                    ? 'text-white pl-10 text-lg before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-10 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out' 
                    : ''
                }`}
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="w-52 h-52 rounded-full border-2 border-white flex justify-center items-center relative cursor-pointer group transition-all duration-500 ease-in-out hover:bg-white">
          <ArrowUp
            className="text-white text-10xl transition-opacity duration-500 ease-in-out group-hover:opacity-0 font-bold"
            style={{ 
              fontSize: '60px',
              animation: 'rotateArrow 2s ease-in-out infinite'
            }} 
          />
          <span className="text-lg text-gray-900 absolute opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            Hire Me
          </span>
        </div>
      </div>
            
            <footer className="text-white p-5 font-mono">
              <div className="max-w-6xl mx-auto flex flex-col gap-px">
                <div className="text-2xl font-normal font-sans md:text-lg">
                  KINGSLEYOKPO.TECH
                </div>
                <div className="h-1 bg-gray-700 my-1"></div>
                <div className="text-lg text-gray-400 text-right">
                  &copy;kingsleyokpo.tech
                </div>
              </div>
            </footer>
          </div>
        )}
      </Animated3DWrapper>
      
      <style jsx>{`
        @keyframes rotateArrow {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(55deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default DownBar;