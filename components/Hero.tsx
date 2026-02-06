import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[90vh]">
      {/* Text Content */}
      <div className="flex-1 max-w-2xl text-center lg:text-left z-10 order-2 lg:order-1 mt-12 lg:mt-0">
        <h3 className="text-yellow-400 font-medium text-lg mb-4 tracking-wide">HELLO, WORLD.</h3>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Pavan Raghuwanshi</span>
        </h1>
        <h2 className="text-2xl lg:text-3xl text-gray-400 mb-8 font-light">
          a <strong className="text-white font-semibold">software developer</strong> from Nagpur
        </h2>
        
        <div className="text-lg text-gray-400 mb-10 flex flex-col lg:items-start items-center gap-1">
          <p>trying to cause a positive impact through technology.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            I develop tools for <span className="text-green-500 font-mono border-b border-green-500/30">dashboards<span className="animate-blink">|</span></span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#contact" className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transform hover:-translate-y-1">
            Hire Me
          </a>
          <a href="#" className="flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors group">
            <span className="border-b border-purple-400 group-hover:border-purple-300 pb-0.5">Download Resume</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>

      {/* Image/Visual */}
      <div className="flex-1 relative flex justify-center lg:justify-end order-1 lg:order-2">
        <div className="relative w-72 h-72 lg:w-[500px] lg:h-[500px]">
           {/* Abstract Background Shapes */}
           <div className="absolute top-0 right-0 w-full h-full bg-yellow-400/5 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-purple-500/10 rounded-full blur-3xl"></div>
           
           {/* Profile Image with Grayscale Filter per reference */}
           <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-[#111] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-out group">
              <img 
                src="./image.png" 
                alt="Profile" 
                className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
           </div>
           
           {/* Decorative floating elements */}
           <div className="absolute -bottom-6 -left-6 bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 shadow-xl hidden lg:block animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                 </div>
                 <div>
                    <div className="text-xs text-gray-400">Coding</div>
                    <div className="text-sm font-bold text-white">Clean & Modern</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;