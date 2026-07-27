import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-y border-gray-900 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 text-center lg:text-left">Tech Skills</h2>
        <p className="text-gray-500 text-center lg:text-left">Technologies and tools I work with.</p>
      </div>
      <div className="flex whitespace-nowrap relative">
         {/* Fade effect on the edges */}
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
         
         <div className="flex animate-marquee">
            {[...SKILLS, ...SKILLS].map((skill, index) => (
              <div key={index} className="mx-8 text-2xl lg:text-4xl font-bold text-gray-800 uppercase hover:text-white transition-colors cursor-default select-none">
                {skill}
              </div>
            ))}
         </div>
         <div className="flex animate-marquee" aria-hidden="true">
            {[...SKILLS, ...SKILLS].map((skill, index) => (
              <div key={index} className="mx-8 text-2xl lg:text-4xl font-bold text-gray-800 uppercase hover:text-white transition-colors cursor-default select-none">
                {skill}
              </div>
            ))}
         </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;