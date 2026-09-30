"use client"
import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'HOME',
    'BANKRUPTCY',
    'CRIMINAL AND TRAFFIC DEFENSE',
    'PERSONAL INJURY',
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-[60] w-full bg-transparent flex flex-col">
      {/* Header Container */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 sm:px-6 md:px-28 py-3 flex items-center justify-between shadow-sm transition-all">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="/new-logo.webp" alt="Logo" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
          </a>
        </div>

        {/* Center: Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 mx-auto">
          {menuItems.map((menu, index) => (
            <a 
              key={index} 
              href="#" 
              className="text-[12px] xl:text-[13px] font-semibold tracking-wider text-[#111827] hover:text-[#9a8b50] transition-colors relative py-1 group"
            >
              {menu}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#9a8b50] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </a>
          ))}
        </nav>

        {/* Right: CTA Button & Grid Menu Toggle */}
        <div className="flex items-center space-x-4">
          <a 
            href="#contact" 
            className="hidden md:inline-flex px-5 py-2.5 bg-[#111827] hover:bg-[#9a8b50] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            Have A Question?
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#111827] bg-gray-100 hover:bg-gray-200 p-2 rounded-lg cursor-pointer focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <IoMdClose size={24} /> : <CgMenuGridO size={24} />}
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile / Drawer Menu */}
      <aside
        aria-label="Main menu"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 right-0 z-50 flex h-dvh w-[88vw] max-w-[26rem] flex-col bg-white px-6 sm:px-8 py-8 text-[#111827] shadow-2xl transition-transform duration-300 sm:w-[min(26rem,45vw)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 pb-6">
          <div className="flex items-center gap-2">
            <img src="/new-logo.webp" alt="Logo" className="h-10 w-10 object-contain" />
            <span className="font-serif font-bold text-sm tracking-wide">Pugh & Karpov</span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-gray-100 hover:bg-gray-200 text-[#111827] p-2.5 transition-colors cursor-pointer"
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
          >
            <IoMdClose size={20} />
          </button>
        </div>

        {/* Navigation Menu Items & Button Container */}
        <div className="mt-6 overflow-y-auto flex-1 flex flex-col justify-between" aria-label="Main navigation">
          <ul className="flex flex-col space-y-1">
            {menuItems.map((menu, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className="block border-b border-gray-100 py-4 font-serif text-base sm:text-lg transition-colors hover:text-[#9a8b50]"
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>

          {/* 'Have A Question?' Button placed strictly AFTER all menu items */}
          <div className="py-6 mt-auto border-t border-gray-100">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#111827] hover:bg-[#9a8b50] py-3.5 rounded-lg text-white text-sm font-medium tracking-wider uppercase shadow-md transition-colors"
            >
              Have A Question?
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}