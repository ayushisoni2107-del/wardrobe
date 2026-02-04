import React from "react";

function Footer() {
  return (
    <>
      <div className="py-16 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="w-full lg:w-auto text-center lg:text-left">
            <p className="text-amber-600 text-lg sm:text-xl font-bold mb-6">
              Important Links
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-gray-700 text-sm sm:text-base">
              <div className="space-y-3">
                <p className="cursor-default hover:text-orange-500 transition transform hover:scale-105 duration-200">All Products</p>
                <p className="cursor-default hover:text-orange-500 transition transform hover:scale-105 duration-200">New Arrivals</p>
                <p className="cursor-default hover:text-orange-500 transition transform hover:scale-105 duration-200">Collections</p>
                <p className="cursor-default hover:text-orange-500 transition transform hover:scale-105 duration-200">Best Seller</p>
              </div>
              <div className="space-y-3">
                <p className="cursor-default hover:text-orange-500 transition transform hover:scale-105 duration-200">About Us</p>
                <p className="cursor-default hover:text-orange-500 transition transform hover:scale-105 duration-200">Contact Us</p>
                <p className="cursor-default hover:text-orange-500 transition transform hover:scale-105 duration-200">Terms & Conditions</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto flex justify-center">
            <img src="/Logo.png" className="border border-amber-600 py-8 px-10 rounded-2xl w-48 sm:w-56 md:w-60 h-auto object-contain" alt="Logo" />
          </div>
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-4 text-gray-700 text-sm sm:text-base">
              <span className="text-amber-500 font-bold">Address:</span>
              <span>Lorem Ipsum dolor sit amet, Lorem ipsum dolor sit amet</span>
              <span className="text-amber-500 font-bold">Email:</span>
              <span>demo@gmail.com</span>
              <span className="text-amber-500 font-bold">Phone:</span>
              <span>(+91) 2434 59453</span>
              <span className="text-amber-500 font-bold">Follow Us:</span>
              <div className="flex gap-4 flex-wrap">
                {["/y.png", "/in.png", "/f.png", "/g.png"].map((icon, i) => (
                  <div key={i} className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                    <img src={icon} className="w-5 h-5" />
                  </div>))}
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-orange-500 transition"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FF6A0D] py-3 px-4 sm:px-7 flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
        <p className="text-white text-sm sm:text-lg">All rights reserved by @demo</p>
        <p className="text-white text-sm sm:text-lg">Design & Developed by Pruthatek</p>
      </div>
    </>
  );
} export default Footer