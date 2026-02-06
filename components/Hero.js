'use client';

import { useRef } from 'react';
import Link from 'next/link';
import StickyNote from './StickyNote';
import Polaroid from './Polaroid';
import Marquee from './Marquee';
import Doodle from './Doodle';
import CoffeeStain from './CoffeeStain';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex justify-center items-center px-16 max-md:px-4 max-md:py-32 max-md:h-auto max-md:min-h-0 max-md:items-start bg-transparent">
      {/* Background Elements */}
      <div className="hidden"></div>
      <CoffeeStain style={{ top: '10%', left: '15%', opacity: 0.6 }} />
      <CoffeeStain style={{ bottom: '15%', right: '5%', width: '120px', height: '120px', opacity: 0.4 }} />

      <div className="relative w-full max-w-[1400px] h-[85vh] flex justify-start items-center z-10 max-md:h-auto max-md:flex-col max-md:gap-12 max-md:pb-24 max-md:justify-center">

        {/* Main Title Note */}
        <div className="relative z-20 bg-white p-12 md:p-16 border-4 border-black shadow-[15px_15px_0_black] -rotate-2 text-center max-w-[700px] max-md:p-6 max-md:w-full max-md:rotate-0 max-md:mb-8 md:ml-12">
          <div className="absolute top-0 left-1/2 w-1 h-3 bg-gradient-to-r from-[#bdc3c7] via-[#ecf0f1] to-[#bdc3c7] rounded-b-sm -translate-x-1/2 -rotate-15 origin-top shadow-[1px_1px_2px_rgba(0,0,0,0.2)] z-10 before:content-[''] before:absolute before:top-[-18px] before:left-[-10px] before:w-6 before:h-6 before:bg-[radial-gradient(circle_at_30%_30%,#ffcdd2_5%,#e53935_30%,#b71c1c_60%,#5d1010_100%)] before:rounded-full before:shadow-[3px_5px_8px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.4)] before:z-[11] after:content-[''] after:absolute after:top-[-14px] after:left-[-5px] after:w-2 after:h-[6px] after:rounded-full after:bg-[rgba(255,255,255,0.4)] after:blur-[1px] after:-rotate-45 after:z-[12]"></div>
          <h1 className="text-[4.5rem] font-normal m-0 text-black leading-[0.9] tracking-0 font-retro max-md:text-[2.5rem]">
            ORVEEOTECH
            <span className="block text-base font-mono mt-2 tracking-[2px] bg-[#ffeb3b] text-black px-2 py-0.5 w-fit mx-auto font-bold">IDEAS → IMPACT</span>
          </h1>
          <Doodle type="underline" color="#d32f2f" style={{ position: 'absolute', bottom: '15%', left: '10%', width: '80%', opacity: 0.7 }} />
          <p className="font-mono text-[1.5rem] mt-6 text-[#333] max-md:text-[1.2rem]">We build business experiences that stick.</p>
        </div>

        {/* Scattered Elements - Adjusted for Desktop Spread */}
        <StickyNote color="yellow" rotation={-2} className="absolute top-[38%] left-[55%] z-[5] lg:scale-90 max-md:relative max-md:top-auto max-md:left-auto max-md:scale-95 max-md:rotate-0 max-md:my-4">
          <h3>IT Solutions</h3>
          <p>Robust infrastructure for modern businesses.</p>
          <Doodle type="star" color="#f59e0b" style={{ position: 'absolute', top: '-10px', right: '-10px', width: '40px' }} />
        </StickyNote>

        <StickyNote color="pink" rotation={3} className="absolute top-[20%] right-[5%] z-[5] lg:scale-90 max-md:relative max-md:bottom-auto max-md:left-auto max-md:scale-95 max-md:rotate-0 max-md:my-4">
          <h3>Creative Code</h3>
          <p>Websites that don't look like templates.</p>
        </StickyNote>

        <StickyNote color="green" rotation={6} className="absolute top-[40%] right-[2%] left-auto z-[5] lg:scale-90 max-md:relative max-md:top-auto max-md:right-auto max-md:scale-95 max-md:rotate-0 max-md:my-4">
          <h3>Global Reach</h3>
          <p>Connecting businesses across borders.</p>
        </StickyNote>

        <StickyNote color="blue" rotation={-8} className="absolute bottom-[10%] right-[15%] bottom-auto left-auto z-10 w-[280px] lg:scale-90 max-md:relative max-md:top-auto max-md:right-auto max-md:scale-95 max-md:rotate-0 max-md:my-4">
          <Doodle type="circle" color="#dc2626" style={{ position: 'absolute', top: '10px', left: '10px', width: '90%', height: '80%', opacity: 0.1, zIndex: -1 }} />
          <h3>Join Us!</h3>
          <p>Project Simulation Program open now.</p>
          <Doodle type="arrow" color="#1e3a8a" style={{ position: 'absolute', bottom: '-30px', left: '-40px', width: '60px', transform: 'rotate(45deg)' }} />
        </StickyNote>

        {/* Action Buttons */}
        <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 flex gap-8 z-30 max-md:relative max-md:bottom-auto max-md:left-auto max-md:translate-x-0 max-md:flex-col max-md:w-full max-md:items-center max-md:mt-8 max-md:gap-4">
          <Link href="/services" className="relative inline-block px-8 py-4 bg-white border-3 border-black font-mono font-bold no-underline text-black text-[1.2rem] shadow-[5px_5px_0_black] transition-all duration-200 -rotate-1 hover:rotate-0 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_black] max-md:w-full max-md:max-w-[300px] max-md:text-center">
            <div className="absolute top-0 left-1/2 w-1 h-3 bg-gradient-to-r from-[#bdc3c7] via-[#ecf0f1] to-[#bdc3c7] rounded-b-sm -translate-x-1/2 -rotate-15 origin-top shadow-[1px_1px_2px_rgba(0,0,0,0.2)] z-10 before:content-[''] before:absolute before:top-[-18px] before:left-[-10px] before:w-6 before:h-6 before:bg-[radial-gradient(circle_at_30%_30%,#ffcdd2_5%,#e53935_30%,#b71c1c_60%,#5d1010_100%)] before:rounded-full before:shadow-[3px_5px_8px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.4)] before:z-[11] after:content-[''] after:absolute after:top-[-14px] after:left-[-5px] after:w-2 after:h-[6px] after:rounded-full after:bg-[rgba(255,255,255,0.4)] after:blur-[1px] after:-rotate-45 after:z-[12]"></div>
            Explore Board ➜
          </Link>
          <Link href="/contact" className="relative inline-block px-8 py-4 bg-[#ff4757] text-white border-3 border-black font-mono font-bold no-underline text-[1.2rem] shadow-[5px_5px_0_black] transition-all duration-200 rotate-2 hover:rotate-0 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_black] max-md:w-full max-md:max-w-[300px] max-md:text-center">
            <div className="absolute top-0 left-1/2 w-1 h-3 bg-gradient-to-r from-[#bdc3c7] via-[#ecf0f1] to-[#bdc3c7] rounded-b-sm -translate-x-1/2 -rotate-15 origin-top shadow-[1px_1px_2px_rgba(0,0,0,0.2)] z-10 before:content-[''] before:absolute before:top-[-18px] before:left-[-10px] before:w-6 before:h-6 before:bg-[radial-gradient(circle_at_30%_30%,#ffcdd2_5%,#e53935_30%,#b71c1c_60%,#5d1010_100%)] before:rounded-full before:shadow-[3px_5px_8px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.4)] before:z-[11] after:content-[''] after:absolute after:top-[-14px] after:left-[-5px] after:w-2 after:h-[6px] after:rounded-full after:bg-[rgba(255,255,255,0.4)] after:blur-[1px] after:-rotate-45 after:z-[12]"></div>
            Drop a Note ✎
          </Link>
        </div>

      </div>

      <div className="absolute bottom-0 left-[-1%] w-[102%] bg-[#1a1a1a] border-y-4 border-[#eccc68] py-[0.8rem] shadow-[0_5px_15px_rgba(0,0,0,0.3)] -rotate-2 z-[100] text-[#eccc68] max-md:bottom-8 max-md:-rotate-1">
        <Marquee text="We Provide Web & App Based IT solutions to make your business grow • • We Also Provide Real-Time Cilent Project Simulation Training For Aspiring Developers • • " />
      </div>
    </section>
  );
}
