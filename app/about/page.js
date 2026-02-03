import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import StickyNote from '@/components/StickyNote';

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
            We are not just another IT company. We are a launchpad for future tech leaders, 
            a hub for innovation, and a partner in your digital transformation journey.
          </p>
        </header>

        <div className={styles.separator}></div>

        <section className={styles.introSection}>
          <StickyNote color="white" rotation={-1} decoration="tape" className="w-full max-w-3xl">
            <h3>Our Mission</h3>
            <p>
              At <strong>ORVEEOTECH</strong>, we believe in the transformative power of technology when applied with purpose. 
              We are an innovative IT Technology company dedicated to delivering top-tier digital solutions while simultaneously 
              cultivating the next generation of tech talent. Our mission is to bridge the gap between theoretical knowledge 
              and industry reality, providing a unique ecosystem where client success and developer growth happen side by side.
              <br/><br/>
              We don't just write code; we craft solutions that stand the test of time, ensuring that every project we undertake 
              becomes a stepping stone for future innovation.
            </p>
          </StickyNote>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.contentGrid}>
          <StickyNote color="yellow" rotation={2} decoration="pin">
            <h3>IT Solutions & Delivery</h3>
            <p>
              ORVEEOTECH is a premier IT Technology company focused on delivering high-quality, 
              scalable client-based IT solutions. From web development to complex system architectures, 
              we build software that drives business growth.
              <br/><br/>
              Our team of expert developers ensures that every line of code serves a purpose, optimizing performance
              and user experience to meet the rigorous demands of the modern digital landscape.
            </p>
          </StickyNote>

          <StickyNote color="pink" rotation={-2} decoration="tape">
            <h3>Not Just Training</h3>
            <p>
              <strong>We are NOT a traditional training institute.</strong> We bridge the gap between 
              academic learning and industry demands. Our program is designed for individuals who already 
              possess basic to intermediate coding knowledge and are ready to level up.
              <br/><br/>
              We believe in learning by doing. No boring lectures, just real challenges that prepare you 
              for the actual battlefield of software development.
            </p>
          </StickyNote>

          <StickyNote color="blue" rotation={1} decoration="pin">
            <h3>Project Simulation</h3>
            <p>
              Experience the pressure and precision of real-world development. We offer 
              <strong> Real-time Client Project Simulation Training</strong> where you work on actual 
              deliverables, timelines, and standards—not just dummy projects.
              <br/><br/>
              You will face real client requirements, changing scopes, and tight deadlines, giving you 
              the experience that usually takes years to acquire in a junior role.
            </p>
          </StickyNote>

          <StickyNote color="green" rotation={-1} decoration="tape">
            <h3>Placement Assistance</h3>
            <p>
              Our program includes certification and dedicated placement assistance to help you 
              land your dream role in the tech industry. We prepare you not just to code, but to deliver value.
              <br/><br/>
              With our strong industry connections and portfolio-building approach, you'll walk into interviews 
              with confidence and a body of work that speaks for itself.
            </p>
          </StickyNote>
        </section>
        
        <div className={styles.separator}></div>

        <section className={styles.future}>
          <StickyNote color="yellow" rotation={0} decoration="tape">
            <h3>Future Pipeline</h3>
            <p>
              While we currently focus on intermediate developers, we are actively planning 
              comprehensive beginner training modules for the near future. 
              <br/><br/>
              We are expanding our horizons to include AI-driven development tools and cloud-native architecture workshops.
              Stay tuned for updates as we continue to grow our educational ecosystem.
            </p>
          </StickyNote>
        </section>
      </div>
      <Footer />
    </main>
  );
}
