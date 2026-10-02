import React from "react";

export default function Hero() {
  return (
    <section className="pt-32 md:pt-44 lg:pt-52 pb-20 md:pb-28 lg:pb-36 border-b border-[#D9D7D0] overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#6B6B6B] mb-6 md:mb-8">
          Independent Creative Agency — Jakarta, Indonesia
        </p>
        
        <h1 className="font-['Schibsted_Grotesk'] font-extrabold tracking-tight leading-[0.95] text-[13vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[7.5vw] whitespace-nowrap -ml-2">
          WE MAKE
          <br />
          <span className="text-[#E4002B]">BRANDS</span>
          <br />
          UNFORGETTABLE
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12 md:mt-16 lg:mt-20">
          <p className="text-lg md:text-xl text-[#6B6B6B] max-w-lg leading-relaxed">
            Strategy, identity, and digital experiences for companies that refuse to blend in. Based in Jakarta, working across Southeast Asia and beyond.
          </p>
          
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-3 bg-[#111111] text-[#F7F6F2] px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#E4002B] transition-colors duration-300 self-start md:self-auto"
          >
            Start a Project
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}