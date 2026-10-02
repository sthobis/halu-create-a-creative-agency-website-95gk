import React from "react";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="py-10 md:py-14">
      <div className="px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-['Schibsted_Grotesk'] font-extrabold text-lg tracking-tight">
            STUDIO<span className="text-[#E4002B]">/</span>JKT
          </span>
          <p className="text-sm text-[#6B6B6B]">© {currentYear} Studio JKT. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-[#E4002B] transition-colors duration-200">Instagram</a>
          <a href="#" className="hover:text-[#E4002B] transition-colors duration-200">LinkedIn</a>
          <a href="#" className="hover:text-[#E4002B] transition-colors duration-200">Behance</a>
        </div>
      </div>
    </footer>
  );
}