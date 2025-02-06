

"use client";

import Image from "next/image";
import Header from "@/components/Header";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";


interface Category {
  title: string;
  items: number;
  img: string;
}

interface Logo {
  name: string;
  img: string;
}

const Shop: React.FC = () => {
  const categories: Category[] = [
         { title: "CLOTHS", items: 5, img: "/img/shop3.png" },
         { title: "CLOTHS", items: 5, img: "/img/hero3.png" },
         { title: "CLOTHS", items: 5, img: "/img/shop2.png" },
        { title: "CLOTHS", items: 5, img: "/img/shop4.png" },
         { title: "CLOTHS", items: 5, img: "/img/shop1.png" },
    
  ];

  const logos: Logo[] = [
    { name: "Hooli", img: "/img/shop5.png" },
        { name: "Lyft", img: "/img/shop6.png" },
        { name: "Stripe", img: "/img/shop7.png" },
         { name: "AWS", img: "/img/shop8.png" },
         { name: "Rebbit", img: "/img/shop9.png" },
         { name: "aylians", img: "/img/shop10.png" },
   
  ];

  const productImages: string[] = [
    "/img/img1.png",
        "/img/blue.png",
        "/img/img11.png",
        "/img/yellow.png",
        "/img/shop11.png",
        "/img/shop12.png",
        "/img/shop13.png",
        "/img/shop14.png",
        "/img/shop15.png",
        "/img/shop17.png",
        "/img/shop18.png",
        "/img/shop19.png",
  
  ];

  return (
    <div className="bg-white py-8">
         <header>
                  {/* Top Bar */}
                  <div className="hidden md:block bg-[#23856D] text-white text-sm py-2">
                    <div className="container mx-auto flex justify-between items-center flex-wrap px-4 md:px-8">
                      {/* Contact Info */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <HiOutlinePhone className="text-base" />
                          <span>(225) 555-0118</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FontAwesomeIcon icon={faEnvelope} className="text-base text-white" />
                          <span>michelle.rivera@example.com</span>
                        </div>
                      </div>
            
                      {/* Follow Us */}
                      <div className="hidden md:flex items-center justify-center space-x-4">
                        <span className="hidden md:block">
                          Follow Us and get a chance to win 80% off
                        </span>
                      </div>
            
                      {/* Social Media Icons */}
                      <div className="flex justify-center items-center space-x-2 text-white">
                        <span className="hidden md:block">Follow Us:</span>
                        <FaInstagram className="hover:text-gray-400 cursor-pointer" />
                        <FaYoutube className="hover:text-gray-400 cursor-pointer" />
                        <FaFacebook className="hover:text-gray-400 cursor-pointer" />
                        <FaTwitter className="hover:text-gray-400 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </header>
      <Header />

      {/* Page Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
        <p className="text-sm text-gray-500 mt-1">Home &gt; Shop</p>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden group"
          >
            <Image
              src={category.img}
              alt={category.title}
              width={206}
              height={223}
              className="w-[206px] h-[223px] object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <div className="text-center">
                <h2 className="text-xl font-bold">{category.title}</h2>
                <p className="text-lg">{category.items} Items</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-wrap justify-between items-center gap-4">
        <p className="text-gray-600">Showing all 12 results</p>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <i className="fas fa-th"></i>
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <i className="fas fa-list"></i>
            </button>
          </div>
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Filter
          </button>
        </div>
      </section>

      {/* Logos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={logo.img}
              alt={logo.name}
              width={80}
              height={40}
              className="w-20 h-auto"
            />
          </div>
        ))}
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16 mt-8"
          >
            {productImages.slice(rowIndex * 4, (rowIndex + 1) * 4).map((image, index) => (
              <div
                key={index}
                className={`border rounded-lg shadow-md hover:shadow-lg overflow-hidden ${
                  index === 2 ? "border-purple-500" : "border-gray-200"
                }`}
              >
                <Image
                  src={image}
                  alt={`Product ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Graphic Design</h3>
                  <p className="text-gray-500 text-sm mb-3">
                    English Department
                  </p>
                  <div className="text-gray-500 flex justify-center gap-2 text-sm">
                    <span className="line-through">$16.48</span>
                    <span className="text-green-600 font-semibold">$6.48</span>
                  </div>
                  <div className="flex justify-center gap-2 mt-3">
                    {["blue-600", "gray-500", "orange-400", "black"].map(
                      (color, i) => (
                        <span
                          key={i}
                          className={`w-4 h-4 rounded-full bg-${color}`}
                        ></span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex justify-center">
  <Pagination />
</section>


    </div>
  );
};


export default Shop;



