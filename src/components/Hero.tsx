

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[716px] relative">
      {/* Background Image */}
      <Image
        src="/img/hero.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Content Area */}
      <div className="relative w-full h-full flex flex-col sm:flex-row items-center justify-between px-8 sm:px-16 text-left z-10">
        {/* Left Content */}
        <div className="text-white max-w-lg mt-20 sm:mt-0 space-y-6">
          {/* SUMMER 2020 heading */}
          <p className="text-sm uppercase tracking-widest">Summer 2020</p>

          {/* NEW COLLECTION heading */}
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            NEW COLLECTION
          </h1>

          {/* Paragraph Description */}
          <p className="text-[#FAFAFA] text-sm sm:text-base leading-relaxed">
            We know how large objects will act, <br /> but things on a small
            scale.
          </p>

          {/* Shop Now Button */}
          <button className="text-base sm:text-lg font-semibold px-6 py-3 bg-[#2DC071] opacity-80 hover:opacity-100 hover:bg-green-700 hover:scale-105 transition-all duration-300 rounded-md">
            Shop Now
          </button>
        </div>

        {/* Right Image or Model */}
        <div className="hidden sm:block">
         
        </div>
      </div>
    </div>
  );
};

export default Hero;



