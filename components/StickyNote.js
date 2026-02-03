import styles from './StickyNote.module.css';

export default function StickyNote({ children, color = 'yellow', rotation = 0, className = '' }) {
  const getRotationStyle = () => ({
    transform: `rotate(${rotation}deg)`,
  });

  return (
    <div 
      className={`${styles.note} ${styles[color]} ${className}`} 
      style={getRotationStyle()}
    >
      <div className={styles.pin}></div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}