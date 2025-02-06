// import React from "react";
import Image from "next/image";

const Universe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-40 bg-white max-w-[1200px] py-28 px-10 md:px-12 mx-auto">
      <LeftSection />
      <RightSection />
    </div>
  );
};

const RightSection = () => (
  <div className="w-full md:w-[50%] flex justify-center">
    <Image
      src="/img/asian.png"
      width={400}
      height={360}
      alt="hero img"
      className="object-contain"
    />
  </div>
);

const LeftSection = () => (
  <div className="text-[#252B42] w-full md:w-[50%] text-center md:text-left gap-30px pt-60px">
    <div className="mb-4 gap-30px pt-60px">
      <span className="text-lg md:text-2xl">SUMMER 2020</span>
    </div>
    <div className="w-full max-w-[320px] mx-auto md:mx-0">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Part of the Neural Universe
      </h1>
      <p className="text-sm md:text-md mb-6">
        We know how large objects will act, but things on a small scale.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <ActionButton
          text="BUY NOW"
          bgColor="bg-[#2DC071]"
          textColor="text-white"
        />
        <ActionButton
          text="READ MORE"
          bgColor="bg-white"
          textColor="text-[#252B42]"
          borderColor="border-2 border-[#2DC071]"
        />
      </div>
    </div>
  </div>
);

const ActionButton = ({ text = "", bgColor = "", textColor = "", borderColor = "" }) => (
  <button
    className={`w-full md:w-auto ${bgColor} ${textColor} ${borderColor} font-bold text-sm md:text-md px-6 py-2 rounded hover:scale-105 transition-transform duration-200`}
  >
    {text}
  </button>
);

export default Universe;
