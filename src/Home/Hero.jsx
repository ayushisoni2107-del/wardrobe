import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="flex justify-start pl-14 gap-6 py-6 pb-7">

        {/* Sale - Black */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-40 h-40 rounded-full bg-black text-white flex items-center justify-center font-semibold text-5xl">
            Sale
          </div>
          <p className="mt-2 text-lg">Sale</p>
        </div>

        {/* Need Help - Red on Hover */}
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="w-40 h-40 rounded-full border-4 border-red-500 text-red-500 flex items-center justify-center font-semibold
      group-hover:bg-red-500 group-hover:text-white transition text-2xl">
            Need Help?
          </div>
          <p className="mt-2 text-lg">Need Help?</p>
        </div>
        {/* New Arrivals */}
        <Link to="/new" className="flex flex-col items-center cursor-pointer">
          <div className="w-40 h-40 rounded-full border-4 border-gray-300 flex items-center justify-center font-semibold"></div>
          <p className="mt-2 text-lg">New Arrivals</p>
        </Link>
        <Link to="/new" className="flex flex-col items-center cursor-pointer">
          <div className="w-40 h-40 rounded-full border-4 border-gray-300 flex items-center justify-center font-semibold"></div>
          <p className="mt-2 text-lg">Best Seller</p>
        </Link>
        <Link to="/new" className="flex flex-col items-center cursor-pointer">
          <div className="w-40 h-40 rounded-full border-4 border-gray-300 flex items-center justify-center font-semibold"></div>
          <p className="mt-2 text-lg">Top Rated</p>
        </Link>
        <Link to="/new" className="flex flex-col items-center cursor-pointer">
          <div className="w-40 h-40 rounded-full border-4 border-gray-300 flex items-center justify-center font-semibold"></div>
          <p className="mt-2 text-lg">Brands We Love</p>
        </Link>
        <Link to="/new" className="flex flex-col items-center cursor-pointer">
          <div className="w-40 h-40 rounded-full border-4 border-gray-300 flex items-center justify-center font-semibold"></div>
          <p className="mt-2 text-lg">Trending</p>
        </Link>
      </div>
    </>
  );
} export default Hero