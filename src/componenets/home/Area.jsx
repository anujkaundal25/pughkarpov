import React from "react";

function Area() {
  const areas = [
    "Bankruptcy",
    "Criminal Defense",
    "Traffic Tickets",
    "Personal Injury",
    "Civil Litigation",
  ];

  return (
    <div>
      <section
        id="practice-areas"
        aria-labelledby="experience-heading"
        className="relative isolate bg-cover bg-center px-6 py-14 md:min-h-[350px] md:py-0 flex flex-col justify-center"
        style={{ backgroundImage: "url('/area.webp')",backgroundPosition: "fixed" }}
      >
        {/* Dark overlay to ensure contrast */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content container with higher z-index to stay sharp */}
        <div className="relative z-10 max-w-6xl mx-auto w-full text-center py-12">
          <h1
            id="experience-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-wide"
          >
            Areas of Practice
          </h1>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {areas.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 p-5 rounded-lg shadow-lg font-semibold transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center min-h-[50px]"
              >
                <span className="text-center">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Area;