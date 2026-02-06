'use client';

import { motion } from 'framer-motion';

export default function Airplane() {
  return (
    <div className="fixed top-[150px] lg:top-[100px] left-0 w-full h-0 z-50 pointer-events-none overflow-visible">
      <motion.div
        className="absolute flex items-center flex-row"
        initial={{ x: '-850px' }} // Minimized start distance to reduce re-appearance delay
        animate={{
          x: ['-850px', 'calc(100vw + 50px)'], // Just enough to clear screen edges
          y: [50, 80, 20, 60, 30],
        }}
        transition={{
          x: {
            duration: 35, // Increased speed (reduced duration from 45s)
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }
        }}
      >
        <div className="flex flex-row items-center">
          {/* 1. The Banner (Trails behind on the left) */}
          <div className="relative w-[400px] md:w-[600px] lg:w-[500px] h-[80px] md:h-[130px] lg:h-[110px] z-[1] origin-right">
            <svg viewBox="0 0 600 100" className="w-full h-full drop-shadow-md overflow-visible">
              <defs>
                <filter id="fabricTexture">
                  <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="2" />
                  <feDiffuseLighting lightingColor="#fff" surfaceScale="2"><feDistantLight azimuth="45" elevation="60" /></feDiffuseLighting>
                  <feComposite operator="in" in2="SourceGraphic" />
                </filter>
              </defs>
              {/* Banner Fabric */}
              <path fill="#fff8e1" stroke="#8d6e63" strokeWidth="1" filter="url(#fabricTexture)">
                <animate attributeName="d" dur="0.8s" repeatCount="indefinite"
                  values="M0,35 Q70,15 140,35 T280,35 T420,35 T560,35 L600,35 L600,75 L560,75 Q490,95 420,75 Q350,55 280,75 T140,75 T0,75 Z; M0,35 Q70,55 140,35 T280,35 T420,35 T560,35 L600,35 L600,75 L560,75 Q490,55 420,75 Q350,95 280,75 T140,75 T0,75 Z; M0,35 Q70,15 140,35 T280,35 T420,35 T560,35 L600,35 L600,75 L560,75 Q490,95 420,75 Q350,55 280,75 T140,75 T0,75 Z"
                />
              </path>
              {/* Grommet (The Hole) on the Right Side */}
              <circle cx="592" cy="55" r="4" fill="#a1887f" stroke="#5d4037" strokeWidth="1" />
              <circle cx="592" cy="55" r="2" fill="#3e2723" />
              {/* Text */}
              <path id="textCurve" fill="none"><animate attributeName="d" dur="0.8s" repeatCount="indefinite" values="M10,60 Q80,40 150,60 T290,60 T430,60 T570,60 L600,60; M10,60 Q80,80 150,60 T290,60 T430,60 T570,60 L600,60; M10,60 Q80,40 150,60 T290,60 T430,60 T570,60 L600,60" /></path>
              <text fill="#b71c1c" fontSize="24" fontWeight="900" fontFamily="var(--font-rye), serif">
                <textPath href="#textCurve" startOffset="10">TAKING YOUR BUSINESS TO NEW HEIGHTS!</textPath>
              </text>
            </svg>
          </div>

          {/* 2. The Rope (Connecting Banner Right to Plane Left) */}
          <div className="relative w-[30px] md:w-[50px] h-[80px] md:h-[130px] lg:h-[110px] z-[2] ml-[-6px] md:ml-[-8px] lg:ml-[-7px] mr-[-20px] md:mr-[-35px]">
            <svg viewBox="0 0 50 100" className="w-full h-full overflow-visible">
              <path d="M0,55 Q25,58 50,55" fill="none" stroke="#5d4037" strokeWidth="2.5" strokeLinecap="round">
                <animate attributeName="d" dur="0.8s" repeatCount="indefinite"
                  values="M0,55 Q25,58 50,55; M0,55 Q25,52 50,55; M0,55 Q25,58 50,55"
                />
              </path>
              {/* Knot on Banner Side - Visible */}
              <circle cx="0" cy="55" r="3" fill="#3e2723" />
              {/* Knot on Plane Side - Hidden behind Tail by Z-Index & Margin */}
              <circle cx="50" cy="55" r="3" fill="#3e2723" />
            </svg>
          </div>

          {/* 3. The Plane (Pulling to the Right) */}
          <div className="relative w-[120px] md:w-[210px] lg:w-[160px] h-[72px] md:h-[120px] lg:h-[95px] z-[10] mt-[-3px] md:mt-[-5px]">
            <svg viewBox="-20 -20 260 140" className="w-full h-full [filter:drop-shadow(5px_10px_5px_rgba(0,0,0,0.3))] overflow-visible">
              <defs>
                <linearGradient id="fuselageGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef5350" /><stop offset="50%" stopColor="#c62828" /><stop offset="100%" stopColor="#8e0000" />
                </linearGradient>
                <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2" /><feOffset dx="2" dy="4" result="offsetblur" />
                  <feComponentTransfer><feFuncA type="linear" slope="0.3" /></feComponentTransfer>
                  <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g transform="translate(0, 0)">
                {/* Propeller and Far Wing */}
                <path d="M115 45 L180 45 L185 48 L180 51 L115 51 Z" fill="#b71c1c" stroke="#8e0000" />
                <g transform="translate(195, 45)">
                  <ellipse cx="0" cy="0" rx="3" ry="48" fill="#a1887f" opacity="0.4"><animate attributeName="rx" values="3;4;3" dur="0.05s" repeatCount="indefinite" /></ellipse>
                  <path d="M0 -7 Q5 0 0 7 L-6 0 Z" fill="#b0bec5" stroke="#78909c" />
                </g>
                {/* Landing Gear */}
                <g transform="translate(35, 60)"><path d="M0 0 L5 8" stroke="#37474f" strokeWidth="2" /><circle cx="5" cy="8" r="4" fill="#212121" /></g>
                <g transform="translate(140, 65)">
                  <path d="M0 0 L-10 15" stroke="#37474f" strokeWidth="3" /><path d="M0 0 L10 15" stroke="#37474f" strokeWidth="3" />
                  <circle cx="-10" cy="15" r="11" fill="#212121" /><circle cx="8" cy="18" r="12" fill="#263238" />
                </g>
                {/* Fuselage */}
                <path d="M40 45 Q60 35 100 35 L170 38 Q185 40 185 50 Q185 60 170 62 L100 65 Q60 65 40 55 Z" fill="url(#fuselageGradient)" stroke="#b71c1c" />
                {/* Wings and Pilot */}
                <path d="M105 52 L170 52 L175 55 L170 58 L105 58 Z" fill="#d32f2f" stroke="#c62828" filter="url(#dropShadow)" />
                <g transform="translate(115, 35)"><circle cx="0" cy="0" r="8" fill="#d7ccc8" /><path d="M-7 -2 Q0 -5 7 -2 L7 5 L-7 5 Z" fill="#4e342e" /><path d="M-8 8 Q0 12 8 8" fill="#8d6e63" /></g>
                {/* Tail Attached Points */}
                <g transform="translate(10, 35)">
                  <path d="M0 10 Q5 0 25 5 L25 25 L5 20 Z" fill="#fafafa" stroke="#bdbdbd" />
                  <path d="M10 10 L20 10 M15 5 L15 15" stroke="black" strokeWidth="3" />
                </g>
                <path d="M170 38 Q185 38 190 45 L190 55 Q185 62 170 62 Z" fill="#424242" stroke="#212121" />
              </g>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}