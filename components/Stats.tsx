import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="relative z-20 -mt-10 px-6 max-w-7xl mx-auto mb-20">
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 lg:p-12 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
        {STATS.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center p-4">
            <h4 className="text-4xl lg:text-5xl font-bold text-white mb-2 relative">
              {stat.value}
              <span className="absolute -top-1 -right-4 w-2 h-2 bg-yellow-400 rounded-full"></span>
            </h4>
            <p className="text-gray-300 font-medium">{stat.label}</p>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;