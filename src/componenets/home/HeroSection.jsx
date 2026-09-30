"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight, FaLock } from "react-icons/fa6";

const backgroundImages = [
  "/hero/1.webp",
  "/hero/2.webp",
  "/hero/3.webp",
  "/hero/4.webp",
];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle through background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[610px] bg-[#111827] text-white flex items-center overflow-hidden relative">
      {/* Background Image Slider with Ambient Glow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-55" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Law firm background slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/55 to-[#111827]/10 z-10" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-white text-[11px] font-semibold tracking-[0.18em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Pugh & Karpov Law, PC
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] leading-[1.02] uppercase">
              CIVIL LITIGATION <br />
              <span className="text-yellow-400">&amp; PERSONAL INJURY</span>
            </h1>

            <p className="text-white/85 text-sm md:text-base max-w-xl font-light leading-7">
              Pugh &amp; Karpov provides experienced courtroom advocacy in civil litigation, personal injury, bankruptcy, and criminal and traffic defense throughout the Tidewater area.
            </p>
            <a href="#practice-areas" className="inline-flex items-center gap-3 rounded-lg bg-white px-7 py-3 text-[11px] font-bold tracking-wide text-[#111827] transition-colors hover:bg-white">
              VIEW MORE <FaArrowRight aria-hidden="true" />
            </a>

            {/* <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#contact"
                className="px-8 py-4 bg-[#9a8b50] hover:bg-[#837542] text-white font-medium tracking-wider uppercase text-sm transition-all shadow-lg hover:shadow-[#9a8b50]/20 text-center"
              >
                Book a Consultation
              </a>
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium tracking-wider uppercase text-sm transition-all"
              >
                Discover Our Practice
              </button>
            </div> */}
          </div>

          {/* Right Column: Quick Contact Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#111827]/95 border border-white/20 p-6 sm:p-8 shadow-2xl rounded-b-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-white" />
              
              <h2 className="font-serif text-2xl text-white uppercase mb-2">
                Request a Callback
              </h2>
              <p className="text-white/65 text-xs mb-5">
                Speak directly with a personal legal consultant today.
              </p>

              <form id="contact" onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-[#111827]/75 border border-white/15 px-4 py-2.5 text-xs text-white placeholder:text-white/45 focus:outline-none focus:border-[#111827] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-[#111827]/75 border border-white/15 px-4 py-2.5 text-xs text-white placeholder:text-white/45 focus:outline-none focus:border-[#111827] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1.5">Practice Area</label>
                  <select className="w-full bg-[#111827]/75 border border-white/15 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#111827] transition-colors">
                      <option className="bg-[#111827]">Civil Litigation</option>
                      <option className="bg-[#111827]">Personal Injury</option>
                      <option className="bg-[#111827]">Bankruptcy</option>
                      <option className="bg-[#111827]">Criminal &amp; Traffic Defense</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 bg-white text-[#111827] hover:bg-white font-bold tracking-wide uppercase text-[11px] transition-all mt-2 cursor-pointer"
                >
                  Submit Inquiry
                </button>
                <p className="flex items-center justify-center gap-2 text-[10px] text-white/55">
                  <FaLock aria-hidden="true" /> Your information is confidential.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;