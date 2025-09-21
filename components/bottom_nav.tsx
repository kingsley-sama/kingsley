import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Animated3DWrapper from './animated_3d_wrapper';
import { SectionHeading } from './section-heading';

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
                07
              </span>
            </div>
            
            <div className="px-5 flex justify-around flex-col md:flex-row items-center h-[500px] w-full gap-36  md:gap-5 md:h-fit">
        <div className="text-left w-full md:w-auto">
          <div className="mb-6 space-y-2">
            <SectionHeading text={"LET'S"} className="m-0 text-white text-4xl md:text-7xl leading-[0.9]" />
            <SectionHeading text={"COLLABORATE"} className="m-0 text-white text-4xl md:text-7xl leading-[0.9]" />
          </div>
          <ul className="flex flex-row flex-wrap gap-6 mt-4 items-center">
            {links.map((link) => {
              const active = hoveredLink === link.name
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                    className={`group inline-block text-sm md:text-base font-medium tracking-wide transition-colors duration-300 ${
                      active ? 'text-white' : 'text-gray-500 hover:text-gray-200'
                    }`}
                  >
                    <span className="relative px-1">
                      {link.name}
                      <span
                        className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-white/40 via-white to-white/60 transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                          active ? 'scale-x-100' : ''
                        }`}
                      />
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
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