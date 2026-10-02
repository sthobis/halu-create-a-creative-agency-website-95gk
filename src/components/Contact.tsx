import React, { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36 border-b border-[#D9D7D0]">
      <div className="px-6 md:px-12 lg:px-20">
        <h2 className="font-['Schibsted_Grotesk'] font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-8 md:mb-12">
          Let's Work Together
        </h2>
        
        <div className="mb-12 md:mb-16 lg:mb-20">
          <a 
            href="mailto:hello@studionord.com" 
            className="font-['Schibsted_Grotesk'] font-extrabold tracking-tight text-3xl md:text-6xl lg:text-7xl xl:text-8xl break-all hover:text-[#E4002B] transition-colors duration-300"
          >
            HELLO@STUDIONORD.COM
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8">
              Have a project in mind? Tell us about it. We respond within 24 hours.
            </p>
            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <span className="font-semibold uppercase tracking-widest text-[#6B6B6B]">Studio:</span>
                Vesterbrogade 42, 1620 Copenhagen
              </p>
              <p className="flex items-center gap-3">
                <span className="font-semibold uppercase tracking-widest text-[#6B6B6B]">Phone:</span>
                +45 12 34 56 78
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              required
              className="bg-transparent border-b-2 border-[#D9D7D0] py-3 px-1 text-lg placeholder-[#6B6B6B] focus:outline-none focus:border-[#111111] transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              required
              className="bg-transparent border-b-2 border-[#D9D7D0] py-3 px-1 text-lg placeholder-[#6B6B6B] focus:outline-none focus:border-[#111111] transition-colors duration-300"
            />
            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
              className="bg-transparent border-b-2 border-[#D9D7D0] py-3 px-1 text-lg placeholder-[#6B6B6B] focus:outline-none focus:border-[#111111] transition-colors duration-300 resize-none"
            />
            <button 
              type="submit"
              className="group inline-flex items-center gap-3 bg-[#111111] text-[#F7F6F2] px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#E4002B] transition-colors duration-300 self-start mt-4"
            >
              Send Message
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            {submitted && (
              <p className="text-[#E4002B] font-semibold text-sm mt-2">Message sent! We'll be in touch soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}