import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Civil Litigation", href: "#practice-areas" },
  { label: "Personal Injury", href: "#practice-areas" },
  { label: "Bankruptcy", href: "#practice-areas" },
  { label: "Criminal & Traffic Defense", href: "#practice-areas" },
];

const practiceAreas = [
  "Civil Litigation",
  "Personal Injury",
  "Bankruptcy",
  "Criminal & Traffic Defense",
];

export default function Footer() {
  return (
    <footer 
      className="relative overflow-hidden bg-[#111827] text-white"
      style={{ 
        backgroundImage: "url('/footer-bg.webp')", 
        backgroundAttachment: "fixed", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover" 
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 z-0 bg-[#111827]/90" />

      {/* Main Footer Links & Info */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-9 px-6 py-10 sm:grid-cols-2 lg:grid-cols-12 md:px-12 md:py-12">
        
        {/* Column 1: Brand Info (Span 3 columns on large screens) */}
        <div className="lg:col-span-3 flex flex-col justify-between">
          <div>
            <a
              href="/"
              className="inline-flex items-baseline gap-2 group"
              aria-label="Pugh and Karpov Law home"
            >
              <img src="/logo.webp" alt="Pugh & Karpov Law, PC" height={100} width={100} />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-6 text-gray-300">
              Experienced legal representation and practical guidance for
              individuals throughout the Tidewater area.
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links (Span 3 columns on large screens) */}
        <nav aria-label="Quick links" className="lg:col-span-3">
          <h3 className="mb-4 inline-block border-b border-white/15 pb-2 text-[10px] font-semibold tracking-[0.2em] text-yellow-400 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group flex items-center justify-between py-1 text-xs text-white/75 transition-colors hover:text-yellow-400"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="h-1 w-1 rounded-full bg-yellow/70 transition-colors group-hover:bg-yellow-400"></span>
                    {item.label}
                  </span>
                  <FaArrowRight aria-hidden="true" className="h-3 w-3 -translate-x-2 text-yellow-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Areas of Practice (Span 3 columns on large screens) */}
        <nav aria-label="Practice areas" className="lg:col-span-3">
          <h3 className="mb-4 inline-block border-b border-white/15 pb-2 text-[10px] font-semibold tracking-[0.2em] text-yellow-400 uppercase">
            Areas of Practice
          </h3>
          <ul className="space-y-3">
            {practiceAreas.map((area) => (
              <li key={area}>
                <a
                  href="#practice-areas"
                  className="group flex items-center justify-between py-1 text-xs text-white/75 transition-colors hover:text-yellow-400"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="h-1 w-1 rounded-full bg-yellow-400/70 transition-colors group-hover:bg-yellow-400"></span>
                    {area}
                  </span>
                  <FaArrowRight aria-hidden="true" className="h-3 w-3 -translate-x-2 text-yellow-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 4: Contact Info / Address (Span 3 columns on large screens) */}
        <div className="lg:col-span-3">
          <h3 className="mb-4 inline-block border-b border-white/15 pb-2 text-[10px] font-semibold tracking-[0.2em] text-yellow-400 uppercase">
            Contact Us
          </h3>
          <div className="space-y-3 text-xs text-white/75 leading-relaxed">
            <p className="font-medium text-white">Pugh and Karpov Law PC</p>
            <p>
              2400 Princess Anne Road<br />
              Virginia Beach, VA, 23456
            </p>
            <p>
              <strong className="text-white">Phone:</strong>{" "}
              <a href="tel:7577212390" className="hover:text-yellow-400 transition-colors">
                757-721-2390
              </a>
            </p>
            <p>
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:legal@pughkarpov.com" className="hover:text-yellow-400 transition-colors">
                legal@pughkarpov.com
              </a>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="relative z-10 border-t border-white/15 bg-black/20">
        <div className="text-center p-3 text-[13px] text-white/85">
          <p>© Pugh &amp; Karpov Law, PC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}