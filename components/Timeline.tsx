'use client';

import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';

const Timeline: React.FC = () => {
  const [activeId, setActiveId] = useState(EXPERIENCES[0].id);

  const activeExperience = EXPERIENCES.find(exp => exp.id === activeId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-yellow-400">My Timeline</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">A journey through my professional career, highlighting key roles and contributions.</p>
      </div>

      {/* Desktop Timeline Navigation */}
      <div className="hidden lg:flex justify-between items-center relative mb-16 mx-10">
        {/* The horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>
        
        {EXPERIENCES.map((exp) => {
          const isActive = exp.id === activeId;
          return (
            <div key={exp.id} className="relative flex flex-col items-center group cursor-pointer" onClick={() => setActiveId(exp.id)}>
              <div 
                className={`px-6 py-2 rounded-full border mb-8 transition-all duration-300 w-40 text-center
                ${isActive 
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black border-transparent font-bold shadow-lg scale-110' 
                  : 'bg-black border-gray-700 text-gray-400 hover:border-gray-500'}`}
              >
                {exp.company}
              </div>
              
              {/* Dot on line */}
              <div className={`w-4 h-4 rounded-full border-2 z-10 transition-colors duration-300 ${isActive ? 'bg-yellow-400 border-yellow-400' : 'bg-black border-gray-600 group-hover:border-gray-400'}`}></div>

              <div className={`absolute top-24 text-xs font-mono transition-colors duration-300 ${isActive ? 'text-yellow-400' : 'text-gray-600'}`}>
                {exp.period.split('-')[0]}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Timeline Navigation (Simple Scroll) */}
      <div className="lg:hidden flex overflow-x-auto space-x-4 pb-6 mb-8 scrollbar-hide">
        {EXPERIENCES.map((exp) => (
          <button
            key={exp.id}
            onClick={() => setActiveId(exp.id)}
            className={`flex-shrink-0 px-5 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-all ${
              exp.id === activeId 
               ? 'bg-yellow-400 text-black border-yellow-400' 
               : 'bg-transparent text-gray-400 border-gray-700'
            }`}
          >
            {exp.company}
          </button>
        ))}
      </div>

      {/* Experience Details Card */}
      <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden transition-all duration-500 min-h-[400px]">
        {/* Background decorative blob */}
        <div className={`absolute top-0 right-0 w-64 h-64 opacity-5 blur-[80px] rounded-full transition-colors duration-500 ${activeExperience.color}`}></div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
             <div className="flex-shrink-0">
                <h3 className="text-2xl font-bold text-white mb-1">Developer</h3>
                <div className="text-sm text-gray-500 mb-6 font-mono">{activeExperience.period}</div>
                <div className="w-20 h-20 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden border border-white/10">
                   {/* Placeholder logo */}
                   <span className="text-2xl font-bold text-white opacity-50">{activeExperience.company.charAt(0)}</span>
                </div>
             </div>

             <div className="flex-1">
               <div className="flex items-center gap-3 mb-6">
                 <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    {activeExperience.company}
                 </h4>
                 <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/10`}>
                    {activeExperience.role}
                 </span>
               </div>
               
               <div className="space-y-4">
                 {activeExperience.description.map((item, idx) => (
                   <div key={idx} className="flex gap-4 group">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-yellow-400 transition-colors"></div>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                        {item}
                      </p>
                   </div>
                 ))}
               </div>
             </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex justify-end">
            <img src="https://via.placeholder.com/150x40?text=Logo" alt="Company Logo" className="opacity-30 grayscale hover:opacity-50 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;