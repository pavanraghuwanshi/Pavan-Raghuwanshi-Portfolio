import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 border-y border-gray-900 bg-black overflow-hidden">
      <div className="flex whitespace-nowrap">
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
          animation: marquee 25s linear infinite;
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