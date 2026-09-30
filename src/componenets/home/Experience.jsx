import React from 'react';
import { FaPeopleGroup, FaScaleBalanced, FaTrophy } from 'react-icons/fa6';

const highlights = [
  {
    label: 'Experience',
    detail: 'Integrity',
    Icon: FaPeopleGroup,
  },
  {
    label: 'Integrity',
    detail: 'Personalized legal guidance',
    Icon: FaScaleBalanced,
  },
  {
    label: 'Results',
    detail: 'Dedicated to your best outcome',
    Icon: FaTrophy,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-[#e1efff] px-6 py-10 md:px-10 md:py-12"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_2fr] lg:items-center lg:gap-12">
        <div>
          <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-yellow-400">
            <span className="h-[2px] w-8 bg-yellow-400" />
            “Never say Never…”
          </p>
          <h2 id="experience-heading" className="font-serif text-3xl text-[#082b54] sm:text-[34px]">
            Experience. Integrity. Results.
          </h2>
        </div>

        <ul className="grid grid-cols-1 divide-y divide-yellow-400 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {highlights.map(({ label, detail, Icon }) => (
            <li key={label} className="flex items-center gap-4 py-4 sm:flex-col sm:justify-center sm:gap-2 sm:px-4 sm:py-2 sm:text-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#082b54] shadow-sm ring-1 ring-[#e8e9e8]">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif text-base font-semibold text-[#142b49]">{label}</h3>
                {/* <p className="mt-1 text-[10px] leading-4 text-[#777b81]">{detail}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}