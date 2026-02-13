import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import StickyNote from '@/components/StickyNote';
import Doodle from '@/components/Doodle';
import CoffeeStain from '@/components/CoffeeStain';
import { servicesData } from '@/lib/servicesData';

export const metadata = {
  title: 'Services & Projects | ORVEEOTECH',
  description: 'Explore our wide range of IT solutions and our portfolio of innovative projects.',
};

const projects = [
  {
    id: 1,
    title: "NoteSpace",
    description: "A modern, intuitive note-taking application designed for productivity and seamless collaboration.",
    link: "https://note-space-kappa.vercel.app",
  },
  {
    id: 2,
    title: "Pharmacy Inventory & Billing System",
    description: "A comprehensive solution for managing pharmaceutical stock, tracking inventory, and streamlining the billing process.",
    link: "https://pharmacy-inventory-billing-system.onrender.com",
  },
  {
    id: 3,
    title: "Desi Dahi Website",
    description: "An elegant and user-friendly digital storefront for a premium dairy brand, focusing on high-quality presentation and smooth user experience.",
    link: "https://desi-dahi-website-updated.vercel.app/",
  },
  {
    id: 4,
    title: "Restaurant Management System",
    description: "An all-in-one platform for restaurant operations, covering everything from table bookings to order management and analytics.",
    link: "https://resturant-management-system-ow1n.onrender.com",
  },
];

export default function Services() {
  return (
    <main>
      <div className="pt-48 px-8 flex flex-col items-center min-h-screen max-md:pt-32 max-md:px-4 max-md:pb-16 mx-auto">
        <header className="mb-20 text-center relative z-[2] w-full max-w-[800px] mx-auto">
          <h1 className="font-retro text-[4rem] text-black mb-6 bg-white inline-block px-12 py-4 border-[3px] border-black rotate-1 shadow-[8px_8px_0_rgba(0,0,0,0.2)] font-normal max-md:text-[2.5rem] max-md:px-6 max-md:py-3">Our Expertise</h1>
          <p className="text-[1.5rem] max-w-[600px] mt-8 mx-auto text-black font-semibold bg-[#bfdbfe] p-6 -rotate-1 shadow-[4px_4px_0_rgba(0,0,0,0.1)] font-main border-2 border-black max-md:text-[1.1rem] max-md:p-4">
            We offer bespoke digital solutions tailored to your unique requirements.
            Our team blends creativity with technical excellence.
          </p>
          <Doodle type="scribble" color="#059669" style={{ position: 'absolute', top: '-10px', left: '-20px', width: '100px', transform: 'rotate(-45deg)', opacity: 0.6 }} />
        </header>

        {/* Services Section */}
        <section className="mb-32 w-full max-w-[1200px] flex flex-col items-center">
          <h2 className="font-retro text-[3.5rem] mb-14 text-center text-text uppercase bg-white px-8 py-4 border-[3px] border-black -rotate-1 shadow-[6px_6px_0_rgba(0,0,0,0.2)] inline-block max-md:text-[2.5rem] relative">
            What We Offer
            <Doodle type="circle" color="#e11d48" style={{ position: 'absolute', top: '-15px', right: '-25px', width: '80px', opacity: 0.5 }} />
          </h2>
          <div className="flex flex-wrap justify-center gap-16 p-8 w-full max-md:p-4 max-md:gap-8">
            {servicesData.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`} className="no-underline color-inherit block transition-transform duration-300 hover:scale-[1.02] hover:z-10">
                <StickyNote color={service.color} rotation={index % 2 === 0 ? -2 : 2} decoration="pin">
                  <h3 className="font-retro text-xl mb-4 uppercase text-[#b91c1c] border-b-2 border-[#b91c1c] inline-block">{service.title}</h3>
                  <p className="font-mono text-base leading-relaxed mb-6">{service.shortDesc}</p>
                  <div className="mt-auto font-retro text-[0.9rem] font-bold border-b-2 border-black pb-0.5 inline-block">
                    View Details &rarr;
                  </div>
                </StickyNote>
              </Link>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-32 w-full max-w-[1200px] flex flex-col items-center">
          <CoffeeStain style={{ top: '-40px', left: '10%', opacity: 0.4 }} />
          <h2 className="font-retro text-[3.5rem] mb-14 text-center text-text uppercase bg-white px-8 py-4 border-[3px] border-black -rotate-1 shadow-[6px_6px_0_rgba(0,0,0,0.2)] inline-block max-md:text-[2.5rem] relative" style={{ transform: 'rotate(2deg)' }}>
            Recent Work
            <Doodle type="underline" color="#059669" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', opacity: 0.5 }} />
          </h2>
          <p className="mb-16 text-[1.2rem] color-text font-medium max-w-[700px] text-center font-mono bg-white border border-[#ccc] p-6 shadow-[4px_4px_0_rgba(0,0,0,0.05)] rotate-1 max-md:text-[1rem] max-md:p-4">
            Check out some of our recent live projects. We take pride in delivering
            high-quality, functional, and beautiful software.
          </p>
          <div className="grid grid-cols-2 gap-16 w-full p-8 max-md:grid-cols-1 max-md:p-4 max-md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <CoffeeStain style={{ top: '50%', right: '-40px', opacity: 0.3 }} />
        </section>


      </div>
    </main>
  );
}
