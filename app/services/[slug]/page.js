import { servicesData } from '@/lib/servicesData';
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
    <main className="min-h-screen bg-[#f0e6d2] [background-image:linear-gradient(90deg,transparent_95%,rgba(0,0,0,0.05)_95%),linear-gradient(transparent_95%,rgba(0,0,0,0.05)_95%)] [background-size:40px_40px] pb-24">
      <div className="container pt-48 max-w-[850px] relative mx-auto px-4">
        <div className="mb-4 text-right">
          <Link href="/services" className="inline-flex items-center gap-2 font-mono font-bold no-underline text-[#3e2723] text-[1.1rem] transition-transform hover:-translate-x-[5px] hover:underline">
            <span className="text-[1.2rem]">←</span> Back to Services
          </Link>
        </div>

        <div className="w-[200px] h-10 bg-[#d7c9aa] border-2 border-[#5d4037] border-b-0 rounded-t-[10px] ml-8 flex items-center justify-center relative z-0 shadow-[2px_-2px_5px_rgba(0,0,0,0.1)]">
          <span className="font-mono text-[0.9rem] text-[#b91c1c] font-bold tracking-[2px] -rotate-2">CONFIDENTIAL</span>
        </div>

        <article className="bg-[#fdfbf7] border border-[#d1d5db] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05),10px_10px_0_rgba(0,0,0,0.1)] relative z-[1] p-0 rotate-[0.5deg] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.08]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")` }}></div>
          <CoffeeStain style={{ top: '20px', right: '20px', opacity: 0.15 }} />
          <CoffeeStain style={{ bottom: '100px', left: '-20px', opacity: 0.1, transform: 'scale(1.5)' }} />

          <header className="pt-16 px-12 pb-8 relative text-left border-b-2 border-dashed border-[#9ca3af] max-md:px-6">
            <div
              className="absolute top-8 right-12 border-[4px] border-double border-[#b91c1c] p-2 -rotate-[15deg] opacity-80 max-md:right-4 max-md:top-4 max-md:scale-75"
              style={{ maskImage: `url("data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` }}
            >
              <span className="text-[#b91c1c] font-mono font-black text-[1.2rem] tracking-[2px] uppercase">APPROVED</span>
            </div>

            <h1 className="font-retro text-[3rem] text-[#1f2937] mb-4 relative inline-block z-10 max-md:text-[2rem]">
              {service.title}
              <Doodle type="underline" color={service.color === 'yellow' ? '#d97706' : service.color} style={{ position: 'absolute', bottom: '-10px', left: '0', width: '100%', height: '20px', opacity: 0.6 }} />
            </h1>
            <p className="font-mono text-[1.2rem] text-[#4b5563] max-w-[600px] leading-[1.4]">{service.shortDesc}</p>
          </header>

          <div className="text-center py-4 text-[#9ca3af] text-[0.8rem] tracking-[5px]">
            <span>★ ★ ★</span>
          </div>

          <div
            className="pt-8 px-12 pb-16 font-mono text-[1.05rem] leading-[1.8] text-[#1f2937] relative z-[1] max-md:px-6"
            dangerouslySetInnerHTML={{ __html: service.fullDesc }}
          />


          <div className="bg-[#f3f4f6] p-8 mx-12 mb-12 border border-dashed border-[#9ca3af] relative text-center -rotate-1 max-md:mx-6">
            <Doodle type="scribble" color="#000" style={{ position: 'absolute', bottom: '0', right: '0', width: '100px', opacity: 0.1 }} />
            <p className="font-retro text-[1.2rem] mb-4">Interested in this service?</p>
            <Link href="/contact" className="inline-block bg-[#1f2937] text-white py-[0.8rem] px-8 no-underline font-mono font-bold text-[1.1rem] rounded-[2px] shadow-[3px_3px_0_rgba(0,0,0,0.2)] transition-all hover:-translate-y-[2px] hover:shadow-[5px_5px_0_rgba(0,0,0,0.3)] hover:bg-black">
              Initiate Protocol <span style={{ fontFamily: 'sans-serif' }}>→</span>
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
