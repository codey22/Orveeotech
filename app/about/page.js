import StickyNote from '@/components/StickyNote';
import Doodle from '@/components/Doodle';
import CoffeeStain from '@/components/CoffeeStain';

export const metadata = {
  title: 'About | ORVEEOTECH',
  description: 'Learn about ORVEEOTECH, our mission, and our unique approach to IT solutions and training.',
};

export default function About() {
  return (
    <main>
      <div className="container pt-48 px-8 pb-48 min-h-screen relative flex flex-col items-center max-md:pt-32 max-md:px-4 max-md:pb-24 mx-auto">
        <header className="mb-20 text-center relative z-[2] w-full max-w-[800px]">
          <h1 className="font-retro text-[4rem] text-black mb-6 bg-white inline-block px-12 py-4 border-[3px] border-black -rotate-2 shadow-[8px_8px_0_rgba(0,0,0,0.2)] font-normal max-md:text-[2.5rem] max-md:px-6 max-md:py-3">Who We Are</h1>
          <p className="text-[1.5rem] max-w-[800px] mt-8 mx-auto text-black font-semibold bg-[#ffeb3b] p-6 rotate-1 shadow-[4px_4px_0_rgba(0,0,0,0.1)] font-main border-2 border-black max-md:text-[1.1rem] max-md:p-4">
            We are not just another IT company. We are a launchpad for future tech leaders,
            a hub for innovation, and a partner in your digital transformation journey.
          </p>
          <Doodle type="scribble" color="#e11d48" style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', transform: 'rotate(15deg)', opacity: 0.6 }} />
        </header>

        {/* Origin Story - Typewriter Style */}
        <section className="max-w-[800px] my-16 mx-auto p-12 bg-white border border-[#e5e5e5] shadow-[10px_10px_0_rgba(0,0,0,0.1)] font-mono relative before:content-[''] before:absolute before:-top-[10px] before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-5 before:bg-[rgba(0,0,0,0.1)]">
          <h2 style={{ fontFamily: 'var(--font-rye)', marginBottom: '1.5rem', borderBottom: '2px dashed #ccc', paddingBottom: '0.5rem' }}>The Origin Story</h2>
          <p>
            It started with a simple idea: <strong>Code should mean something.</strong>
            <br /><br />
            <strong>ORVEEOTECH</strong> began as a rebellion against "good enough" software. We saw an industry flooded with quick fixes and bloated codebases. We wanted to build things that last. Things that work. Things that have soul.
            <br /><br />
            From a small team of passionate developers, we've grown into a full-fledged technology partner, but our core philosophy remains unchanged: We treat every line of code as a craft.
          </p>
          <CoffeeStain style={{ bottom: '-30px', right: '-30px', opacity: 0.4 }} />
        </section>

        {/* Core Values - Index Cards */}
        <section className="w-full max-w-[1000px] mb-16 relative">
          <h2 style={{ fontFamily: 'var(--font-rye)', fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Core Values</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-12 w-full my-16 max-md:grid-cols-1 max-md:gap-8">
            <div className="bg-[#fdfbf7] border border-[#d1d5db] p-8 shadow-[2px_2px_5px_rgba(0,0,0,0.05)] font-mono relative transition-transform duration-300 [background-image:linear-gradient(#e5e7eb_1px,transparent_1px)] [background-size:100%_1.5rem] leading-[1.5rem] hover:-translate-y-[5px] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.1)]">
              <h3 className="font-retro mb-4 text-[#b91c1c] uppercase border-b-2 border-[#b91c1c] inline-block max-w-full text-2xl leading-[1.2]">Craftsmanship</h3>
              <p>
                We don't just "write code". We engineer solutions. Every function, every class, every component is designed with intent and precision. Quality isn't an afterthought; it's the foundation.
              </p>
              <Doodle type="star" color="#d97706" style={{ position: 'absolute', top: '10px', right: '10px', width: '30px' }} />
            </div>
            <div className="bg-[#fdfbf7] border border-[#d1d5db] p-8 shadow-[2px_2px_5px_rgba(0,0,0,0.05)] font-mono relative transition-transform duration-300 [background-image:linear-gradient(#e5e7eb_1px,transparent_1px)] [background-size:100%_1.5rem] leading-[1.5rem] hover:-translate-y-[5px] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.1)]">
              <h3 className="font-retro mb-4 text-[#b91c1c] uppercase border-b-2 border-[#b91c1c] inline-block max-w-full text-2xl leading-[1.2]">Transparency</h3>
              <p>
                No hidden costs. No technical jargon designed to confuse. We believe in radical transparency with our clients and our students. You see what we see.
              </p>
            </div>
            <div className="bg-[#fdfbf7] border border-[#d1d5db] p-8 shadow-[2px_2px_5px_rgba(0,0,0,0.05)] font-mono relative transition-transform duration-300 [background-image:linear-gradient(#e5e7eb_1px,transparent_1px)] [background-size:100%_1.5rem] leading-[1.5rem] hover:-translate-y-[5px] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.1)]">
              <h3 className="font-retro mb-4 text-[#b91c1c] uppercase border-b-2 border-[#b91c1c] inline-block max-w-full text-2xl leading-[1.2]">Innovation</h3>
              <p>
                We respect the past but build for the future. We constantly explore new technologies—from AI to Cloud Native—to ensure our solutions are future-proof.
              </p>
              <Doodle type="arrow" color="#059669" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '40px', transform: 'rotate(-20deg)' }} />
            </div>
          </div>
        </section>

        {/* What We Do - Sticky Notes (Refined) */}
        <section className="flex flex-wrap justify-center gap-16 mb-24 w-full max-md:gap-8">
          <StickyNote color="yellow" rotation={2} decoration="pin">
            <h3>IT Solutions</h3>
            <p>
              From web development to complex system architectures, we build software that drives business growth.
              <br /><br />
              Our team ensures that every line of code serves a purpose, optimizing performance and user experience.
            </p>
          </StickyNote>

          <StickyNote color="pink" rotation={-2}>
            <h3>The Academy</h3>
            <p>
              <strong>We are NOT a traditional training institute.</strong> We bridge the gap between academic learning and industry demands.
              <br /><br />
              No boring lectures. Just real challenges that prepare you for the actual battlefield of software development.
            </p>
          </StickyNote>

          <StickyNote color="blue" rotation={1}>
            <h3>Simulation</h3>
            <p>
              Experience the pressure and precision of real-world development.
              <br /><br />
              You will face real client like requirements, changing scopes, and tight deadlines—giving you the experience that usually takes years to acquire.
            </p>
          </StickyNote>
        </section>

        {/* Our Process - Replaces The Squad */}
        <section className="w-full max-w-[1000px] mb-16 relative">
          <h2 style={{ fontFamily: 'var(--font-rye)', fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Our Process</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-12 w-full my-16 max-md:grid-cols-1 max-md:gap-8">
            <div className="bg-[#fdfbf7] border border-[#d1d5db] p-8 shadow-[2px_2px_5px_rgba(0,0,0,0.05)] font-mono relative transition-transform duration-300 [background-image:linear-gradient(#e5e7eb_1px,transparent_1px)] [background-size:100%_1.5rem] leading-[1.5rem] hover:-translate-y-[5px] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.1)]">
              <h3 className="font-retro mb-4 text-[#b91c1c] uppercase border-b-2 border-[#b91c1c] inline-block max-w-full text-2xl leading-[1.2]">01. Discovery</h3>
              <p>We start by listening. Understanding your vision is the first line of code we write.</p>
            </div>
            <div className="bg-[#fdfbf7] border border-[#d1d5db] p-8 shadow-[2px_2px_5px_rgba(0,0,0,0.05)] font-mono relative transition-transform duration-300 [background-image:linear-gradient(#e5e7eb_1px,transparent_1px)] [background-size:100%_1.5rem] leading-[1.5rem] hover:-translate-y-[5px] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.1)]">
              <h3 className="font-retro mb-4 text-[#b91c1c] uppercase border-b-2 border-[#b91c1c] inline-block max-w-full text-2xl leading-[1.2]">02. Craft</h3>
              <p>We build with precision. No bloat, just efficient, scalable, and beautiful solutions.</p>
            </div>
            <div className="bg-[#fdfbf7] border border-[#d1d5db] p-8 shadow-[2px_2px_5px_rgba(0,0,0,0.05)] font-mono relative transition-transform duration-300 [background-image:linear-gradient(#e5e7eb_1px,transparent_1px)] [background-size:100%_1.5rem] leading-[1.5rem] hover:-translate-y-[5px] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.1)]">
              <h3 className="font-retro mb-4 text-[#b91c1c] uppercase border-b-2 border-[#b91c1c] inline-block max-w-full text-2xl leading-[1.2]">03. Launch</h3>
              <p>We ship confidence. Your product goes live, ready to handle the real world.</p>
            </div>
          </div>
          <CoffeeStain style={{ top: '50%', left: '10%', opacity: 0.2 }} />
        </section>

        {/* Future Section */}
        <section className="w-full flex justify-center mt-8">
          <StickyNote color="white" rotation={0} className="!w-full !max-w-[800px]">
            <h3>Future Pipeline</h3>
            <p>
              While we currently focus on intermediate developers, we are also actively planning comprehensive beginner training modules and a dedicated <strong>Placement Assistance</strong> program which is currently under process.
              <br /><br />
              We are expanding our horizons to include AI-driven development tools and cloud-native architecture workshops, all designed to offer maximum value in the near future.
            </p>
            <Doodle type="underline" color="#333" style={{ position: 'absolute', bottom: '20px', left: '20px', width: '100px', opacity: 0.5 }} />
          </StickyNote>
        </section>
      </div>
    </main>
  );
}
