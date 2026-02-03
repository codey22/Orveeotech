import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';
import { servicesData } from '@/lib/servicesData';
import Link from 'next/link';
import StickyNote from '@/components/StickyNote';

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
  title: 'Services & Works | ORVEEOTECH',
  description: 'Explore our IT services and view our latest projects.',
};

export default function Services() {
  return (
    <main>
      <Navbar />
      <div className={`container ${styles.pageContainer}`}>
        
        {/* Services Section */}
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Our Services</h1>
          <p className={styles.sectionSubtitle}>
            We offer a wide range of digital services to help your business grow. 
            Pick a card below to explore the details of what we can do for you.
          </p>
          
          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <Link 
                href={`/services/${service.slug}`} 
                key={index} 
                className={styles.serviceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StickyNote 
                  color={service.color} 
                  rotation={index % 2 === 0 ? -2 : 2}
                  decoration={index % 2 === 0 ? "tape" : "pin"}
                >
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 'bold', border: '1px dashed black', padding: '2px 5px', display: 'inline-block' }}>
                    Click to open details ↗
                  </div>
                </StickyNote>
              </Link>
            ))}
          </div>
        </section>

        <div className={styles.separator}></div>

        {/* Works Section */}
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Our Works</h1>
          <p className={styles.sectionSubtitle}>
            Check out some of our recent live projects. We take pride in delivering 
            high-quality, functional, and beautiful software.
          </p>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
