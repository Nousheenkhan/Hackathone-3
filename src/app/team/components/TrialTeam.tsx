
// "use client";
// import { Montserrat } from "next/font/google";
// import Image from "next/image";
// import React from "react";

// const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// const TrialTeam = () => {
//   return (
//     <div>
//       <div className="w-full h-[282px] flex flex-col justify-center items-center text-center space-y-12 mx-auto mt-36">
//         <h2
//           className={`${montserrat.className} w-full md:w-full lg:w-full text-center font-bold text-[32px] md:text-[40px] lg:text-[30px] text-myDark`}
//         >
//           <span className="block md:inline hover:text-blue-500">
//             Start your
//           </span>
//           <span className="block md:inline hover:text-blue-500">
//             14 days free trial
//           </span>
//         </h2>

//         <div className=" items-center">
//           <p
//             className={`${montserrat.className} w-full md:w-[451px] lg:w-[451px] font-normal text-[8] md:text-sm  text-myGrey px-4 hover:text-blue-500`}
//           >
//             Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
//             RELIT official consequent.
//           </p>
//         </div>

//         <div className="w-[186px] h-[52px] rounded-md  bg-myBlue mx-auto py-4 mt-6">
//           <h6
//             className={`${montserrat.className}  text-center font-bold text-[14px] items-center text-white mx-auto hover:text-black`}
//           >
//             Try for free
//           </h6>
//         </div>
//         {/* social icons */}
//         <div className="w-[313px]  mx-auto flex justify-evenly pb-24 md:pb-0 lg:pb-0">
//           {/* Twitter Icon */}
//           <div>
//             <Image
//               src="/img/twitter.png" // Small image
//               alt="Twitter"
//               width={30}
//               height={30}
//               className="object-cover w-[30px] h-[30px]"
//             />
//           </div>
//           {/* Facebook Icon */}
//           <div>
//             <Image
//               src="/img/facebook.png" // Small image
//               alt="Facebook"
//               width={30}
//               height={30}
//               className="object-cover w-[30px] h-[30px]"
//             />
//           </div>
//           {/* Instagram Icon */}
//           <div>
//             <Image
//               src="/img/instagram.png" // Small image
//               alt="Instagram"
//               width={30}
//               height={30}
//               className="object-cover w-[30px] h-[30px]"
//             />
//           </div>
//           {/* LinkedIn Icon */}

//           <div>
//             <Image
//               src="/img/linkedin.png" // Small image
//               alt="LinkedIn"
//               width={30}
//               height={30}
//               className="object-cover w-[30px] h-[30px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrialTeam;


"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const TrialTeam = () => {
  return (
    <div className="w-full h-[282px] flex flex-col justify-center items-center text-center space-y-12 mx-auto mt-36">
      <h2
        className={`${montserrat.className} text-center font-bold text-[32px] md:text-[40px] lg:text-[30px] text-myDark`}
      >
        <span className="block md:inline hover:text-blue-500">Start your</span>
        <span className="block md:inline hover:text-blue-500"> 14 days free trial</span>
      </h2>

      <div className="text-center">
        <p
          className={`${montserrat.className} md:w-[451px] font-normal text-xs md:text-sm text-myGrey px-4 hover:text-blue-500`}
        >
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
        </p>
      </div>

      <div className="w-[186px] h-[52px] rounded-md bg-myBlue mx-auto flex justify-center items-center mt-6">
        <h6
          className={`${montserrat.className} text-center font-bold text-sm text-white hover:text-black`}
        >
          Try for free
        </h6>
      </div>

      {/* Social icons */}
      <div className="w-[313px] flex justify-evenly pb-24 md:pb-0">
        {[
          { src: "/img/twitter.png", alt: "Twitter" },
          { src: "/img/facebook.png", alt: "Facebook" },
          { src: "/img/instagram.png", alt: "Instagram" },
          { src: "/img/linkedin.png", alt: "LinkedIn" }
        ].map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={30}
            height={30}
            className="object-cover w-[30px] h-[30px]"
          />
        ))}
      </div>
    </div>
  );
};

export default TrialTeam;
