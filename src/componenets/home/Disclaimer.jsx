import React from "react";
import { FaFileLines } from "react-icons/fa6";

function Disclaimer() {
  return (
    <div className="bg-white px-6 py-5 md:px-10">
      <section
        id="legal-disclaimer"
        className="relative mx-auto flex max-w-7xl items-center gap-5 overflow-hidden border-l-4 border-yellow-400 bg-[#0b4d87] px-5 py-6 text-white shadow-md sm:gap-7 sm:px-8 md:py-7"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 24, 39, 0.75), rgba(17, 24, 39, 0.75)), url('/dis.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center 85%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FaFileLines
          aria-hidden="true"
          className="h-10 w-10 shrink-0 text-white sm:h-12 sm:w-12"
        />
        <div className="relative z-10 space-y-2">
          <h2 className="font-serif text-lg font-semibold text-white sm:text-xl">
            Legal Disclaimer :
          </h2>

          <p className="max-w-5xl text-[10px] leading-5 text-white/85 sm:text-xs">
            The use of the internet or the email contact form for communication
            does not establish an attorney-client relationship. Attorneys of
            Pugh and Karpov Law PC do not guarantee any particular outcome of
            the representation. Every case is different and fact-specific, and
            the results obtained will be related to the facts and merits of the
            particular case.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Disclaimer;
