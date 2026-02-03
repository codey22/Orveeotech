'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import StickyNote from './StickyNote';
import Polaroid from './Polaroid';
import Marquee from './Marquee';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.gridBackground}></div>
      
      <div className={styles.boardContainer}>
        
        {/* Main Title Note */}
        <div className={styles.centerPiece}>
          <h1 className={styles.mainTitle}>
            ORVEEOTECH
            <span className={styles.subtitle}>EST. 2026</span>
          </h1>
          <p className={styles.tagline}>We build business experiences that stick.</p>
        </div>

        {/* Scattered Elements */}
        <StickyNote color="yellow" rotation={-5} className={styles.note1}>
          <h3>IT Solutions</h3>
          <p>Robust infrastructure for modern businesses.</p>
        </StickyNote>

        <StickyNote color="pink" rotation={3} className={styles.note2}>
          <h3>Creative Code</h3>
          <p>Websites that don't look like templates.</p>
        </StickyNote>

        <Polaroid 
          caption="Our Team" 
          rotation={6} 
          className={styles.polaroid1}
        />

        <StickyNote color="blue" rotation={-8} className={styles.note3}>
          <h3>Join Us!</h3>
          <p>Project Simulation Program open now.</p>
        </StickyNote>

        {/* Action Buttons as Taped Notes */}
        <div className={styles.actions}>
          <Link href="/services" className={styles.actionLink}>
            <div className={styles.tape}></div>
            Explore Board ➜
          </Link>
          <Link href="/contact" className={`${styles.actionLink} ${styles.secondary}`}>
            <div className={styles.tape}></div>
            Drop a Note ✎
          </Link>
        </div>

      </div>

      <div className={styles.tapeBottom}>
        <Marquee text="We Provide Web Based IT solutions to make your business grow •" />
      </div>
    </section>
  );
}
