import React from 'react';
import Navbar from '../components/Navbar';
import AIChatBot from '../components/AIChatBot';

export const metadata = {
  title: 'Pavan Raghuwanshi | Full Stack Developer',
  description: 'Portfolio of Pavan Raghuwanshi - Full Stack Developer with 2+ years of experience specializing in Node.js, Express.js, MongoDB, Redis, and React.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            font-family: 'Inter', sans-serif;
            background-color: #050505;
            color: #e5e5e5;
          }
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
          .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
        `}} />
      </head>
      <body className="antialiased selection:bg-yellow-400 selection:text-black">
        <Navbar />
        {children}
        <AIChatBot />
        
        {/* Background Noise Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] mix-blend-overlay" style={{backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")'}}></div>
      </body>
    </html>
  );
}