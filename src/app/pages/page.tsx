// 
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";


export default function Pages() {
  return (
    <div className="relative">
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
      <div className="w-full h-auto py-[24px] bg-[#FAFAFA] relative">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-start gap-[15px]">
          <div className="flex items-center gap-[15px]">
            <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
              Home
            </div>
            <Image src="/img/right.png" alt="arrow" width={8.26} height={6} />
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
              Shop
            </h6>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container relative mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
        {/* Left Section - Image Slider */}
        <div className="flex-1">
          <div className="relative">
            <Image
              src="/img/hero5.png"
              alt="Product Image"
              className="rounded-lg"
              width={600}
              height={400}
            />
            {/* Arrows */}
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex mt-4 gap-4">
            <Image
              src="/img/sofa1.png"
              alt=""
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
            <Image
              src="/img/sofa2.png"
              alt="Thumbnail 2"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1">
          {/* Product Title and Rating */}
          <h1 className="text-2xl font-semibold text-gray-800">
            Floating Phone
          </h1>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-300"
              >
                <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
              </svg>
            </span>
            <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
          </div>

          {/* Price and Availability */}
          <p className="text-xl font-Montserrat font-semibold text-black mt-4">
            $1,139.33
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Availability:{" "}
            <span className="text-[#23A6F0] font-medium">In Stock</span>
          </p>

          {/* Description */}
          <p className="text-gray-700 mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
              Select Options
            </button>
            <div className="flex items-center gap-4">
              <Image
                src="/img/like.png"
                alt="heart"
                width={24}
                height={24}
                className=" cursor-pointer"
              />
              <Image src="/img/basket.png" alt="cart"     width={24}
                height={24} className="cursor-pointer" />
              <Image src="/img/eye.png" alt="eye"      width={24}
                height={24} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* ProductsCrads */}
      <div className="w-[1051px] h-[72px] flex absolute justify-around top-[900px] left-[193px] bottom-[70px]">
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">
          Description
        </span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">
          Additional Information
        </span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">
          Reviews
          <h1 className="text-sm leading-[24px] text-[#23856D]">(0)</h1>
        </span>
        <span className="w-[1049px] absolute top-[980px] border border-[#ECECEC]"></span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 py-8 md:py-12 items-center justify-center">
        {/* Image Section */}
        <div className="w-full lg:w-[323px] h-auto flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src="/img/home.png"
            alt="Interior Design"
            width={323}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row w-full lg:w-[65%] space-y-8 lg:space-y-0 gap-8">
          {/* Text Block */}
          <div className="w-full md:w-[332px] space-y-4 flex flex-col">
            <h2 className="text-[20px] md:text-[24px] font-Montserrat font-bold text-gray-800">
              the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* List Section */}
          <div className="space-y-6 flex flex-col gap-6">
            {/* First List */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold font-Montserrat text-gray-800 mb-[10px] md:mb-[20px]">
                the quick fox jumps over
              </h3>
              <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                <li className="flex items-center gap-2">
                  <Image src="/img/right.png" alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/img/right.png" alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/img/right.png" alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/img/right.png" alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>

            {/* Second List */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-gray-800">
                the quick fox jumps over
              </h3>
              <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                <li className="flex items-center gap-2">
                  <Image src="/img/right.png" alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/img/right.png" alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/img/right.png" alt="Arrow" width={12} height={12} />
                  the quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    <div className="relative bg-[#FAFAFA] w-full">
      <div className="max-w-[1440px] h-auto mx-auto">
        <div className="max-w-[1124px] py-[48px] flex flex-col gap-[24px] mx-auto">
          {/* Heading */}
          <div className="flex gap-[10px]">
            <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.2px] text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
          </div>
          {/* Line under the heading */}
          <div className="w-full h-[2px] bg-[#dbdbdb]"></div>
          {/* Products Section */}
          <div className="flex lg:flex-row gap-[30px] flex-col lg:ml-[0px] ml-[100px]">
            {/* Card 1 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src="/img/page1.png" alt="pic"  layout="responsive" width={239} height={280}   className="w-full h-full object-cover" />
              </div>
              <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">$16.48</span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">$6.48</span>
            </div>
            </div>
            {/* Card 2 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src="/img/page2.png" alt="pic"width={239} height={280} className="w-full h-full object-cover" />
              </div>
              <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">$16.48</span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">$6.48</span>
            </div>
            </div>
            {/* Card 3 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src="/img/page3.png" alt="pic" width={239} height={280} className="w-full h-full object-cover" />
              </div>
              <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">$16.48</span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">$6.48</span>
            </div>
            </div>
            {/* Card 4 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src="/img/page4.png" alt="pic" width={239} height={280}  layout="responsive" className="w-full h-full object-cover" />
              </div>
              <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">$16.48</span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">$6.48</span>
            </div>

            </div>
          </div>
          {/* Second Row */}
          <div className="flex lg:flex-row gap-[30px] flex-col lg:ml-[0px] ml-[100px]">
            {/* Card 5 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src="/img/page5.png" alt="pic" width={239} height={280} className="w-full h-full object-cover" />
              </div>
              <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">$16.48</span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">$6.48</span>
            </div>
            </div>
            {/* Card 6 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src="/img/page6.png" alt="pic" width={239} height={280} className="w-full h-full object-cover" />
              </div>
              <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">$16.48</span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">$6.48</span>
            </div>
            </div>
            {/* Card 7 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src="/img/page1.png" alt="pic" width={239} height={280} className="w-full h-full object-cover" />
              </div>
              <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">$16.48</span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">$6.48</span>
            </div>
            </div>
            {/* Card 8 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src="/img/page2.png" alt="pic" width={239} height={280} className="w-full h-full object-cover" />
              </div>
              <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">$16.48</span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">$6.48</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    {/* Companies */}
<div className="w-full bg-[#FAFAFA] py-8">
  <div className="max-w-[1124px] mx-auto">
    {/* Logo Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
      <div className="flex justify-center">
        <Image src="/img/shop5.png" alt="Client 1 Logo" width={153} height={34} />
      </div>
      <div className="flex justify-center">
        <Image src="/img/shop6.png" alt="Client 2 Logo"width={153} height={34}  className="h-12 w-auto" />
      </div>
      <div className="flex justify-center">
        <Image src="/img/shop7.png" alt="Client 3 Logo"width={153} height={34}  className="h-12 w-auto" />
      </div>
      <div className="flex justify-center">
        <Image src="/img/shop8.png" alt="Client 4 Logo"width={153} height={34}  className="h-12 w-auto" />
      </div>
      <div className="flex justify-center">
        <Image src="/img/shop9.png" alt="Client 5 Logo" width={153} height={34} className="h-12 w-auto" />
      </div>
      <div className="flex justify-center">
        <Image src="/img/shop10.png" alt="Client 6 Logo"width={153} height={34}  className="h-12 w-auto" />
      </div>
    </div>
  </div>
</div>

    </div>
  );
      {/* footer */}
      <Footer />
    </div>
  );
}