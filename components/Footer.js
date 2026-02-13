import Doodle from './Doodle';
import CoffeeStain from './CoffeeStain';

export default function Footer() {
  return (
    <footer className="bg-[#2b2b2b] [background-image:linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:30px_30px] text-[#e5e5e5] px-8 pt-16 pb-8 m-0 w-full relative overflow-hidden font-mono border-t-[8px] border-[#1a1a1a] [box-shadow:inset_0_20px_40px_rgba(0,0,0,0.5)] after:content-[''] after:absolute after:inset-0 after:[background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.8%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%220.05%22/%3E%3C/svg%3E')] after:opacity-40 after:pointer-events-none after:z-0">
      <CoffeeStain style={{ bottom: '10px', right: '10px', width: '150px', height: '150px', opacity: 0.1, filter: 'invert(1)' }} />

      <div className="container flex flex-col gap-8 relative z-10 max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-between gap-8 items-start max-md:flex-col max-md:gap-12">
          <div className="flex-1 min-w-[300px] relative max-md:min-w-full max-md:text-center">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <h2 className="text-[#f0f0f0] mb-4 text-[3.5rem] font-retro tracking-[2px] -rotate-2 inline-block [text-shadow:3px_3px_0_#1a1a1a,4px_4px_0_#eccc68] max-md:text-[2.5rem] max-md:rotate-0 max-md:text-center max-md:block">ORVEEOTECH</h2>
            </div>
            <p className="text-[#ccc] text-lg max-w-[300px] leading-[1.6] italic border-l-[3px] border-[#eccc68] pl-4 ml-2 max-md:mx-auto max-md:text-center max-md:border-l-0 max-md:border-t-[3px] max-md:pt-4 max-md:pl-0">
              Ideas pinned. <br />
              Code shipped.
            </p>
          </div>

          <div className="hidden md:block w-[2px] [background-image:linear-gradient(to_bottom,transparent,#444_20%,#444_80%,transparent)] self-stretch mx-4"></div>

          <div className="flex flex-wrap gap-8 max-md:flex-col">
            <div className="flex flex-col gap-4">
              <div className="border-2 border-[rgba(236,204,104,0.3)] p-[1.25rem] rounded-[4px] relative bg-[rgba(0,0,0,0.2)] rotate-1 transition-transform duration-300 ease-[ease] hover:rotate-0 hover:scale-[1.02] hover:border-[rgba(236,204,104,0.6)] before:content-[''] before:absolute before:[-inset-5px] before:border before:border-dashed before:border-[rgba(255,255,255,0.1)] before:pointer-events-none">
                <h4 className="text-[#eccc68] mb-4 text-[1.4rem] uppercase tracking-[2px] font-retro [text-shadow:2px_2px_0px_rgba(0,0,0,0.5)] border-b-2 border-dashed border-[#444] pb-2 inline-block">Get in Touch</h4>
                <p className="mb-2 text-base opacity-90 text-[#ccc]"><span className="text-[#eccc68]">Email:</span> <a href="mailto:contact@orveeotech.com" className="text-white no-underline border-b border-[#666] pb-[2px] transition-all duration-300 ease-[ease] inline-block hover:text-[#ff4757] hover:border-b-[#ff4757] hover:bg-[rgba(255,71,87,0.1)] hover:scale-[1.05]">contact@orveeotech.com</a></p>
                <p className="mb-4 text-sm opacity-90 text-[#ccc] leading-[1.6] max-w-[350px]">
                  <span className="text-[#eccc68]">Address:</span> 17/B/A Priyonath Ghosh Street, Belgharia, Kolkata - 700056, West Bengal
                </p>

                <div style={{ marginTop: '1.5rem', position: 'relative' }}>
                  <p style={{ marginBottom: '0.5rem', opacity: 0.9, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}><span className="text-[#eccc68]">Call Us:</span></p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}>
                      <a href="tel:7890006416" className="text-[1.2rem] font-bold tracking-[1px] text-[#e5e5e5] no-underline transition-all duration-300 inline-block hover:text-[#ff4757] hover:scale-[1.05]">+91 78900 06416</a>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      <a href="tel:8961779987" className="text-[1.2rem] font-bold tracking-[1px] text-[#e5e5e5] no-underline transition-all duration-300 inline-block hover:text-[#ff4757] hover:scale-[1.05]">+91 89617 79987</a>
                    </li>
                    <li>
                      <a href="tel:7278036480" className="text-[1.2rem] font-bold tracking-[1px] text-[#e5e5e5] no-underline transition-all duration-300 inline-block hover:text-[#ff4757] hover:scale-[1.05]">+91 72780 36480</a>
                    </li>
                  </ul>
                  <Doodle type="arrow" color="#eccc68" style={{ position: 'absolute', right: '-50px', top: '40px', width: '50px', transform: 'rotate(150deg)', opacity: 0.6 }} />
                </div>

                <a href="https://wa.me/918961779987" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[10px] mt-6 px-[1.2rem] py-[0.8rem] border-[3px] border-double border-[#128C7E] rounded-lg text-[#128C7E] no-underline font-retro text-[0.9rem] font-bold uppercase -rotate-3 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] bg-[rgba(18,140,126,0.05)] cursor-pointer tracking-[1px] hover:rotate-0 hover:scale-[1.05] hover:text-[#ff4757] hover:border-[#ff4757] hover:shadow-[4px_4px_0px_rgba(255,71,87,0.3)] hover:border-solid">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[#eccc68] mb-4 text-[1.4rem] uppercase tracking-[2px] font-retro [text-shadow:2px_2px_0px_rgba(0,0,0,0.5)] border-b-2 border-dashed border-[#444] pb-2 inline-block">Follow Us</h4>
              <div className="flex gap-6 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61587709681241" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#1a1a1a] bg-[#eccc68] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] inline-flex items-center justify-center no-underline p-0 w-[45px] h-[45px] rounded-full border-2 border-[#1a1a1a] shadow-[3px_3px_0px_rgba(0,0,0,0.5)] hover:-translate-y-[5px] hover:rotate-10 hover:bg-[#ff4757] hover:text-white hover:shadow-[5px_5px_0px_rgba(0,0,0,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/orveeotech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#1a1a1a] bg-[#eccc68] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] inline-flex items-center justify-center no-underline p-0 w-[45px] h-[45px] rounded-full border-2 border-[#1a1a1a] shadow-[3px_3px_0px_rgba(0,0,0,0.5)] hover:-translate-y-[5px] hover:rotate-10 hover:bg-[#ff4757] hover:text-white hover:shadow-[5px_5px_0px_rgba(0,0,0,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-[#1a1a1a] bg-[#eccc68] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] inline-flex items-center justify-center no-underline p-0 w-[45px] h-[45px] rounded-full border-2 border-[#1a1a1a] shadow-[3px_3px_0px_rgba(0,0,0,0.5)] hover:-translate-y-[5px] hover:rotate-10 hover:bg-[#ff4757] hover:text-white hover:shadow-[5px_5px_0px_rgba(0,0,0,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-[#444] pt-6 text-center text-[0.9rem] text-[#888] flex justify-between items-center flex-wrap gap-4 mt-0 max-md:justify-center max-md:flex-col">
          <p>ORVEEOTECH ~ A Brand of MD INFOTECH SYSTEMS</p>
          <Doodle type="underline" color="#333" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translateX(-50%)', width: '300px', opacity: 0.2 }} />
        </div>
      </div>
    </footer>
  );
}
