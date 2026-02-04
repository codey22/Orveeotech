import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';
import { servicesData } from '@/lib/servicesData';
import Link from 'next/link';
import StickyNote from '@/components/StickyNote';
import Doodle from '@/components/Doodle';
import CoffeeStain from '@/components/CoffeeStain';

const projects = [
  {
    id: 1,
    title: "Note Space",
    description: "A modern note-taking application designed for efficiency and clarity.",
    link: "https://note-space-kappa.vercel.app"
  },
  {
    id: 2,
    title: "Pharmacy Inventory System",
    description: "Comprehensive billing and inventory management for pharmacies.",
    link: "https://pharmacy-inventory-billing-system.onrender.com"
  },
  {
    id: 3,
    title: "Restaurant Management",
    description: "Full-stack solution for restaurant operations and order management.",
    link: "https://resturant-management-system-ow1n.onrender.com"
  },
  {
    id: 4,
    title: "Desi Dahi Website",
    description: "A modern website showcasing authentic dairy products with a cultural touch.",
    link: "https://desi-dahi-website-updated.vercel.app/"
  }
];

export const metadata = {
  title: 'Services | ORVEEOTECH',
  description: 'Explore our IT services and view our latest projects.',
};

export default function Services() {
  return (
    <main>
      <div className={`container ${styles.pageContainer}`}>
        
        {/* Services Section */}
        <section className={styles.section}>
          <CoffeeStain style={{ top: '-50px', left: '-50px', opacity: 0.4, transform: 'rotate(45deg)' }} />
          
          <h1 className={styles.sectionTitle}>
            Our Services
            <Doodle type="scribble" color="#e11d48" style={{ position: 'absolute', top: '-25px', right: '-25px', width: '60px', opacity: 0.6 }} />
          </h1>
          
          <p className={styles.sectionSubtitle}>
            We offer a wide range of digital services to help your business grow. 
            <br />
            <strong>Pick a card below to explore.</strong>
          </p>
          
          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <Link 
                href={`/services/${service.slug}`} 
                key={index} 
                className={styles.serviceLink}
              >
                <StickyNote 
                  color={service.color} 
                  rotation={index % 2 === 0 ? -2 : 2}
                  decoration="pin"
                >
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                  <div style={{ marginTop: '1.5rem', fontFamily: 'var(--font-special-elite)', fontSize: '0.9rem', fontWeight: 'bold', borderBottom: '2px solid black', paddingBottom: '2px', display: 'inline-block' }}>
                    View Details &rarr;
                  </div>
                </StickyNote>
              </Link>
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className={styles.comingSoonSection}>
           <h2 className={styles.sectionTitle} style={{ fontSize: '2.5rem', transform: 'rotate(1deg)' }}>Future Expansion</h2>
           <p className={styles.sectionSubtitle} style={{ maxWidth: '600px', transform: 'rotate(-1deg)' }}>
             We are constantly evolving. Here is what's currently on our drafting board.
           </p>
           
           <div className={styles.comingSoonGrid}>
             <div className={styles.comingSoonCard}>
               <div className={styles.comingSoonBadge}>Coming Soon</div>
               <h3>Cloud Engineering</h3>
               <p>Scalable cloud infrastructure, DevOps pipelines, and serverless architectures designed for the enterprise.</p>
               <Doodle type="circle" color="#999" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '40px', opacity: 0.3 }} />
             </div>
             
             <div className={styles.comingSoonCard}>
               <div className={styles.comingSoonBadge}>Coming Soon</div>
               <h3>Digital Marketing</h3>
               <p>Data-driven SEO, content strategy, and brand growth campaigns to put your business on the map.</p>
               <Doodle type="arrow" color="#999" style={{ position: 'absolute', top: '10px', left: '10px', width: '30px', transform: 'rotate(180deg)', opacity: 0.3 }} />
             </div>
           </div>
           <CoffeeStain style={{ bottom: '20px', right: '10%', opacity: 0.2 }} />
        </section>

        <div className={styles.separator}></div>

        {/* Works Section */}
        <section className={styles.section}>
          <h1 className={styles.sectionTitle} style={{ transform: 'rotate(2deg)' }}>
             Our Works
             <Doodle type="underline" color="#059669" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', opacity: 0.5 }} />
          </h1>
          <p className={styles.sectionSubtitle}>
            Check out some of our recent live projects. We take pride in delivering 
            high-quality, functional, and beautiful software.
          </p>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <CoffeeStain style={{ top: '50%', right: '-40px', opacity: 0.3 }} />
        </section>

      </div>
    </main>
  );
}
