'use client';

export default function Marquee({ text, className }) {
  return (
    <div className={`w-full overflow-hidden whitespace-nowrap relative bg-transparent text-inherit p-0 border-none z-10 transform-none ${className || ''}`}>
      <div className="inline-block animate-marquee">
        {/* Repeat text multiple times to ensure seamless loop */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="inline-block text-[1.5rem] font-normal uppercase mr-8 tracking-[2px] font-retro">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}