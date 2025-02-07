

"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const Products = () => {

  useEffect(() => {
    console.log("Best component rendered");
  }, []);

  return (
    <div className="h-auto w-full bg-white mx-auto py-10">
      <h2 className="w-full text-center px-4 text-[#737373]">Featured Products</h2>
      <div className="w-full text-center px-4">
        <h1 className="text-3xl font-bold text-[#252B42] mt-4">BESTSELLER PRODUCTS</h1>
        <p className="text-sm text-[#737373] mt-4">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Cards */}
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-lg leading-10 overflow-hidden transition transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/50"
          >
            <Image
              src={`/img/product${index + 1}.png`}
              alt={`Product ${index + 1}`}
              layout="responsive"
              width={500}
              height={500}
            />
            <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">$16.48</span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">$6.48</span>
            </div>
            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 py-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Product Section */}
      <div className="w-full rounded-[5px] relative bg-[#23856D] mt-[0px] border">
        <div className="w-full h-[709px] flex justify-center items-center">
          <div className="flex w-full max-w-screen-xl px-10 gap-[80px]">
            <div className="w-1/2 flex flex-col gap-[30px] pt-[60px]">
              <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white">SUMMER 2020</h4>
              <h1 className="font-Montserrat font-bold text-[58px] leading-[80px] text-white">Vita Classic Product</h1>
              <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white">
                We know how large objects will act, We know how are objects will act, We know
              </p>
              <div className="flex gap-[34px]">
                <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-white">$16.48</h3>
                <button className="w-[184px] h-[52px] rounded-[5px] px-[40px] bg-[#2DC071] py-[15px] flex gap-[10px]">
                  <h1 className="font-Montserrat text-[14px] leading-[22px] flex text-white justify-center">ADD TO CART</h1>
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src="/img/hero2.png"
                alt="Men"
                layout="responsive"
                width={510}
                height={685}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
