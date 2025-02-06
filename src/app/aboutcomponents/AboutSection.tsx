

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const AboutSection = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col md:flex-row lg:flex-row px-4 lg:px-20">
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start space-y-10 mx-auto mt-16 lg:mt-36 px-4 lg:px-0">
        <h5
          className={`${montserrat.className} text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
        >
          ABOUT COMPANY
        </h5>
        <h1
          className={`${montserrat.className} text-start font-bold text-3xl lg:text-5xl text-myDark hover:text-blue-500`}
        >
          ABOUT US
        </h1>
        <h4
          className={`${montserrat.className} text-center lg:text-start font-normal text-base lg:text-lg text-myDark hover:text-blue-500 lg:w-[376px]`}
        >
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="w-[214px] h-[52px] bg-myBlue text-white font-bold rounded-[5px] text-sm hover:text-blue-500">
          Get Quote Now
        </button>
      </div>

      {/* Right Content Image */}
      <div className="relative w-full mt-12 lg:mt-0">
        {/* Background Circles */}
        <div className="absolute inset-0">
          <div className="bg-myImageBackground absolute rounded-full w-[300px] h-[300px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] right-[35px] md:right-[30px] lg:right-[108px] bottom-[84px] md:bottom-[18px] lg:bottom-[120px]" />
          <div className="bg-myImageBackground absolute rounded-full w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] top-10 md:top-16 lg:top-[44px] left-[11px] md:left-[10px] lg:left-[-90px]" />
          <div className="bg-myImageBackground absolute rounded-full w-8 h-8 md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] bottom-[215px] md:bottom-[260px] lg:bottom-[350px] right-[-8px] md:right-[0px] lg:right-[60px]" />
          <div className="bg-myImageBackground2 absolute rounded-full w-4 h-4 md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px] top-16 md:top-32 lg:top-32 right-[2px] md:right-[26px] lg:right-[20px]" />
        </div>
        <Image
          src="/img/bg.png"
          alt="Background"
          width={450}
          height={645}
          className="relative lg:w-[450px] lg:h-[645px]"
        />
      </div>
    </div>
  );
};

export default AboutSection;

