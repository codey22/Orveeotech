import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'About | ORVEEOTECH',
  description: 'Learn about ORVEEOTECH, our mission, and our unique approach to IT solutions and training.',
};

export default function About() {
  return (
    <main>
      <Navbar />
      <div className={`container ${styles.aboutContainer}`}>
        <header className={styles.header}>
          <h1>Who We Are</h1>
          <p className={styles.subtitle}>
            More than just an IT company. We are a launchpad for future tech leaders.
          </p>
        </header>

        <section className={styles.introSection}>
          <p>
            At <strong>ORVEEOTECH</strong>, we believe in the power of practical application. We are an innovative IT Technology company dedicated to delivering top-tier digital solutions while simultaneously cultivating the next generation of tech talent. Our mission is to bridge the gap between theoretical knowledge and industry reality, providing a unique ecosystem where client success and developer growth happen side by side.
          </p>
        </section>

        <section className={styles.contentGrid}>
          <div className={styles.card}>
            <h2>IT Solutions & Delivery</h2>
            <p>
              ORVEEOTECH is a premier IT Technology company focused on delivering high-quality, 
              scalable client-based IT solutions. From web development to complex system architectures, 
              we build software that drives business growth.
            </p>
          </div>

          <div className={`${styles.card} ${styles.highlight}`}>
            <h2>Not Just Training</h2>
            <p>
              <strong>We are NOT a traditional training institute.</strong> We bridge the gap between 
              academic learning and industry demands. Our program is designed for individuals who already 
              possess basic to intermediate coding knowledge and are ready to level up.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Project Simulation</h2>
            <p>
              Experience the pressure and precision of real-world development. We offer 
              <strong> Real-time Client Project Simulation Training</strong> where you work on actual 
              deliverables, timelines, and standards—not just dummy projects.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Placement Assistance</h2>
            <p>
              Our program includes certification and dedicated placement assistance to help you 
              land your dream role in the tech industry. We prepare you not just to code, but to deliver value.
            </p>
          </div>
        </section>
        
        <section className={styles.future}>
          <h3>Future Pipeline</h3>
          <p>
            While we currently focus on intermediate developers, we are actively planning 
            comprehensive beginner training modules for the near future. Stay tuned.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
