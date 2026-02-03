'use client';

import { useState, useEffect } from 'react';
import styles from './StickyNote.module.css';

export default function StickyNote({ children, color = 'yellow', rotation = 0, className = '', decoration = 'tape' }) {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setDelay(Math.random() * -5);
  }, []);

  // Apply initial rotation via style, but animation will override/add to it
  // Actually, if we use animation, the 'transform' in style might conflict or be overwritten.
  // The CSS animation uses keyframes which set specific rotation. 
  // To allow custom initial rotation + animation, we can wrap it or use a delay/offset.
  // Or simply let the animation handle the "wind" movement around a center point.
  // For simplicity and to meet the "wind" requirement, we'll let the animation control the rotation range.
  
  return (
    <div 
      className={`${styles.note} ${styles[color]} ${className}`} 
      style={{ 
        animationDelay: `${delay}s`, // Randomize animation start
      }}
    >
      {decoration === 'pin' ? (
        <div className={styles.pin}></div>
      ) : (
        <div className={styles.tape}></div>
      )}
      
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
