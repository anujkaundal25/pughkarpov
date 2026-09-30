import React from "react";

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
      image: "/team2.jpg",
      year: "25+ Years",
      bio: "Attorney Anton Karpov obtained his first law degree from Moscow State University in 1999 with a specialty in Contracts and Civil Litigation. After immigrating to the United States in 1999, he overcame many challenges to earn an advanced Master of Laws Degree (LLM) from the Law School at the College of William and Mary in 2006. Since 2007 he practiced law in Virginia courts and represented hundreds of clients as a Public Defender. He tried every case imaginable – from DUI and juvenile delinquency cases to drug, firearm, robbery, and homicide charges. Before leaving public service, he worked as a supervisor of an adult felony team and carried his trial experience into his private practice. When you or someone close to you is in trouble, you need a courtroom warrior like Mr. Karpov. He is always honest and forthcoming with his clients, always ready to fight defending their rights, and ready to expertly defend you on traffic or criminal charges or aggressively negotiate with insurance companies so you get generous compensation for your injuries.",
      point: "“Practicing in Virginia courts since 2007 with extensive trial experience…”",
    },
  ];

  return (
    <div id="attorneys" className="py-16 px-4 max-w-7xl mx-auto space-y-12">
      {/* Page Title */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-gray-900">
          Get To Know Our Attorneys
        </h1>
        <p className="text-xl text-gray-600">
          Meet the legal minds behind Pugh & Karpov
        </p>
      </section>

      {/* Attorney Cards */}
      <div className="space-y-12">
        {attorneys.map((attorney, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center"
            >
              {/* Image & Badge Wrapper */}
              <div className={`relative flex-shrink-0 w-full md:w-80 ${isEven ? "" : "md:order-last"}`}>
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-80 md:h-96 object-cover rounded-xl shadow-md"
                />
                <div className="absolute bottom-4 left-4 bg-[#111827] backdrop-blur-sm text-white px-5 py-3 rounded-lg text-sm font-semibold shadow">
                  {attorney.year}
                </div>
              </div>

              {/* Text / Bio */}
              <div className="space-y-4 flex-1">
                <h2 className="text-3xl font-bold text-gray-900">
                  {attorney.name}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {attorney.bio}
                </p>
                <div>
                  <span className="inline-block bg-[#9a8b50] px-5 py-2 text-white italic rounded-xl text-sm md:text-base shadow-sm">
                    {attorney.point}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;