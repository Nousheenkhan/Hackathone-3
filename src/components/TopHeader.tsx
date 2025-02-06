

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";

const TopHeader = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#252B42] text-white text-sm py-2">
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
  );
};

export default TopHeader;

