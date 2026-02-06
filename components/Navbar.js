'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-[1200px] h-auto flex justify-center pointer-events-none">
      <div className="flex justify-between items-center w-full bg-white px-8 py-4 border-3 border-black rounded-[50px] shadow-[5px_5px_0_rgba(0,0,0,0.2)] pointer-events-auto relative font-retro before:content-[''] before:absolute before:top-1/2 before:left-[15px] before:w-[18px] before:h-[18px] before:bg-[#2a2a2a] before:border-2 before:border-[#555] before:rounded-full before:-translate-y-1/2 before:z-[2] before:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.8)]">
        {/* Hanging Tag */}
        <div className="absolute top-1/2 left-[24px] w-0 h-0 z-[3] overflow-visible">
          <div className="absolute top-[-2px] left-[-2px] w-1 h-[90px] bg-[#8b4513] [background-image:repeating-linear-gradient(45deg,rgba(0,0,0,0)_0px,rgba(0,0,0,0)_4px,rgba(0,0,0,0.3)_4px,rgba(0,0,0,0.3)_8px)] shadow-[2px_2px_3px_rgba(0,0,0,0.5)] animate-swingRope origin-top rounded-[2px] before:content-[''] before:absolute before:top-[-8px] before:left-1/2 before:-translate-x-1/2 before:w-[14px] before:h-[14px] before:bg-[#5d4037] before:rounded-full before:z-[4] before:shadow-[1px_1px_3px_rgba(0,0,0,0.8)] before:border before:border-[#3e2723] max-md:h-[65px]">
            <div className="absolute top-full left-1/2 -translate-x-1/2 -rotate-5 w-[140px] px-[5px] py-[15px] bg-[#f4e4bc] border-2 border-[#5d4037] rounded-[5px] shadow-[3px_3px_5px_rgba(0,0,0,0.3)] text-center flex flex-col items-center justify-center animate-swingTag origin-top mt-[-10px] before:content-[''] before:absolute before:top-[-4px] before:left-1/2 before:-translate-x-1/2 before:w-[18px] before:h-[14px] before:bg-[#5d4037] before:rounded-[8px] before:border-2 before:border-[#3e2723] before:shadow-[0_2px_3px_rgba(0,0,0,0.5)] before:z-10 before:[background-image:repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(0,0,0,0.2)_4px,rgba(0,0,0,0.2)_6px)] after:content-[''] after:absolute after:top-[6px] after:left-1/2 after:-translate-x-1/2 after:w-[10px] after:h-[10px] after:bg-[#2a2a2a] after:border-2 after:border-[#888] after:rounded-full after:shadow-[0_1px_0_rgba(255,255,255,0.3)] max-md:w-[100px] max-md:px-[2px] max-md:py-[10px] max-md:top-[60px]">
              <span className="font-retro text-[0.9rem] font-bold text-[#3e2723] leading-[1.1] uppercase max-md:text-[0.7rem]">Timeless Tech</span>
              <span className="font-mono text-[0.7rem] text-[#5d4037] mt-[2px] max-md:text-[0.6rem]">Solutions</span>
              {/* Male Aviator Goggles - Red Frame, Sitting on top left */}
              <div className="absolute top-[-15px] left-[-20px] -rotate-10 w-[80px] h-[35px] z-[5] [filter:drop-shadow(2px_3px_2px_rgba(0,0,0,0.4))] max-md:w-[60px] max-md:h-[24px] max-md:top-[-12px]">
                <svg className="w-full h-full" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
                  {/* Strap (behind) */}
                  <path d="M5 20 Q50 10 95 20" stroke="#3e2723" strokeWidth="4" fill="none" />

                  {/* Left Lens Frame (Red) */}
                  <circle cx="30" cy="20" r="14" fill="rgba(30,30,30,0.7)" stroke="#b71c1c" strokeWidth="3" />
                  <path d="M25 15 L32 22" stroke="white" strokeWidth="2" opacity="0.3" />

                  {/* Bridge */}
                  <path d="M44 20 L56 20" stroke="#5d4037" strokeWidth="3" />

                  {/* Right Lens Frame (Red) */}
                  <circle cx="70" cy="20" r="14" fill="rgba(30,30,30,0.7)" stroke="#b71c1c" strokeWidth="3" />
                  <path d="M65 15 L72 22" stroke="white" strokeWidth="2" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <Link href="/" className="font-retro text-[1.8rem] text-text no-underline ml-8 text-shadow-[2px_2px_0px_rgba(0,0,0,0.1)] tracking-[1px] max-md:text-[1.4rem]">
          ORVEEOTECH
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`no-underline text-text font-semibold text-[1.1rem] relative py-2 font-retro tracking-[0.5px] ${isActive ? 'text-primary' : ''}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-[2px]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden bg-none border-none cursor-pointer p-0 w-[30px] h-5 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-full h-[3px] bg-black absolute top-1/2 -translate-y-1/2 transition-all duration-300 before:content-[''] before:w-full before:h-[3px] before:bg-black before:absolute before:left-0 before:transition-all before:duration-300 after:content-[''] after:w-full after:h-[3px] after:bg-black after:absolute after:left-0 after:transition-all after:duration-300 ${isOpen ? 'bg-transparent before:rotate-45 before:top-0 after:-rotate-45 after:top-0' : 'before:top-[-8px] after:top-[8px]'}`} />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white mt-4 p-4 border-3 border-black rounded-[20px] shadow-[5px_5px_0_rgba(0,0,0,0.2)] flex flex-col gap-4 z-[999]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="no-underline text-text font-semibold text-[1.2rem] p-2 text-center border-b border-dashed border-[#ccc] font-retro last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
