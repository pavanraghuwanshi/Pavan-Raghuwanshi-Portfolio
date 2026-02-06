'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you shortly.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
        Let's work <span className="text-gray-600">together.</span>
      </h2>
      <p className="text-gray-400 mb-12 text-lg">
        Creating user experience and visual appealing design interfaces.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input 
          type="text" 
          placeholder="Name"
          required
          value={formState.name}
          onChange={e => setFormState({...formState, name: e.target.value})}
          className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
        />
        <input 
          type="email" 
          placeholder="Email"
          required
          value={formState.email}
          onChange={e => setFormState({...formState, email: e.target.value})}
          className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
        />
        <textarea 
          placeholder="Message"
          rows={4}
          required
          value={formState.message}
          onChange={e => setFormState({...formState, message: e.target.value})}
          className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
        ></textarea>
        
        <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors mt-4">
          Send Message
        </button>
      </form>

      <div className="mt-20 flex justify-center space-x-8 text-gray-500 text-sm">
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
      </div>
      <div className="mt-8 text-gray-700 text-xs">
        &copy; 2024 Sai Varun Reddy G. All Rights Reserved.
      </div>
    </section>
  );
};

export default Contact;