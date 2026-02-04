'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import StickyNote from './StickyNote';
import Polaroid from './Polaroid';
import Marquee from './Marquee';
import Doodle from './Doodle';
import CoffeeStain from './CoffeeStain';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.gridBackground}></div>
      <CoffeeStain style={{ top: '10%', left: '15%', opacity: 0.6 }} />
      <CoffeeStain style={{ bottom: '15%', right: '5%', width: '120px', height: '120px', opacity: 0.4 }} />
      
      <div className={styles.boardContainer}>
        
        {/* Main Title Note */}
        <div className={styles.centerPiece}>
          <div className={styles.pin}></div>
          <h1 className={styles.mainTitle}>
            ORVEEOTECH
            <span className={styles.subtitle}>EST. 2026</span>
          </h1>
          <Doodle type="underline" color="#d32f2f" style={{ position: 'absolute', bottom: '25%', left: '10%', width: '80%', opacity: 0.7 }} />
          <p className={styles.tagline}>We build business experiences that stick.</p>
        </div>

        {/* Scattered Elements */}
        <StickyNote color="yellow" rotation={-5} className={styles.note1}>
          <h3>IT Solutions</h3>
          <p>Robust infrastructure for modern businesses.</p>
          <Doodle type="star" color="#f59e0b" style={{ position: 'absolute', top: '-10px', right: '-10px', width: '40px' }} />
        </StickyNote>

        <StickyNote color="pink" rotation={3} className={styles.note2}>
          <h3>Creative Code</h3>
          <p>Websites that don't look like templates.</p>
        </StickyNote>

        <StickyNote color="green" rotation={6} className={styles.polaroid1}>
          <h3>Global Reach</h3>
          <p>Connecting businesses across borders.</p>
        </StickyNote>

        <StickyNote color="blue" rotation={-8} className={styles.note3}>
          <Doodle type="circle" color="#dc2626" style={{ position: 'absolute', top: '10px', left: '10px', width: '90%', height: '80%', opacity: 0.1, zIndex: -1 }} />
          <h3>Join Us!</h3>
          <p>Project Simulation Program open now.</p>
          <Doodle type="arrow" color="#1e3a8a" style={{ position: 'absolute', bottom: '-30px', left: '-40px', width: '60px', transform: 'rotate(45deg)' }} />
        </StickyNote>

        {/* Action Buttons as Taped Notes */}
        <div className={styles.actions}>
          <Link href="/services" className={styles.actionLink}>
            <div className={styles.pin}></div>
            Explore Board ➜
          </Link>
          <Link href="/contact" className={`${styles.actionLink} ${styles.secondary}`}>
            <div className={styles.pin}></div>
            Drop a Note ✎
          </Link>
        </div>

      </div>

      <div className={styles.tapeBottom}>
        <Marquee text="We Provide Web Based IT solutions to make your business grow • • " />
      </div>
    </section>
  );
}
