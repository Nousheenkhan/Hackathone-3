
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Work = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch h-[500px]">
      {/* Content Section */}
      <div className="w-full lg:w-1/2 bg-[#2A7CC7] flex flex-col justify-center items-center lg:items-start px-6 lg:px-16">
        <h5 className={`${montserrat.className} font-bold text-sm lg:text-lg text-white`}>
          WORK WITH US
        </h5>
        <h1 className={`${montserrat.className} font-bold text-2xl lg:text-4xl text-white mt-2`}>
          Now Let’s grow Yours
        </h1>
        <p className="text-white text-sm lg:text-lg mt-4">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th.
        </p>
        <button className="mt-6 px-6 py-3 text-white font-bold border border-white rounded hover:text-blue-500">
          Button
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/img/shop14.png"
          alt="shop"
          width={510}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Work;



