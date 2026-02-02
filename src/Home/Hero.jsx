import React from "react";
import { Link } from "react-router-dom";
import Newscart from "../New/Newscart"

function Hero() {
  return (
    <>
      <div className="  flex flex-nowrap justify-center md:justify-start md:pl-14 gap-1 sm:gap-2 md:gap-6 py-3 md:py-6 px-2 md:px-0 overflow-hidden">
        <div className="flex flex-col items-center cursor-pointer">
          <div className=" w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-39.5 lg:h-39.5 rounded-full bg-black text-white flex items-center justify-center font-semibold text-[10px] sm:text-xs md:text-lg lg:text-5xl">
            Sale
          </div>
          <p className="  mt-0.5 sm:mt-1 md:mt-2 text-[9px] sm:text-xs md:text-sm lg:text-lg text-center"> Sale </p>
        </div>
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-39.5 lg:h-39.5 rounded-full border-2 sm:border-4 border-red-500 text-red-500 flex items-center justify-center font-semibold text-[10px] sm:text-xs md:text-lg lg:text-2xl group-hover:bg-red-500 group-hover:text-white transition">
            Need Help?
          </div>
          <p className="  mt-0.5 sm:mt-1 md:mt-2 text-[9px] sm:text-xs md:text-sm lg:text-lg text-center group-hover:text-red-600">
            Need Help?
          </p>
        </div>
        {["New Arrivals", "Best Seller", "Top Rated", "Brands We Love", "Trending",].map((item, i) => (
          <Link to="/Newscart" key={i} className="flex flex-col items-center cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-39.5 lg:h-39.5 rounded-full border-2 sm:border-4 border-gray-300 flex items-center justify-center font-semibold"></div>
            <p className="  mt-0.5 sm:mt-1 md:mt-2 text-[9px] sm:text-xs md:text-sm lg:text-lg text-center">
              {item}
            </p>
          </Link>))}
      </div>
    </>
  );
} export default Hero