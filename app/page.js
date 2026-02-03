import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import StickyNote from '@/components/StickyNote';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className={styles.homeContainer}>
        <Hero />
        
        <div className={styles.separator}></div>
        
        <section className={`${styles.section} ${styles.paperBg}`}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          
          <div className={styles.grid}>
            <StickyNote color="yellow" rotation={1} decoration="tape">
              <h3>Innovative Thinking</h3>
              <p>
                We don't just follow trends; we set them. Our team constantly explores new technologies 
                to bring you the most efficient and modern solutions available.
              </p>
            </StickyNote>
            
            <StickyNote color="green" rotation={-2} decoration="pin">
              <h3>Client-Centric</h3>
              <p>
                Your success is our success. We work closely with you to understand your unique challenges 
                and tailor our services to meet your specific goals.
              </p>
            </StickyNote>
            
            <StickyNote color="pink" rotation={2} decoration="tape">
              <h3>Future Ready</h3>
              <p>
                We build software that lasts. Our scalable architectures ensure that your application 
                can grow alongside your business without needing a rewrite.
              </p>
            </StickyNote>
          </div>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ transform: 'rotate(1deg)' }}>Our Philosophy</h2>
          
          <StickyNote color="white" rotation={0} decoration="tape" className={styles.wideNote}>
            <h3>"Code with Purpose"</h3>
            <p>
              We believe that every line of code should serve a clear purpose. Bloatware is the enemy of performance. 
              At ORVEEOTECH, we prioritize clean, maintainable, and efficient code that delivers real value.
              <br/><br/>
              Our development process is transparent, collaborative, and agile. We invite you to be a part of the journey, 
              giving you full visibility into the progress of your project from day one.
            </p>
          </StickyNote>
        </section>
      </div>
      <Footer />
    </main>
  );
}
