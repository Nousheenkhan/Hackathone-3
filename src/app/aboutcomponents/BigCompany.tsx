
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const BigCompany = () => {
  const companies = [
    { src: "/img/shop5.png", alt: "company-img-1", width: 153, height: 34 },
    { src: "/img/shop6.png", alt: "company-img-2", width: 146, height: 59 },
    { src: "/img/shop7.png", alt: "company-img-3", width: 152, height: 15 },
    { src: "/img/shop8.png", alt: "company-img-4", width: 151, height: 42 },
    { src: "/img/shop9.png", alt: "company-img-5", width: 151, height: 62 },
    { src: "/img/shop10.png", alt: "company-img-6", width: 151, height: 72 },
  ];

  return (
    <section className="bg-black/[0.02] flex flex-col items-center text-center w-full h-auto mx-auto mt-40 px-6 lg:px-0">
      {/* Heading */}
      <h2
        className={`${montserrat.className} font-bold text-[40px] text-myDark py-12 hover:text-blue-500`}
      >
        Big Companies Are Here
      </h2>

      {/* Description */}
      <p
        className={`${montserrat.className} font-normal text-sm text-myGrey mt-4 lg:w-[547px] hover:text-blue-500`}
      >
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center w-full lg:w-[900px] mx-auto mt-12">
        {companies.map((company, index) => (
          <Image
            key={index}
            src={company.src}
            alt={company.alt}
            width={company.width}
            height={company.height}
            className="transform transition duration-500 hover:scale-110 mx-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default BigCompany;

