import React from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Nordic Elements",
    category: "Brand Identity",
    year: "2024",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop"
  },
  {
    id: "02",
    title: "Mono Architecture",
    category: "Digital Experience",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&h=800&fit=crop"
  },
  {
    id: "03",
    title: "Raw Beauty Co.",
    category: "Packaging & Print",
    year: "2023",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=1200&h=800&fit=crop"
  },
  {
    id: "04",
    title: "Kinetik Fitness",
    category: "Campaign & Motion",
    year: "2023",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20 md:py-28 lg:py-36 border-b border-[#D9D7D0]">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="flex items-end justify-between mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-['Schibsted_Grotesk'] font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Selected Work
          </h2>
          <span className="font-['Schibsted_Grotesk'] font-bold text-2xl md:text-3xl text-[#6B6B6B] hidden md:block">
            (04)
          </span>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className="group grid grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 border-t border-[#D9D7D0] last:border-b hover:bg-[#FFFFFF] transition-colors duration-300 px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <div className="col-span-1 font-['Schibsted_Grotesk'] font-bold text-sm md:text-base text-[#6B6B6B] pt-1">
                ({project.id})
              </div>
              
              <div className="col-span-7 md:col-span-4">
                <h3 className="font-['Schibsted_Grotesk'] font-bold text-xl md:text-2xl lg:text-3xl tracking-tight group-hover:text-[#E4002B] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-[#6B6B6B] mt-2">{project.category}</p>
              </div>
              
              <div className="col-span-4 md:col-span-6">
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 md:h-56 lg:h-72 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              
              <div className="col-span-12 md:col-span-1 flex md:justify-end items-start pt-1">
                <span className="text-sm font-medium text-[#6B6B6B]">{project.year}</span>
              </div>
            </article>
          ))}
        </div>

        <a 
          href="#" 
          className="group inline-flex items-center gap-3 mt-10 md:mt-14 text-sm font-semibold tracking-widest uppercase border-b-2 border-[#111111] pb-2 hover:border-[#E4002B] hover:text-[#E4002B] transition-colors duration-300"
        >
          View All Projects
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}