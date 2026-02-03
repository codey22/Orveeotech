'use client';

import styles from './Marquee.module.css';

export default function Marquee({ text, className }) {
  return (
    <div className={`${styles.marqueeContainer} ${className || ''}`}>
      <div className={styles.marqueeContent}>
        {/* Repeat text multiple times to ensure seamless loop */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className={styles.marqueeText}>
            {text} • 
          </span>
        ))}
      </div>
    </div>
  );
}