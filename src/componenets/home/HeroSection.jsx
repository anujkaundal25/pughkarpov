"use client";

import React, { useState, useEffect } from "react";

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
    <section className="w-full min-h-[500px] bg-[#0d131a] text-white flex items-center overflow-hidden relative">
      {/* Background Image Slider with Ambient Glow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-25" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Law firm background slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d131a] via-[#0d131a]/90 to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full max-w-[1450px] mx-auto px-6 md:px-12 lg:px-16 py-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9a8b50]/15 border border-[#9a8b50]/30 text-[#9a8b50] text-xs font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9a8b50]" />
              Pugh & Karpov Law, PC
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-wide uppercase">
              CRIMINAL AND <br />
              <span className="text-[#9a8b50]">TRAFFIC DEFENSE</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-xl font-light leading-relaxed">
              We bring 45 years of combined trial experience defending adult and juvenile criminal charges and traffic offenses in Virginia Beach, Norfolk, Chesapeake and other courts of the Tidewater area.  
            </p>
            <button className="bg-[#9a8b50] px-10 py-1 rounded-sm text-xl cursor-pointer">View More</button>

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
            <div className="bg-[#141d26]/90 backdrop-blur-md border border-white/10 p-8 lg:p-10 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#9a8b50]/10 rounded-bl-full pointer-events-none" />
              
              <h3 className="font-serif text-2xl text-white uppercase tracking-wide mb-2">
                Request a Callback
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Speak directly with a personal legal consultant today.
              </p>

              <form id="contact" onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-black/40 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9a8b50] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-black/40 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9a8b50] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1.5">Practice Area</label>
                  <select className="w-full bg-black/40 border border-white/15 px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#9a8b50] transition-colors">
                  <option className="bg-[#0d131a]">Bankruptcy</option>
                    <option className="bg-[#0d131a]">Criminal Defense</option>
                    <option className="bg-[#0d131a]">Traffic Tickets</option>
                    <option className="bg-[#0d131a]">Personal Injury</option>
                    <option className="bg-[#0d131a]">Civil Litigation</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-white text-black hover:bg-gray-200 font-semibold tracking-wider uppercase text-sm transition-all mt-2 cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;