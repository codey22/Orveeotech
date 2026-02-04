import styles from './Footer.module.css';
import Doodle from './Doodle';
import CoffeeStain from './CoffeeStain';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <CoffeeStain style={{ bottom: '10px', right: '10px', width: '150px', height: '150px', opacity: 0.1, filter: 'invert(1)' }} />
      
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <h2 className={styles.logo}>ORVEEOTECH</h2>
            </div>
            <p className={styles.tagline}>
              Ideas pinned. <br />
              Code shipped.
            </p>
          </div>
          
          <div className={styles.verticalDivider}></div>

          <div className={styles.contactInfo}>
            <div className={styles.contactBlock}>
              <div className={styles.stampBox}>
                <h4>Get in Touch</h4>
                <p>Email: <a href="mailto:contact@orveeotech.com">contact@orveeotech.com</a></p>
                
                <div style={{ marginTop: '1.5rem', position: 'relative' }}>
                  <p style={{ marginBottom: '0.5rem', opacity: 0.9, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Call Us:</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>
                      <a href="tel:7890006416" className={styles.phoneLink}>+91 78900 06416</a>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      <a href="tel:8961779987" className={styles.phoneLink}>+91 89617 79987</a>
                    </li>
                    <li>
                      <a href="tel:7278036480" className={styles.phoneLink}>+91 72780 36480</a>
                    </li>
                  </ul>
                  <Doodle type="arrow" color="#eccc68" style={{ position: 'absolute', right: '-50px', top: '40px', width: '50px', transform: 'rotate(150deg)', opacity: 0.6 }} />
                </div>

                <a href="https://wa.me/918961779987" target="_blank" rel="noopener noreferrer" className={styles.whatsappStamp}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className={styles.contactBlock}>
              <h4>Follow Us</h4>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p>ORVEEOTECH ~ A Brand of MD INFOTECH SYSTEMS</p>
          <Doodle type="underline" color="#333" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translateX(-50%)', width: '300px', opacity: 0.2 }} />
        </div>
      </div>
    </footer>
  );
}
