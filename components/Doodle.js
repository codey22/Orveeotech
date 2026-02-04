export default function Doodle({ type = 'scribble', color = '#000000', className = '', style = {}, strokeWidth }) {
  const doodles = {
    arrow: (
      <svg viewBox="0 0 100 50" fill="none" stroke={color} strokeWidth={strokeWidth || "3"} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 25 C 30 10, 70 10, 90 25" />
        <path d="M90 25 L 80 15" />
        <path d="M90 25 L 80 35" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 50 50" fill="none" stroke={color} strokeWidth={strokeWidth || "2"} strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 5 L 31 18 L 45 18 L 34 26 L 38 40 L 25 32 L 12 40 L 16 26 L 5 18 L 19 18 Z" />
      </svg>
    ),
    scribble: (
      <svg viewBox="0 0 100 50" fill="none" stroke={color} strokeWidth={strokeWidth || "2"} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 25 Q 15 5, 25 25 T 45 25 T 65 25 T 85 25" />
      </svg>
    ),
    underline: (
      <svg viewBox="0 0 200 20" fill="none" stroke={color} strokeWidth={strokeWidth || "3"} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 10 Q 50 15, 100 5 T 195 10" />
      </svg>
    ),
    circle: (
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth={strokeWidth || "3"} strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 10 C 20 10, 10 40, 10 50 C 10 80, 40 90, 50 90 C 80 90, 90 60, 90 50 C 90 20, 60 10, 55 12" />
      </svg>
    )
  };

  return (
    <div className={className} style={{ width: '100px', height: 'auto', display: 'inline-block', ...style }}>
      {doodles[type] || doodles.scribble}
    </div>
  );
}
