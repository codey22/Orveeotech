'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import StickyNote from '@/components/StickyNote';
import Doodle from '@/components/Doodle';
import CoffeeStain from '@/components/CoffeeStain';

const reviews = [
  {
    id: 1,
    text: "“ORVEEOTECH delivered exactly what we were looking for — a clean, professional product with great performance. The team understood our vision quickly and executed it with precision. Communication was smooth, timelines were respected, and the final outcome exceeded our expectations. Highly recommended for any startup looking for reliable tech partners.”",
    author: "Shreya Biswas",
    designation: "Founder, ALOGHOR",
    color: "blue",
    rotation: -3
  },
  {
    id: 2,
    text: "“Working with ORVEEOTECH was a seamless experience. Their technical clarity, structured approach, and commitment to quality really stood out. The project was handled with professionalism from planning to deployment. We’re genuinely happy with the collaboration and look forward to working together again.”",
    author: "Subhajit Basu",
    designation: "Founder, Technodome",
    color: "yellow",
    rotation: 2
  }
];


export default function Home() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentReviewIndex];

  return (
    <main>
      <div className="flex flex-col items-center w-full">
        <Hero />

        <div className="w-full h-10 bg-transparent m-0 relative z-[5]"></div>

        <section className="w-full py-24 px-8 flex flex-col items-center relative max-md:py-16 max-md:px-4 bg-[#f9f9f9] [background-image:linear-gradient(#e8e8e8_1px,transparent_1px),linear-gradient(90deg,#e8e8e8_1px,transparent_1px)] [background-size:30px_30px]">
          <CoffeeStain style={{ top: '-30px', left: '5%', opacity: 0.5 }} />
          <h2 className="font-retro text-[3.5rem] mb-14 text-center text-text uppercase bg-white px-8 py-4 border-thick -rotate-1 shadow-[6px_6px_0_rgba(0,0,0,0.2)] max-md:text-[2rem] max-md:px-6 max-md:py-3 max-md:mb-10 relative">
            Why Choose Us?
            <Doodle type="scribble" color="#ff4757" style={{ position: 'absolute', bottom: '-25px', right: '-30px', width: '90px', transform: 'rotate(-10deg)' }} />
          </h2>

          <div className="flex flex-wrap justify-center gap-14 max-w-[1200px] w-full max-md:gap-8">
            <StickyNote color="yellow" rotation={1}>
              <h3>Innovative Thinking</h3>
              <p>
                We don't just follow trends; we set them. Our team constantly explores new technologies
                to bring you the most efficient and modern solutions available.
              </p>
              <Doodle type="star" color="#d97706" style={{ position: 'absolute', top: '5px', left: '10px', width: '30px', opacity: 0.6 }} />
              <Doodle type="arrow" color="#d97706" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '40px', transform: 'rotate(-45deg)', opacity: 0.4 }} />
            </StickyNote>

            <StickyNote color="green" rotation={-2}>
              <h3>Client-Centric</h3>
              <p>
                Your success is our success. We work closely with you to understand your unique challenges
                and tailor our services to meet your specific goals.
              </p>
              <Doodle type="circle" color="#059669" style={{ position: 'absolute', top: '50%', left: '50%', width: '120%', height: '80%', transform: 'translate(-50%, -50%) rotate(-5deg)', opacity: 0.1 }} />
            </StickyNote>

            <StickyNote color="pink" rotation={2}>
              <h3>Future Ready</h3>
              <p>
                We build software that lasts. Our scalable architectures ensure that your application
                can grow alongside your business without needing a rewrite.
              </p>
              <Doodle type="underline" color="#be185d" style={{ position: 'absolute', top: '45px', left: '20px', width: '150px', opacity: 0.5 }} />
            </StickyNote>
          </div>
        </section>

        <div className="w-full h-10 bg-transparent m-0 relative z-[5]"></div>

        <section className="w-full py-24 px-8 flex flex-col items-center relative max-md:py-16 max-md:px-4">
          <CoffeeStain style={{ top: '10%', right: '5%', opacity: 0.2, transform: 'scale(0.8) rotate(90deg)' }} />
          <h2 className="font-retro text-[3.5rem] mb-14 text-center text-text uppercase bg-white px-8 py-4 border-thick -rotate-1 shadow-[6px_6px_0_rgba(0,0,0,0.2)] max-md:text-[2rem] max-md:px-6 max-md:py-3 max-md:mb-10 relative" style={{ transform: 'rotate(1deg)' }}>
            Our Philosophy
            <Doodle type="underline" color="#059669" style={{ position: 'absolute', bottom: '10px', left: '10%', width: '80%', opacity: 0.5 }} />
          </h2>

          <StickyNote color="white" rotation={0} className="!max-w-[800px] !w-full">
            <h3>"Code with Purpose"</h3>
            <p>
              We believe that every line of code should serve a clear purpose. Bloatware is the enemy of performance.
              At ORVEEOTECH, we prioritize clean, maintainable, and efficient code that delivers real value.
              <br /><br />
              Our development process is transparent, collaborative, and agile. We invite you to be a part of the journey,
              giving you full visibility into the progress of your project from day one.
            </p>
            <div style={{ marginTop: '2rem', fontFamily: 'var(--font-special-elite), monospace', textAlign: 'right', color: '#555' }}>
              - The Orveeotech Team
              <Doodle type="scribble" color="#333" style={{ width: '60px', marginLeft: '10px', verticalAlign: 'middle', opacity: 0.5 }} />
            </div>
          </StickyNote>
        </section>

        <div className="w-full h-10 bg-transparent m-0 relative z-[5]"></div>

        {/* New Testimonials Section */}
        <section className="w-full py-24 px-8 flex flex-col items-center relative max-md:py-16 max-md:px-4 bg-[#f9f9f9] [background-image:linear-gradient(#e8e8e8_1px,transparent_1px),linear-gradient(90deg,#e8e8e8_1px,transparent_1px)] [background-size:30px_30px]">
          <h2 className="font-retro text-[3.5rem] mb-14 text-center text-text uppercase bg-white px-8 py-4 border-thick -rotate-1 shadow-[6px_6px_0_rgba(0,0,0,0.2)] max-md:text-[2rem] max-md:px-6 max-md:py-3 max-md:mb-10 relative" style={{ transform: 'rotate(-2deg)' }}>What People Say</h2>

          <div className="relative w-full max-w-[600px] min-h-[400px] flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: currentReview.rotation }}
                exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <StickyNote color={currentReview.color} rotation={0} className="!max-w-[500px] !w-full !px-8 !py-12">
                  <h3 className="text-[1.2rem] font-bold mb-4 font-retro text-[#333] tracking-[1px] border-b-2 border-dashed border-[#555] pb-2 inline-block">
                    💬 Review {currentReview.id}
                  </h3>
                  <p className="text-[1rem] leading-[1.6] italic mb-6">
                    {currentReview.text}
                  </p>
                  <div className="text-right font-mono text-[0.9rem] font-bold text-[#444] mt-4">
                    {currentReview.author} <br />
                    <span className="text-[0.8rem] font-normal text-[#666]">~ {currentReview.designation}</span>
                  </div>
                </StickyNote>
              </motion.div>
            </AnimatePresence>
          </div>

          <CoffeeStain style={{ bottom: '10%', right: '10%', opacity: 0.3, transform: 'scale(1.2)' }} />
        </section>

      </div>
    </main>
  );
}
