'use client';

import { motion } from 'framer-motion';
import styles from './Airplane.module.css';

export default function Airplane() {
  return (
    <div className={styles.skyContainer}>
      <motion.div
        className={styles.airplaneWrapper}
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
        <div className={styles.planeBody}>
          {/* Red Biplane (Fokker Dr.I Style) - Enhanced Realism */}
          {/* Expanded viewBox to prevent clipping of propeller and wheels */}
          <svg viewBox="-20 -20 260 140" className={styles.planeSvg} xmlns="http://www.w3.org/2000/svg">
             <defs>
               {/* Gradients and Filters */}
               <linearGradient id="fuselageGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                 <stop offset="0%" stopColor="#ef5350" /> {/* Lighter Red Top */}
                 <stop offset="50%" stopColor="#c62828" /> {/* Main Red */}
                 <stop offset="100%" stopColor="#8e0000" /> {/* Dark Red Bottom */}
               </linearGradient>
               
               <linearGradient id="woodBlade" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#5d4037" />
                 <stop offset="20%" stopColor="#8d6e63" />
                 <stop offset="50%" stopColor="#5d4037" />
                 <stop offset="80%" stopColor="#8d6e63" />
                 <stop offset="100%" stopColor="#5d4037" />
               </linearGradient>

               <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                 <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                 <feOffset dx="2" dy="4" result="offsetblur"/>
                 <feComponentTransfer>
                   <feFuncA type="linear" slope="0.3"/>
                 </feComponentTransfer>
                 <feMerge> 
                   <feMergeNode/>
                   <feMergeNode in="SourceGraphic"/> 
                 </feMerge>
               </filter>
             </defs>

             {/* Face RIGHT (Natural Direction) */}
             <g transform="translate(0, 0)">
                
                {/* Far Wing (Long, Chamfered, Star at Tip) */}
                <g>
                    <path d="M115 45 L180 45 L185 48 L180 51 L115 51 Z" fill="#b71c1c" stroke="#8e0000" strokeWidth="1" />
                    {/* Star on Far Wing */}
                    <polygon points="175,46 176,47.5 178,47.5 176.5,48.5 177,50 175,49 173,50 173.5,48.5 172,47.5 174,47.5" fill="white" opacity="0.8" />
                </g>
                
                {/* Propeller - Side View (Spinning Blur) */}
                <g transform="translate(195, 45)">
                   {/* Spinning Blur Disc - Side View */}
                   <ellipse cx="0" cy="0" rx="3" ry="48" fill="#a1887f" opacity="0.4">
                      {/* Animate width slightly to simulate vibration/spin */}
                      <animate attributeName="rx" values="3;4;3" dur="0.05s" repeatCount="indefinite" />
                   </ellipse>
                   
                   {/* Blade tips passing by (Side view effect) */}
                   {/* Vertical motion within the disc area */}
                   <rect x="-1" y="-40" width="2" height="20" fill="#3e2723" opacity="0.6">
                        <animate attributeName="y" values="-48;48" dur="0.08s" repeatCount="indefinite" />
                   </rect>
                   <rect x="-1" y="-40" width="2" height="20" fill="#3e2723" opacity="0.6">
                        <animate attributeName="y" values="-48;48" dur="0.08s" begin="0.04s" repeatCount="indefinite" />
                   </rect>

                   {/* Spinner Cone - Side View */}
                   <path d="M0 -7 Q5 0 0 7 L-6 0 Z" fill="#b0bec5" stroke="#78909c" strokeWidth="1" />
                </g>

                {/* Tail Wheel - Completes the landing gear */}
                <g transform="translate(35, 60)">
                    <path d="M0 0 L5 8" stroke="#37474f" strokeWidth="2" />
                    <circle cx="5" cy="8" r="4" fill="#212121" />
                    <circle cx="5" cy="8" r="2" fill="#757575" />
                </g>

                {/* Detailed Landing Gear - Complete Wheels & Struts */}
                {/* Adjusted position to attach properly to fuselage and fit in view */}
                <g transform="translate(140, 65)">
                   {/* Main Struts - Extended to reach fuselage */}
                   <path d="M0 0 L-10 15" stroke="#37474f" strokeWidth="3" strokeLinecap="round" />
                   <path d="M0 0 L10 15" stroke="#37474f" strokeWidth="3" strokeLinecap="round" />
                   {/* Upper connection points to fuselage */}
                   <path d="M-10 15 L-5 -10" stroke="#37474f" strokeWidth="3" strokeLinecap="round" />
                   <path d="M10 15 L5 -10" stroke="#37474f" strokeWidth="3" strokeLinecap="round" />
                   
                   <path d="M-5 5 L5 5" stroke="#37474f" strokeWidth="2" /> {/* Cross brace */}

                   {/* Axle Assembly */}
                   <line x1="-12" y1="15" x2="12" y2="15" stroke="#263238" strokeWidth="4" strokeLinecap="round" />
                   
                   {/* Wheel 1 (Far side) */}
                   <g transform="translate(-10, 15)">
                      <circle cx="0" cy="0" r="11" fill="#212121" /> {/* Tire */}
                      <circle cx="0" cy="0" r="11" fill="none" stroke="#000" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" /> {/* Tread */}
                      <circle cx="0" cy="0" r="6" fill="#757575" stroke="#424242" strokeWidth="1" /> {/* Hub */}
                   </g>

                   {/* Wheel 2 (Near side) */}
                   <g transform="translate(8, 18)">
                      <circle cx="0" cy="0" r="12" fill="#263238" stroke="#102027" strokeWidth="2" /> {/* Tire */}
                      <circle cx="0" cy="0" r="12" fill="none" stroke="#000" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" /> {/* Tread Pattern */}
                      <circle cx="0" cy="0" r="7" fill="#cfd8dc" stroke="#90a4ae" strokeWidth="1" /> {/* Rim */}
                      <circle cx="0" cy="0" r="2" fill="#37474f" /> {/* Axle Cap */}
                      
                      {/* Detailed Spokes */}
                      <g stroke="#78909c" strokeWidth="0.8">
                        <line x1="0" y1="-7" x2="0" y2="7" />
                        <line x1="-7" y1="0" x2="7" y2="0" />
                        <line x1="-5" y1="-5" x2="5" y2="5" />
                        <line x1="5" y1="-5" x2="-5" y2="5" />
                      </g>
                   </g>
                </g>

                {/* Fuselage Body */}
                <path d="M40 45 Q60 35 100 35 L170 38 Q185 40 185 50 Q185 60 170 62 L100 65 Q60 65 40 55 Z" fill="url(#fuselageGradient)" stroke="#b71c1c" strokeWidth="1" />

                {/* Near Wing (Long, Chamfered, Star at Tip) */}
                <g>
                    <path d="M105 52 L170 52 L175 55 L170 58 L105 58 Z" fill="#d32f2f" stroke="#c62828" strokeWidth="1" filter="url(#dropShadow)" />
                    {/* Star on Near Wing */}
                    <polygon points="165,53 166,54.5 168,54.5 166.5,55.5 167,57 165,56 163,57 163.5,55.5 162,54.5 164,54.5" fill="white" />
                </g>
                
                {/* Pilot Details */}
                <g transform="translate(115, 35)">
                   <circle cx="0" cy="0" r="8" fill="#d7ccc8" /> 
                   <path d="M-7 -2 Q0 -5 7 -2 L7 5 L-7 5 Z" fill="#4e342e" /> {/* Helmet Leather */}
                   <rect x="-6" y="-1" width="12" height="4" rx="2" fill="#212121" stroke="#9e9e9e" strokeWidth="0.5" /> {/* Goggles Frame */}
                   <rect x="-5" y="0" width="4" height="2" fill="#81d4fa" opacity="0.8" /> {/* Left Lens */}
                   <rect x="1" y="0" width="4" height="2" fill="#81d4fa" opacity="0.8" /> {/* Right Lens */}
                   <path d="M-8 8 Q0 12 8 8" fill="#8d6e63" /> {/* Scarf */}
                </g>

                {/* Cockpit Rim */}
                <path d="M100 35 Q115 38 130 35" stroke="#3e2723" strokeWidth="2" fill="none" />
                
                {/* Tail */}
                <g transform="translate(10, 35)">
                   <path d="M0 10 Q5 0 25 5 L25 25 L5 20 Z" fill="#fafafa" stroke="#bdbdbd" strokeWidth="1" />
                   <path d="M10 10 L20 10 M15 5 L15 15" stroke="black" strokeWidth="3" />
                </g>

                {/* Engine Cowling Details */}
                <path d="M170 38 Q185 38 190 45 L190 55 Q185 62 170 62 Z" fill="#424242" stroke="#212121" />
                <path d="M175 42 L175 58" stroke="#616161" strokeWidth="1" />
                <path d="M180 42 L180 58" stroke="#616161" strokeWidth="1" />

             </g>
          </svg>
        </div>

        {/* Trailing Banner with Realistic Rope & Motion */}
        <div className={styles.bannerContainer}>
            {/* Realistic Tow Rope - Connects Banner (Left) to Plane (Right) */}
            <svg width="80" height="100" className={styles.ropeSvg} style={{ position: 'absolute', right: '0', top: '0', zIndex: 2, overflow: 'visible' }}>
                {/* Connection at Banner side (Left end) - Tying to Grommet */}
                <g transform="translate(0, 55)">
                    {/* Knot Loop */}
                    <path d="M5 -3 Q8 0 5 3 Q2 0 5 -3" fill="none" stroke="#3e2723" strokeWidth="2" />
                    <path d="M-2 -2 Q3 0 -2 2" fill="none" stroke="#3e2723" strokeWidth="2" />
                    {/* Knot Center */}
                    <circle cx="2" cy="0" r="2.5" fill="#3e2723" />
                </g>
                
                {/* Rope simulating tension and slack (Wind drag) */}
                <path d="M0,55 C20,55 50,60 80,50" fill="none" stroke="#5d4037" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="d" dur="0.8s" repeatCount="indefinite"
                        values="
                          M0,55 C20,55 50,60 80,50; 
                          M0,55 C20,60 50,45 80,50; 
                          M0,55 C20,55 50,60 80,50" 
                        calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                    />
                </path>
                
                {/* Connection knot at plane tail (Right end) */}
                <circle cx="80" cy="50" r="2" fill="#3e2723" />
            </svg>

            <div className={styles.bannerWrapper}>
                <svg width="500" height="100" viewBox="0 0 500 100" className={styles.bannerSvg}>
                    <defs>
                        <filter id="fabricTexture">
                            <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="2" result="noise" />
                            <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2">
                                <feDistantLight azimuth="45" elevation="60" />
                            </feDiffuseLighting>
                            <feComposite operator="in" in2="SourceGraphic" />
                        </filter>
                        <linearGradient id="bannerShadow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
                            <stop offset="50%" stopColor="rgba(0,0,0,0)" />
                            <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
                        </linearGradient>
                    </defs>

                    {/* Banner Fabric with Wave Animation - Shortened to 500px */}
                    <path fill="#fff8e1" stroke="#8d6e63" strokeWidth="1" filter="url(#fabricTexture)">
                        <animate 
                            attributeName="d" 
                            dur="0.8s" 
                            repeatCount="indefinite"
                            values="
                                M0,35 Q70,15 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 Q350,55 280,75 T140,75 T0,75 Z;
                                M0,35 Q70,55 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 Q350,95 280,75 T140,75 T0,75 Z;
                                M0,35 Q70,15 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 Q350,55 280,75 T140,75 T0,75 Z
                            "
                        />
                    </path>

                    {/* Grommet (Ring) for Rope Connection - Reinforced Corner */}
                    <g>
                         <circle cx="492" cy="55" r="4" fill="#a1887f" stroke="#5d4037" strokeWidth="1" />
                         <circle cx="492" cy="55" r="2" fill="none" stroke="#3e2723" strokeWidth="1" />
                    </g>
                    
                    {/* Shadow overlay for depth */}
                    <path fill="url(#bannerShadow)" stroke="none" opacity="0.3">
                         <animate 
                            attributeName="d" 
                            dur="0.8s" 
                            repeatCount="indefinite"
                            values="
                                M0,35 Q70,15 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 Q350,55 280,75 T140,75 T0,75 Z;
                                M0,35 Q70,55 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 Q350,95 280,75 T140,75 T0,75 Z;
                                M0,35 Q70,15 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 Q350,55 280,75 T140,75 T0,75 Z
                            "
                        />
                    </path>

                    {/* Text Curve Path - Shortened */}
                    <path id="textCurve" fill="none" stroke="none">
                         <animate 
                            attributeName="d" 
                            dur="0.8s" 
                            repeatCount="indefinite"
                            values="
                                M10,60 Q80,40 150,60 T290,60 T430,60 L500,60;
                                M10,60 Q80,80 150,60 T290,60 T430,60 L500,60;
                                M10,60 Q80,40 150,60 T290,60 T430,60 L500,60
                            "
                        />
                    </path>

                    {/* Banner Text - Smaller font and spacing to fit */}
                    <text fill="#b71c1c" fontSize="16" fontWeight="900" fontFamily="var(--font-rye), serif" letterSpacing="0.5">
                        <textPath href="#textCurve" startOffset="10" textAnchor="start">
                            TAKING YOUR BUSINESS TO NEW HEIGHTS!
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
      </motion.div>
    </div>
  );
}