import React from 'react';
import Animated3DWrapper from './animated_3d_wrapper';

export default function AboutMeComponent() {
  return (
    <div className="container mx-auto px-4 max-w-6xl mt-6">
      <Animated3DWrapper className="bg-neutral-950 rounded-md shadow-xl overflow-hidden">
        {({ isHovered }) => (
          <div id='about-me' className="p-4 md:p-6 lg:p-8">
            <div className="max-w-full w-full">
            <div className="flex justify-end mb-8">
              <span className={`text-4xl font-bold transition-colors duration-300 ${
                isHovered ? 'text-green-100' : 'text-gray-500'
              }`}>
                02
              </span>
            </div>
            <div className="grid grid-cols-12 gap-8 mb-16">
              <div className="col-span-12 md:col-span-5">
                <h1 className="text-4xl md:text-5xl lg:text-8xl font-semibold leading-none tracking-tight text-white">
                  A LITTLE<br />
                  ABOUT ME
                </h1>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="w-full h-64 md:h-80 bg-black rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-700/20 to-gray-400/30"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12 md:col-span-5">
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-light">
                  <span className="block md:hidden">
                    Experienced Software engineer with 7+ years developing scalable applications and microservices. 
                    Skilled in Python, JavaScript, and AWS with a focus on user-centric solutions.
                  </span>
                  <span className="hidden md:block">
                    Experienced Software engineer with 7+ years of developing scalable web applications, microservices, 
                    integrating AI, and managing development teams across Ed-tech, E-commerce, AI, and human resources. 
                    Skilled in Python, JavaScript, and cloud platforms like AWS. Proven track record of improving system 
                    performance and driving innovation in Agile teams. Interest in building user-centric solutions that solve complex problems.
                  </span>
                </p>
              </div>
              <div className="col-span-12 md:col-span-7 flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="w-48 h-48 md:w-80 md:h-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg transform rotate-3">
                  <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Animated3DWrapper>
    </div>
  );
}