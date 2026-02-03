import styles from './Polaroid.module.css';
import Image from 'next/image';

export default function Polaroid({ src, caption, rotation = 0, className = '' }) {
  return (
    <div 
      className={`${styles.polaroid} ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className={styles.imageWrapper}>
        {/* Placeholder if no src provided, or use actual image */}
        {src ? (
          <img src={src} alt={caption} className={styles.image} />
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}