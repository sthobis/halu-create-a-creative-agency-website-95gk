import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F6F2] border-b border-[#D9D7D0]">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-20">
        <a href="#" className="font-['Schibsted_Grotesk'] font-extrabold text-xl md:text-2xl tracking-tight">
          STUDIO<span className="text-[#E4002B]">/</span>JKT
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#work" className="hover:text-[#E4002B] transition-colors duration-200">Work</a>
          <a href="#clients" className="hover:text-[#E4002B] transition-colors duration-200">Clients</a>
          <a href="#contact" className="hover:text-[#E4002B] transition-colors duration-200">Contact</a>
        </nav>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#111111] transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#111111] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#111111] transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 text-lg font-medium">
          <a href="#work" onClick={() => setMenuOpen(false)} className="hover:text-[#E4002B] transition-colors">Work</a>
          <a href="#clients" onClick={() => setMenuOpen(false)} className="hover:text-[#E4002B] transition-colors">Clients</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#E4002B] transition-colors">Contact</a>
        </nav>
      )}
    </header>
  );
}