'use client';

import { useState, useEffect } from 'react';

const colorMap = {
  yellow: '#fef68a',
  pink: '#fecaca',
  blue: '#bfdbfe',
  green: '#bbf7d0',
  white: '#ffffff',
};

export default function StickyNote({ children, color = 'yellow', rotation = 0, className = '', decoration = 'pin' }) {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setDelay(Math.random() * -5);
  }, []);

  const bgColor = colorMap[color] || colorMap.yellow;

  return (
    <div
      className={`w-[280px] max-w-[90vw] min-h-[280px] pt-20 px-10 pb-8 shadow-[5px_5px_15px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center text-center relative transition-all duration-600 ease-[cubic-bezier(0.25,0.8,0.25,1)] font-mono text-[#333] z-[1] origin-top animate-windFlutter hover:scale-[1.02] hover:!rotate-0 hover:z-10 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.2)] hover:![animation-play-state:paused] before:content-[''] before:absolute before:top-0 before:right-0 before:w-[2em] before:h-[2em] before:bg-[linear-gradient(to_left_bottom,transparent_50%,rgba(0,0,0,0.1)_0,rgba(0,0,0,0.2)_100%)] before:no-repeat before:bg-[100%_0] before:bg-[size:2em_2em] before:rounded-bl-[0.2em] before:shadow-[-1px_1px_2px_rgba(0,0,0,0.1)] before:z-[2] ${className}`}
      style={{
        animationDelay: `${delay}s`,
        backgroundColor: bgColor,
        background: `linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.05) 0) no-repeat 100% 0 / 2em 2em, linear-gradient(-135deg, transparent 1.5em, ${bgColor} 0), url("data:image/svg+xml;utf8,<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='0.05'/></svg>")`,
        backgroundBlendMode: 'multiply',
      }}
    >
      {decoration === 'pin' ? (
        <div className="absolute top-[15px] left-1/2 -translate-x-1/2 w-1 h-3 bg-gradient-to-r from-[#bdc3c7] via-[#ecf0f1] to-[#bdc3c7] rounded-b-sm -rotate-15 origin-top shadow-[1px_1px_2px_rgba(0,0,0,0.2)] z-[5] before:content-[''] before:absolute before:top-[-18px] before:left-[-10px] before:w-6 before:h-6 before:bg-[radial-gradient(circle_at_30%_30%,#ffcdd2_5%,#e53935_30%,#b71c1c_60%,#5d1010_100%)] before:rounded-full before:shadow-[3px_5px_8px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.4)] before:z-[6] after:content-[''] after:absolute after:top-[-14px] after:left-[-5px] after:w-2 after:h-[6px] after:rounded-full after:bg-[rgba(255,255,255,0.4)] after:blur-[1px] after:-rotate-45 after:z-[7]"></div>
      ) : (
        <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 -rotate-1 w-[120px] h-[35px] bg-[rgba(255,255,255,0.4)] shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-[rgba(255,255,255,0.2)] z-[5] backdrop-blur-[1px] opacity-80" style={{ maskImage: "url(\"data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect x='5' y='0' width='90%' height='100%' fill='white'/></svg>\")" }}></div>
      )}

      <div className="w-full relative z-[5]">
        {children}
      </div>
    </div>
  );
}
