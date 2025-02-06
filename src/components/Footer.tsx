
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white relative">
      {/* Top Section */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
          <div className="flex space-x-4">
            <FaInstagram className="text-blue-400 hover:text-blue-500 cursor-pointer text-xl" />
            <FaFacebook className="text-blue-400 hover:text-blue-500 cursor-pointer text-xl" />
            <FaTwitter className="text-blue-400 hover:text-blue-500 cursor-pointer text-xl" />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 px-6">
          {/* Company Info */}
          <div>
            <h2 className="text-gray-800 text-base font-bold">Company Info</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-gray-600 text-sm">About Us</a>
              <a href="#" className="text-gray-600 text-sm">Careers</a>
              <a href="#" className="text-gray-600 text-sm">We Are Hiring</a>
              <a href="#" className="text-gray-600 text-sm">Blog</a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-gray-800 text-base font-bold">Legal</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-gray-600 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 text-sm">Cookies</a>
              <a href="#" className="text-gray-600 text-sm">Refund Policy</a>
            </nav>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-gray-800 text-base font-bold">Features</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-gray-600 text-sm">Business Marketing</a>
              <a href="#" className="text-gray-600 text-sm">User Analytics</a>
              <a href="#" className="text-gray-600 text-sm">Live Chat</a>
              <a href="#" className="text-gray-600 text-sm">Unlimited Support</a>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-gray-800 text-base font-bold">Resources</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-gray-600 text-sm">iOS & Android</a>
              <a href="#" className="text-gray-600 text-sm">Watch a Demo</a>
              <a href="#" className="text-gray-600 text-sm">Customers</a>
              <a href="#" className="text-gray-600 text-sm">API</a>
            </nav>
          </div>

          {/* Get in Touch */}
          <div>
            <h2 className="text-gray-800 text-base font-bold">Get In Touch</h2>
            <div className="mt-3">
              <form className="relative">
                <input
                  type="email"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-gray-100 text-sm"
                  placeholder="Your Email"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-12 px-4 bg-blue-500 text-white rounded-r-lg"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-600 text-xs mt-2">
                Stay updated with our latest news and offers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <p className="text-gray-600 text-sm">
            Made with love by Finland. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <FaInstagram className="text-blue-400 text-xl" />
            <FaFacebook className="text-blue-400 text-xl" />
            <FaTwitter className="text-blue-400 text-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
}
