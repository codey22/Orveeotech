import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>ORVEEOTECH</h2>
            <p>Ideas pinned. Code shipped.</p>
          </div>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactBlock}>
              <h4>Contact Us</h4>
              <p>Founder: <a href="mailto:founder@orveeotech.com">founder@orveeotech.com</a></p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            
            <div className={styles.contactBlock}>
              <h4>Partners</h4>
              <p>Partner 1: <a href="mailto:partner1@orveeotech.com">partner1@orveeotech.com</a></p>
              <p>Partner 2: <a href="mailto:partner2@orveeotech.com">partner2@orveeotech.com</a></p>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} ORVEEOTECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
