import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';
import { servicesData } from '@/lib/servicesData';
import Link from 'next/link';

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
          <p className={styles.sectionSubtitle}>Pick a card to explore details</p>
          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <Link 
                href={`/services/${service.slug}`} 
                key={index} 
                className={styles.serviceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div 
                  className={styles.serviceCard} 
                  style={{ backgroundColor: service.color }}
                >
                  <div className={styles.tape}></div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                  <span className={styles.clickHint}>Click to open details ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Works Section */}
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Our Works</h1>
          <p className={styles.sectionSubtitle}>
            Check out some of our recent live projects.
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
