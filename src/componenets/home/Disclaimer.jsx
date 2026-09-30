import React from 'react';

function Disclaimer() {
  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <section id="legal-disclaimer" className="bg-gradient-to-br from-[#9a8b50] to-[#80723e] text-white p-8 md:p-12 rounded-2xl shadow-lg border-l-4 border-[#111827] relative overflow-hidden">
        {/* Subtle decorative background watermark or badge effect */}
        <div className="absolute -right-10 -bottom-10 text-white/10 font-bold text-9xl select-none pointer-events-none">
          ⚖
        </div>

        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Legal Disclaimer :
            </h1>
          </div>
          
          <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-5xl">
            The use of the internet or the email contact form for communication does not establish an attorney-client relationship. Attorneys of Pugh and Karpov Law PC do not guarantee any particular outcome of the representation. Every case is different and fact-specific, and the results obtained will be related to the facts and merits of the particular case.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Disclaimer;