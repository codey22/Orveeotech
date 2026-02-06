import Link from 'next/link';

export default function ProjectCard({ project, index = 0 }) {
  const bgColors = ['bg-[#bbf7d0]', 'bg-[#fecaca]', 'bg-[#bfdbfe]']; // green, pink, blue aliases or accent-3, 1, 2
  const currentBg = bgColors[index % 3];

  return (
    <div className="border-[3px] border-black rounded-[12px] overflow-hidden bg-white flex flex-col transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] h-full shadow-[5px_5px_0_rgba(0,0,0,1)] hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[12px_12px_0px_#e11d48] hover:z-10">
      <div className={`h-[220px] ${currentBg} border-b-[3px] border-black flex items-center justify-center relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:[background-image:repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]`}>
        <div className="text-[5rem] font-normal text-white uppercase text-shadow-[4px_4px_0px_rgba(0,0,0,0.2)] z-[2] relative font-retro max-md:text-[4rem]">{project.title.substring(0, 2)}</div>
      </div>
      <div className="p-8 flex flex-col flex-grow max-md:p-6">
        <h3 className="text-[1.6rem] mb-[0.8rem] text-black uppercase font-retro max-md:text-[1.4rem]">{project.title}</h3>
        <p className="text-base text-[#444] mb-8 flex-grow font-medium font-mono">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full p-4 bg-black text-white no-underline text-center font-[800] uppercase rounded-sm transition-all duration-200 ease-in-out border-2 border-transparent font-mono hover:bg-white hover:text-black hover:border-black hover:shadow-[4px_4px_0px_black] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none"
        >
          View Live Project
        </a>
      </div>
    </div>
  );
}
