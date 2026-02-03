import { servicesData } from '@/lib/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | ORVEEOTECH`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={`container ${styles.container}`}>
        <Link href="/services" className={styles.backLink}>
          ← Back to Board
        </Link>
        
        <article className={styles.paper}>
          <header className={styles.header} style={{ backgroundColor: service.color }}>
            <h1>{service.title}</h1>
            <p className={styles.subtitle}>{service.shortDesc}</p>
          </header>
          
          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: service.fullDesc }} 
          />
          
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary">
              Start Project
            </Link>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}