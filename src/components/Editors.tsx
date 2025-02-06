import React from "react";
import Image from "next/image";

const Editors = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="w-full text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">EDITOR&apos;S PICK</h2>
        <p className="text-lg text-gray-600 mt-4">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Flexbox Layout for Images */}
      <div className="container mx-auto mt-10 px-4 ml-60">
        <div className="flex flex-col lg:flex-row justify-center gap-6">
          {/* First Row with two large images */}
          <div className="flex w-full lg:w-1/2 gap-6 justify-center items-center flex-wrap">
            <div className="relative w-full lg:w-1/2 group mb-6">
              <Image
                src="/img/img1.png"
                alt="Men"
                layout="responsive"
                width={500}
                height={500}
                className="transition transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-white hover:bg-black text-black hover:text-white bg-opacity-75 p-2 group-hover:bg-opacity-90 mb-6 ml-4">
                <span className="font-bold">MAN</span>
              </div>
            </div>
            <div className="relative w-full lg:w-auto ml-8 group mb-6">
              <Image
                src="/img/filter1.png"
                alt="Women"
                layout="responsive"
                width={500}
                height={520}
                className="transition transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-white hover:bg-black text-black hover:text-white bg-opacity-75 p-2 group-hover:bg-opacity-90 mb-6 ml-4">
                <span className="font-bold">WOMEN</span>
              </div>
            </div>
          </div>

          {/* Second Row with two small images stacked vertically */}
          <div className="flex flex-col lg:w-1/2 gap-4 justify-center items-center">
            <div className="relative w-full group mb-6">
              <Image
                src="/img/img4.png"
                alt="Accessories"
                layout="intrinsic"
                width={150}
                height={150}
                className="transition transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-white hover:bg-black text-black hover:text-white bg-opacity-75 p-2 group-hover:bg-opacity-90 mb-6 ml-4">
                <span className="font-bold">ACCESORIES</span>
              </div>
            </div>
            <div className="relative w-full group mb-6">
              <Image
                src="/img/filter2.png"
                alt="Kids"
                layout="intrinsic"
                width={150}
                height={150}
                className=" object-cover transition transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-white hover:bg-black text-black hover:text-white bg-opacity-75 p-2 group-hover:bg-opacity-90 mb-6 ml-4">
                <span className="font-bold">KIDS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editors;
