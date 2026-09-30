import React from 'react';
import { FaArrowRight, FaCar, FaFileLines, FaScaleBalanced, FaUserShield } from 'react-icons/fa6';

const areas = [
  {
    title: 'Civil Litigation',
    description: 'Clear advice and strong advocacy when a dispute needs resolution.',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=85',
    Icon: FaScaleBalanced,
  },
  {
    title: 'Personal Injury',
    description: 'Get thoughtful support after an accident or injury.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=85',
    Icon: FaUserShield,
  },
  {
    title: 'Bankruptcy',
    description: 'A fresh start with compassionate, strategic legal guidance.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85',
    Icon: FaFileLines,
  },
  {
    title: 'Criminal & Traffic Defense',
    description: 'Experienced defense for criminal charges and traffic matters.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=85',
    Icon: FaCar,
  },
];

export default function Area() {
  return (
    <section
      id="practice-areas"
      aria-labelledby="practice-heading"
      className="relative isolate overflow-hidden bg-[#edf5ff] px-6 py-14 md:px-10 md:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: "url('/area.webp')" }}
      />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-xl text-center">
          <span className="mx-auto mb-3 block h-[3px] w-10 bg-yellow-400" />
          <h2 id="practice-heading" className="font-serif text-3xl text-[#082b54] sm:text-4xl">
            Areas of Practice
          </h2>
          <p className="mt-2 text-xs leading-5 text-[#707782] sm:text-sm">
            Comprehensive legal solutions for individuals and families throughout the Tidewater area.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ title, description, image, Icon }) => (
            <article key={title} className="group overflow-hidden bg-white shadow-[0_8px_24px_rgba(13,38,68,0.10)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-32 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} legal services`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#082b54]/15" />
              </div>
              <div className="relative px-5 pb-5 pt-10 text-center">
                <span className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[#082b54] shadow-md ring-4 ring-white">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-lg font-semibold text-[#082b54]">{title}</h3>
                <p className="mt-2 min-h-[3rem] text-[10px] leading-4 text-[#727782]">{description}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.1em] text-[#14518b] hover:text-[#e49b28]">
                  LEARN MORE <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}