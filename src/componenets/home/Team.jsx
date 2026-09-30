import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

function Team() {
  const attorneys = [
    {
      name: "Gregory K. Pugh",
      image: "/team1.jpg",
      year: "38+ Years",
      bio: "Attorney Gregory Pugh obtained his Juris Doctor degree from Pettit College of Law at Ohio Northern University in 1981 and advanced Master of Laws Degree (LLM) was awarded to him by the Law School at the College of William and Mary in 1991. He has actively practiced in Virginia courts since 1988 and opened his own practice in 1996, specializing in civil litigation, bankruptcy, traffic and criminal defense. He represents clients in all courts in the greater Tidewater area and has argued cases before the Virginia Court of Appeals and the Virginia Supreme Court. It will be very hard to find another lawyer who can match Mr. Pugh’s legal experience or go toe-to-toe against him in the courtroom. But despite his toughness when he takes a stand protecting his clients, Mr. Pugh is a very personable and caring person, who is also appointed by the courts to protect the interests of children and mentally-ill individuals.",
      point: "“He has actively practiced in Virginia courts since 1988…”",
    },
    {
      name: "Anton A. Karpov",
      image: "/team2.webp",
      year: "25+ Years",
      bio: "Attorney Anton Karpov obtained his first law degree from Moscow State University in 1999 with a specialty in Contracts and Civil Litigation. After immigrating to the United States in 1999, he overcame many challenges to earn an advanced Master of Laws Degree (LLM) from the Law School at the College of William and Mary in 2006. Since 2007 he practiced law in Virginia courts and represented hundreds of clients as a Public Defender. He tried every case imaginable – from DUI and juvenile delinquency cases to drug, firearm, robbery, and homicide charges. Before leaving public service, he worked as a supervisor of an adult felony team and carried his trial experience into his private practice. When you or someone close to you is in trouble, you need a courtroom warrior like Mr. Karpov. He is always honest and forthcoming with his clients, always ready to fight defending their rights, and ready to expertly defend you on traffic or criminal charges or aggressively negotiate with insurance companies so you get generous compensation for your injuries.",
      point: "“Practicing in Virginia courts since 2007 with extensive trial experience…”",
    },
  ];

  return (
    <section id="attorneys" className="bg-[#f7f8fa] px-6 py-14 md:px-10 md:py-20">
      {/* Page Title */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="mx-auto mb-3 block h-[3px] w-10 bg-[#111827]" />
        <h2 className="font-serif text-3xl text-[#111827] sm:text-4xl">
          Get To Know Our Attorneys
        </h2>
        <p className="mt-2 text-sm text-[#707782] sm:text-base">
          Meet the legal minds behind Pugh & Karpov
        </p>
      </div>

      {/* Attorney Cards */}
      <div className="mx-auto max-w-7xl space-y-8">
        {attorneys.map((attorney, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={index}
              className="grid grid-cols-1 overflow-hidden rounded-lg border border-[#e7eaf0] bg-white shadow-[0_8px_24px_rgba(13,38,68,0.07)] md:grid-cols-12"
            >
              {/* Image & Badge Wrapper */}
              <div
                className={`relative min-h-[300px] md:col-span-5 md:min-h-[500px] ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <img
                  src={attorney.image}
                  alt={`Portrait of ${attorney.name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded bg-[#111827] px-4 py-2 text-xs font-semibold text-white shadow">
                  {attorney.year} Experience
                </div>
              </div>

              {/* Text / Bio */}
              <div
                className={`flex flex-col justify-center p-6 sm:p-8 md:col-span-7 md:p-10 ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <h3 className="font-serif text-2xl font-semibold text-[#111827] sm:text-3xl">
                  {attorney.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#525a66]">
                  {attorney.bio}
                </p>
                <blockquote className="mt-6 flex items-start gap-3 rounded-r border-l-4 border-yellow-400 bg-[#f2f6fb] px-4 py-3 text-xs italic leading-relaxed text-[#111827] sm:text-sm">
                  <FaQuoteLeft aria-hidden="true" className="mt-0.5 shrink-0 text-[#111827]" />
                  <span>{attorney.point}</span>
                </blockquote>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Team;