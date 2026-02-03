'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        {/* Hanging Tag */}
        <div className={styles.hangingTagContainer}>
          <div className={styles.rope} />
          <div className={styles.tag}>
            <span className={styles.tagText}>Timeless Tech</span>
            <span className={styles.tagSub}>Solutions</span>
            {/* Male Aviator Goggles - Red Frame, Sitting on top left */}
            <div className={styles.gogglesContainer}>
                <svg className={styles.goggles} viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
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

        <Link href="/" className={styles.logo}>
          ORVEEOTECH
        </Link>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className={styles.underline}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={styles.mobileLink}
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
