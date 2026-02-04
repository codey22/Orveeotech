import { servicesData } from '@/lib/servicesData';
import styles from './page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Doodle from '@/components/Doodle';
import CoffeeStain from '@/components/CoffeeStain';

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
      <div className={`container ${styles.container}`}>
        <div className={styles.navBar}>
             <Link href="/services" className={styles.backLink}>
              <span className={styles.arrow}>←</span> Back to Services
            </Link>
        </div>

        <div className={styles.folderTab}>
            <span>CONFIDENTIAL</span>
        </div>
        
        <article className={styles.paper}>
          <div className={styles.paperTexture}></div>
          <CoffeeStain style={{ top: '20px', right: '20px', opacity: 0.15 }} />
          <CoffeeStain style={{ bottom: '100px', left: '-20px', opacity: 0.1, transform: 'scale(1.5)' }} />
          
          <header className={styles.header}>
            <div className={styles.stampBox}>
               <span className={styles.stampText}>APPROVED</span>
            </div>
            
            <h1 className={styles.title}>
              {service.title}
              <Doodle type="underline" color={service.color === 'yellow' ? '#d97706' : service.color} style={{ position: 'absolute', bottom: '-10px', left: '0', width: '100%', height: '20px', opacity: 0.6 }} />
            </h1>
            <p className={styles.subtitle}>{service.shortDesc}</p>
          </header>
          
          <div className={styles.divider}>
            <span>★ ★ ★</span>
          </div>

          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: service.fullDesc }} 
          />
          
          <div className={styles.footerNote}>
            <Doodle type="scribble" color="#000" style={{ position: 'absolute', bottom: '0', right: '0', width: '100px', opacity: 0.1 }} />
            <p>Interested in this service?</p>
            <Link href="/contact" className={styles.ctaButton}>
              Initiate Protocol <span style={{ fontFamily: 'sans-serif' }}>→</span>
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
