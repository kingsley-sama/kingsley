import React from 'react';

export default function AboutMeComponent() {
  return (
    <div id='about-me' className="bg-neutral-950 min-h-screen p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-8">
          <span className="text-4xl text-gray-300 font-light">02</span>
        </div>
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-5">
            <h1 className="text-5xl md:text-8xl font-semibold leading-none tracking-tight">
              A LITTLE<br />
              ABOUT ME
            </h1>
          </div>
          <div className="col-span-7">
            <div className="w-full h-80 bg-black rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black relative">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-700/20 to-gray-400/30"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 items-start">
          <div className="col-span-5">
            <p className="text-xl text-gray-100 leading-relaxed font-light">
              Experienced Software engineer with 7+ years of developing scalable web applications, microservices, 
              integrating AI, and managing development teams across Ed-tech, E-commerce, AI, and human resources. 
              Skilled in Python, JavaScript, and cloud platforms like AWS. Proven track record of improving system 
              performance and driving innovation in Agile teams. Interest in building user-centric solutions t
              hat solve complex problems.
            </p>
          </div>
          <div className="col-span-7 flex justify-end">
            <div className="w-80 h-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg transform rotate-3">
              <div className="w-full h-full bg-gradient-to-br from-gray-300">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}