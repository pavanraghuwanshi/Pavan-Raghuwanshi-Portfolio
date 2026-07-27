'use client';

import React, { useState, useRef, useEffect } from 'react';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

const Terminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    { command: '', output: 'Welcome to PavanOS v1.0.0. Type "help" to get started.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [history, isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const args = trimmedCmd.split(' ');
    const baseCmd = args[0].toLowerCase();

    let output: React.ReactNode = '';

    switch (baseCmd) {
      case 'help':
        output = (
          <div className="flex flex-col">
            <span>Available commands:</span>
            <span className="text-yellow-400">whoami</span> - print current user
            <span className="text-yellow-400">ls</span> - list directory contents
            <span className="text-yellow-400">pwd</span> - print working directory
            <span className="text-yellow-400">date</span> - print current date
            <span className="text-yellow-400">echo</span> - print text
            <span className="text-yellow-400">clear</span> - clear terminal output
          </div>
        );
        break;
      case 'whoami':
        output = 'guest_user';
        break;
      case 'ls':
        output = (
          <div className="flex gap-4">
            <span className="text-green-400">Pavan-Raghuwanshi.pdf</span>
          </div>
        );
        break;
      case 'pwd':
        output = '/home/guest';
        break;
      case 'date':
        output = new Date().toString();
        break;
      case 'echo':
        output = args.slice(1).join(' ');
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'sudo':
        output = <span className="text-red-400">Nice try! You don't have root privileges here.</span>;
        break;
      default:
        output = <span className="text-red-400">Command not found: {baseCmd}. Type "help" for a list of commands.</span>;
    }

    setHistory((prev) => [...prev, { command: trimmedCmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
      setInput('');
    }
  };

  if (!isOpen) {
    return (
      <div 
        className="absolute -bottom-6 -left-6 bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 shadow-xl hidden lg:block animate-bounce cursor-pointer hover:bg-[#222] transition-colors z-20" 
        style={{ animationDuration: '3s' }}
        onClick={() => setIsOpen(true)}
        title="Open Terminal"
      >
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
    );
  }

  return (
    <div 
      className="absolute -bottom-10 -left-12 lg:-left-24 w-72 lg:w-96 h-48 lg:h-56 bg-[#1a1a1a] rounded-xl border border-gray-800 shadow-2xl hidden lg:flex flex-col overflow-hidden transition-transform hover:scale-105 duration-300 z-20 group font-mono text-xs"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
        <div className="flex gap-2">
          <button 
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 focus:outline-none transition-colors"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            title="Close Terminal"
          ></button>
          <button 
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 focus:outline-none transition-colors"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            title="Minimize Terminal"
          ></button>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-gray-400 text-[10px] uppercase font-bold tracking-wider mr-10">
          guest@pavan's:~
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 p-4 overflow-y-auto flex flex-col gap-2 scrollbar-hide text-gray-300 cursor-text"
      >
        {history.map((item, index) => (
          <div key={index} className="flex flex-col">
            {item.command && (
              <div className="flex gap-2">
                <span className="text-green-400">guest@pavan's:~$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className="text-gray-400">{item.output}</div>
          </div>
        ))}
        
        {/* Input Line */}
        <div className="flex gap-2 items-center mt-1">
          <span className="text-green-400">guest@pavan's:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-gray-300"
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
