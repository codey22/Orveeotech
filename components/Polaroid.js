import Image from 'next/image';

export default function Polaroid({ src, caption, rotation = 0, className = '' }) {
  return (
    <div
      className={`bg-white p-4 pb-12 shadow-[3px_3px_10px_rgba(0,0,0,0.2)] w-[220px] max-w-[90vw] origin-center transition-transform duration-300 z-[2] relative hover:scale-110 hover:!rotate-0 hover:z-[15] hover:shadow-[8px_8px_20px_rgba(0,0,0,0.3)] ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="w-full aspect-square bg-[#333] overflow-hidden border border-[#eee]">
        {/* Placeholder if no src provided, or use actual image */}
        {src ? (
          <img src={src} alt={caption} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full [background:linear-gradient(45deg,#eee_25%,#ddd_25%,#ddd_50%,#eee_50%,#eee_75%,#ddd_75%,#ddd_100%)] [background-size:20px_20px]" />
        )}
      </div>
      {caption && <p className="mt-4 font-mono text-center font-bold text-[#333]">{caption}</p>}
    </div>
  );
}