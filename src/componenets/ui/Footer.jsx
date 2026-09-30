import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const quickLinks = [
  "Home",
  "Bankruptcy",
  "Criminal and Traffic Defense",
  "Personal Injury",
  "Civil Litigation",
];

const practiceAreas = [
  "Bankruptcy",
  "Criminal Defense",
  "Traffic Tickets",
  "Personal Injury",
  "Civil Litigation",
];

export default function Footer() {
  return (
    <footer 
      className="bg-[#111827] text-white relative overflow-hidden"
      style={{ 
        backgroundImage: "url('/footer-bg.webp')", 
        backgroundAttachment: "fixed", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover" 
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-[#111827]/95 z-0" />

      {/* Main Footer Links & Info */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-12 md:px-12 md:py-16">
        
        {/* Column 1: Brand Info (Span 4 columns on large screens) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <a
              href="/"
              className="inline-flex items-baseline gap-2 group"
              aria-label="Pugh and Karpov Law home"
            >
              <img src="/logo.webp" alt="" height={100} width={100} />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-6 text-gray-300">
              Experienced legal representation and practical guidance for
              individuals throughout the Tidewater area.
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links (Span 4 columns on large screens) */}
        <nav aria-label="Quick links" className="lg:col-span-4">
          <h3 className="mb-5 text-[11px] font-semibold tracking-[0.2em] text-white uppercase border-b border-white/10 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/[\s&]+/g, '-')}`}
                  className="text-sm text-gray-300 transition-colors hover:text-white flex items-center justify-between group py-1"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-white transition-colors"></span>
                    {item}
                  </span>
                  <FaArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Areas of Practice (Span 4 columns on large screens) */}
        <nav aria-label="Practice areas" className="lg:col-span-4">
          <h3 className="mb-5 text-[11px] font-semibold tracking-[0.2em] text-white uppercase border-b border-white/10 pb-2 inline-block">
            Areas of Practice
          </h3>
          <ul className="space-y-3">
            {practiceAreas.map((area) => (
              <li key={area}>
                <a
                  href="#practice-areas"
                  className="text-sm text-gray-300 transition-colors hover:text-white flex items-center justify-between group py-1"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-white transition-colors"></span>
                    {area}
                  </span>
                  <FaArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="text-center p-5 text-[10px] text-gray-300">
          <p>© Pugh &amp; Karpov Law, PC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}