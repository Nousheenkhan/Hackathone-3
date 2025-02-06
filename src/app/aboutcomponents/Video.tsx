import Image from "next/image";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Video = () => {
  const textClass = `${montserrat.className} text-myDark hover:text-blue-500`;
  const subTextClass = `${montserrat.className} text-myGrey mt-16 lg:mt-0 px-8 lg:px-0 hover:text-blue-500`;
  const statClass = `${montserrat.className} text-myDark hover:text-blue-500`;

  return (
    <div className="bg-black/[0.02] lg:bg-white">
      {/* content */}
      <div className="w-full flex justify-evenly flex-wrap mt-8">
        <div className="w-[394px] h-[140px] flex flex-col justify-between">
          <p className={`${textClass} text-center lg:text-start font-normal text-sm`}>
            Problems trying
          </p>
          <h3 className={`${textClass} text-center lg:text-start font-bold text-[24px]`}>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="w-[529px] h-[40px]">
          <p className={`${subTextClass} text-justify lg:text-start font-normal text-sm`}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      {/* stats review customers */}
      <div className="w-full space-y-12 lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-32">
        {[
          { number: "15K", label: "Happy Customers" },
          { number: "150K", label: "Monthly Visitors" },
          { number: "15", label: "Countries Worldwide" },
          { number: "100+", label: "Top Partners" }
        ].map(({ number, label }) => (
          <div key={label} className="space-y-4">
            <h1 className={`${statClass} text-center font-bold text-[58px]`}>
              {number}
            </h1>
            <h5 className={`${statClass} text-center font-bold text-[16px]`}>
              {label}
            </h5>
          </div>
        ))}
      </div>

      {/* video */}
      <div className="relative w-full flex justify-center items-center mt-6 px-5">
        <Image
          src="/img/vide.png"
          alt="Vide"
          width={540}
          height={989}
          className="rounded-lg shadow-lg transform transition duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Video;

