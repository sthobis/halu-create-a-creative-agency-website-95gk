import React from "react";

const clientNames: string[] = [
  "HALO FINANSIAL",
  "JALUR DATA",
  "KOPI NUSANTARA",
  "PESONA RAYA",
  "MEDIA SINAR",
  "LOGISTIK NUSA",
  "CERITA KITA",
  "SUMBER PANGAN"
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 md:py-28 lg:py-36 border-b border-[#D9D7D0]">
      <div className="px-6 md:px-12 lg:px-20">
        <h2 className="font-['Schibsted_Grotesk'] font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-10 md:mb-14">
          Trusted by Indonesian Leaders
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D9D7D0]">
          {clientNames.map((name, index) => (
            <div 
              key={index}
              className="bg-[#F7F6F2] py-10 md:py-14 flex items-center justify-center hover:bg-[#FFFFFF] transition-colors duration-300 group"
            >
              <span className="font-['Schibsted_Grotesk'] font-bold text-lg md:text-xl tracking-widest text-[#6B6B6B] group-hover:text-[#111111] transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}