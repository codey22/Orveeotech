'use client';

import { motion } from 'framer-motion';
import styles from './Airplane.module.css';

export default function Airplane() {
  return (
    <div className={styles.skyContainer}>
      <motion.div
        className={styles.airplaneWrapper}
        animate={{
          x: ['120vw', '-100vw'], // Fly Right to Left
          y: [50, 80, 20, 60, 30],
        }}
        transition={{
          x: {
            duration: 35, // Slower flight speed
            repeat: Infinity,
            ease: "linear",
            delay: 1,
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

             {/* Scale -1,1 to face LEFT (flight direction) */}
             <g transform="translate(200, 0) scale(-1, 1)">
                
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

                {/* Wings & Struts */}
                {/* Lower Wing */}
                <path d="M120 55 L170 55 Q175 55 175 60 L120 60 Z" fill="#d32f2f" stroke="#b71c1c" strokeWidth="1" filter="url(#dropShadow)" />
                
                {/* Cabane Struts (Fuselage to Upper Wing) */}
                <path d="M140 35 L135 25" stroke="#37474f" strokeWidth="2" />
                <path d="M160 38 L165 25" stroke="#37474f" strokeWidth="2" />
                
                {/* Interplane Struts (Wing to Wing) */}
                <path d="M130 55 L125 25" stroke="#37474f" strokeWidth="2" />
                <path d="M165 55 L170 25" stroke="#37474f" strokeWidth="2" />

                {/* Fuselage Body */}
                <path d="M40 45 Q60 35 100 35 L170 38 Q185 40 185 50 Q185 60 170 62 L100 65 Q60 65 40 55 Z" fill="url(#fuselageGradient)" stroke="#b71c1c" strokeWidth="1" />
                
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

                {/* Upper Wing */}
                <path d="M110 25 L180 25 Q185 25 185 20 L110 20 Z" fill="#f44336" stroke="#c62828" strokeWidth="1" filter="url(#dropShadow)" />
                
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
            {/* Realistic Tow Rope - Starts at 0 (Tail position) and goes to Banner */}
            <svg width="80" height="100" className={styles.ropeSvg} style={{ position: 'absolute', left: '0', top: '0', zIndex: 0, overflow: 'visible' }}>
                {/* Connection knot at plane tail (Start of rope) */}
                <circle cx="0" cy="40" r="3" fill="#3e2723" />
                
                {/* Rope simulating tension and slack (Wind drag) */}
                <path d="M0,40 C20,40 50,55 80,50" fill="none" stroke="#5d4037" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="d" dur="1.5s" repeatCount="indefinite"
                        values="
                          M0,40 C20,40 50,55 80,50; 
                          M0,40 C20,45 50,35 80,50; 
                          M0,40 C20,40 50,55 80,50" 
                        calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                    />
                </path>
                
                {/* Connection at Banner side */}
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
                            dur="2s" 
                            repeatCount="indefinite"
                            values="
                                M0,35 Q70,15 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 T280,75 T140,75 T0,75 Z;
                                M0,35 Q70,55 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 T280,75 T140,75 T0,75 Z;
                                M0,35 Q70,15 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 T280,75 T140,75 T0,75 Z
                            "
                        />
                    </path>
                    
                    {/* Shadow overlay for depth */}
                    <path fill="url(#bannerShadow)" stroke="none" opacity="0.3">
                         <animate 
                            attributeName="d" 
                            dur="2s" 
                            repeatCount="indefinite"
                            values="
                                M0,35 Q70,15 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 T280,75 T140,75 T0,75 Z;
                                M0,35 Q70,55 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 T280,75 T140,75 T0,75 Z;
                                M0,35 Q70,15 140,35 T280,35 T420,35 L500,35 L500,75 L420,75 T280,75 T140,75 T0,75 Z
                            "
                        />
                    </path>

                    {/* Text Curve Path - Shortened */}
                    <path id="textCurve" fill="none" stroke="none">
                         <animate 
                            attributeName="d" 
                            dur="2s" 
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