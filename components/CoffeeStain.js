export default function CoffeeStain({ className = '', style = {} }) {
  return (
    <div 
      className={className}
      style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        border: '8px solid rgba(139, 69, 19, 0.15)', // SaddleBrown low opacity
        boxShadow: '0 0 10px rgba(139, 69, 19, 0.1) inset, 0 0 5px rgba(139, 69, 19, 0.1)',
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(1px)',
        transform: 'rotate(25deg) scale(1, 0.95)', // Slight imperfection
        ...style
      }}
    >
      {/* Inner ring for realism */}
      <div style={{
        position: 'absolute',
        top: '-2px', left: '-2px', right: '-2px', bottom: '-2px',
        borderRadius: '50%',
        border: '2px solid rgba(139, 69, 19, 0.2)',
        opacity: 0.5
      }} />
    </div>
  );
}
