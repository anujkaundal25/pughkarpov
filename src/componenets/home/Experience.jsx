import React from 'react';
import {
  FaGavel,
  FaScaleBalanced,
  FaTrophy,
} from "react-icons/fa6";

const practices = [
  {
    title: 'Experience',
    description: 'Legal troubles or challenges often invite feelings of anxiety and fear. Putting them to rest and making legal problems go away is our specialty. Founders of Pugh and Karpov Law, Virginia attorneys Gregory Pugh and Anton Karpov put their superior trial skills, advanced Law Degrees (LLM) from William and Mary School of Law, and over 50 years of legal experience to benefit their clients. When the opportunity arose in 2019, they merged their law practices, expanding their area of expertise. They built Pugh & Karpov, a premier Virginia full-service law firm with the mission of providing expert legal advice and zealous representation to anyone in need.',
    Icon: FaGavel,
    cardClass: 'bg-white text-[#292a1a]',
    iconClass: 'text-[#858660]',
  },
  {
    title: 'Integrity',
    description: 'At Pugh & Karpov, we strive to approach each client’s legal issue with the utmost integrity and pride ourselves in meeting the highest expectations of professional conduct, ethics, and diligence. Our commitment to integrity has helped make Pugh and Karpov an AV-Rated firm, a distinction given only to those law firms who demonstrate the highest ethical standards and professional excellence.',
    Icon: FaScaleBalanced,
    cardClass: 'bg-[#9a8b50] text-white',
    iconClass: 'text-white',
  },
  {
    title: 'Results',
    description: 'Our attorneys are ready to extend a helping hand to those in need and always prepared to fight for their clients, consistently delivering the best results possible. When Pugh & Karpov represent you in litigation, negotiate favorable terms, or work on any other legal matter, they do it with one goal in mind – make you wholly satisfied with the outcome.',
    Icon: FaTrophy,
    cardClass: 'bg-white text-[#292a1a]',
    iconClass: 'text-[#858660]',
  },
];

export default function Experience() {
  return (
    <div className="bg-white">

      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="relative isolate bg-cover bg-center px-6 py-14 md:min-h-[480px] md:py-0"
        style={{ backgroundImage: "url('/exper.webp')" }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3f4ee] via-[#f3f4ee]/95 to-[#f3f4ee]/65" />

        {/* Increased max-width here from 58rem to max-w-7xl for a wider layout */}
        <div className="relative mx-auto max-w-7xl md:min-h-[480px]">
          <div className="md:pt-[5.2rem]">
            <p className="mb-3 text-[10px] font-medium tracking-[2px] text-[#898a63]">
              “Never say Never…”
            </p>
            <h2
              id="experience-heading"
              className="font-serif text-3xl text-[#292a1a] sm:text-4xl"
            >
              Experience. Integrity. Results.
            </h2>
            {/* <p className="mt-5 max-w-xl text-sm text-[#77786d]">
              Thoughtful legal guidance built around your needs, your rights, and your future.
            </p> */}
          </div>

          {/* Cards container spans full width of max-w-7xl container */}
          <div className="relative z-10 mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 md:absolute md:left-0 md:right-0 md:top-[227px] md:mt-0">
            {practices.slice(0,1).map(({ title, description, Icon, cardClass, iconClass }) => (
              <article
                key={title}
                className={`${cardClass} flex min-h-[310px] flex-col items-center justify-between px-8 py-10 text-center shadow-lg sm:min-h-[340px] rounded-sm`}
              >
                <div className="flex flex-col items-center w-full">
                  <Icon aria-hidden="true" className={`${iconClass} mb-6 h-12 w-12`} />
                  <h3 className="font-serif text-lg tracking-wide">{title}</h3>
                  {/* Removed max-w-[15rem] restriction so text fills the wider card gracefully */}
                  <p className="mt-3 text-xs leading-5 opacity-90">
                    {description}
                  </p>
                </div>
                {/* <FaArrowRight aria-hidden="true" className="mt-6 h-4 w-4" /> */}
              </article>
            ))}
            {practices.slice(1,2).map(({ title, description, Icon, cardClass, iconClass }) => (
              <article
                key={title}
                className={`${cardClass} flex min-h-[310px] flex-col items-center justify-between px-8 py-10 text-center shadow-lg sm:min-h-[340px] rounded-sm mt-15`}
              >
                <div className="flex flex-col items-center w-full">
                  <Icon aria-hidden="true" className={`${iconClass} mb-6 h-12 w-12`} />
                  <h3 className="font-serif text-lg tracking-wide">{title}</h3>
                  {/* Removed max-w-[15rem] restriction so text fills the wider card gracefully */}
                  <p className="mt-3 text-xs leading-5 opacity-90">
                    {description}
                  </p>
                </div>
                {/* <FaArrowRight aria-hidden="true" className="mt-6 h-4 w-4" /> */}
              </article>
            ))}
            {practices.slice(2,3).map(({ title, description, Icon, cardClass, iconClass }) => (
              <article
                key={title}
                className={`${cardClass} flex min-h-[310px] flex-col items-center justify-between px-8 py-10 text-center shadow-lg sm:min-h-[340px] rounded-sm`}
              >
                <div className="flex flex-col items-center w-full">
                  <Icon aria-hidden="true" className={`${iconClass} mb-6 h-12 w-12`} />
                  <h3 className="font-serif text-lg tracking-wide">{title}</h3>
                  {/* Removed max-w-[15rem] restriction so text fills the wider card gracefully */}
                  <p className="mt-3 text-xs leading-5 opacity-90">
                    {description}
                  </p>
                </div>
                {/* <FaArrowRight aria-hidden="true" className="mt-6 h-4 w-4" /> */}
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Spacing below to handle absolute positioning overlap */}
      <div className="h-44 sm:h-36 md:h-48" aria-hidden="true" />
    </div>
  );
}