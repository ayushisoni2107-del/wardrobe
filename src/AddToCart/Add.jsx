import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Img from "./Img"
import Similar from "./Similar";
import Recent from "./Recent";
import Rating from "./Rating";
import SizeChart from "./SizeChart";
import Virtual from "./Virtual";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShare2, FiMapPin } from "react-icons/fi";


function Add() {
  const [openSizeChart, setOpenSizeChart] = useState(false);

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-6 md:pl-6 pt-6">
        <p className="text-sm sm:text-base text-gray-700">Home/Dresses/<span className="text-black"> Butterfly Cotton Frock</span> </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-4">
          <div className="flex md:flex-col gap-2 md:gap-3 overflow-hidden">
            <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-25 md:h-26.5 rounded border-2 shrink-0 border-amber-500"></div>

            <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-25 md:h-26.5 rounded border-2 border-gray-400 shrink-0"></div>

            <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-25 md:h-26.5 rounded border-2 border-gray-400 shrink-0"></div>

            <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-25 md:h-26.5 rounded border-2 border-gray-400 shrink-0"></div>

            <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-25 md:h-26.5 rounded border-2 border-gray-400 shrink-0"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 ">
            <div className="flex-1 flex justify-center md:justify-start">
              <div className="relative w-138.5 max-w-138.5 sm:max-w-100 md:max-w-138.5 h-145.75 sm:h-105 md:h-145.75  rounded border-2 border-gray-300 overflow-hidden">
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 text-sm sm:text-base font-medium  px-2 py-1 ">
                  4.2 ⭐ <span className="text-gray-600">1.2k</span>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-5">
              <h1 className="text-3xl font-bold">Butterfly Cotton Frock</h1>
              <div className="flex items-center gap-3">
                <span className="text-orange-500 text-xl font-semibold"> Rs 2000 </span>
                <span className="line-through text-gray-400"> Rs 4500</span>
                <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded">Rs 2500 off</span>
              </div>
              <div>
                <p className="font-medium mb-2">Select Colour</p>
                <div className="flex gap-2">
                  <span className="w-5 h-5 bg-teal-500 rounded"></span>
                  <span className="w-5 h-5 bg-cyan-300 rounded"></span>
                  <span className="w-5 h-5 bg-green-600 rounded"></span>
                  <span className="w-5 h-5 bg-orange-400 rounded"></span>
                  <span className="w-5 h-5 bg-pink-500 rounded"></span>
                  <span className="w-5 h-5 bg-indigo-800 rounded"></span>
                </div>
              </div>
              <div>
                <span className="font-medium">Select Size </span>
                <div className="flex flex-row gap-2 pt-3">
                  <div className="w-12.5 h-9 box-border border-2 border-amber-500 bg-orange-100 items-center rounded flex justify-center">
                    <p className="items-center text-amber-700">S</p>
                  </div>
                  <div className="w-12.5 h-9 box-border border-2 border-gray-400  items-center rounded flex justify-center">
                    <p className="items-center text-gray-600">M</p>
                  </div>
                  <div className="w-12.5 h-9 box-border border-2 border-gray-400  items-center rounded flex justify-center">
                    <p className="items-center text-gray-600">L</p>
                  </div>
                  <div className="w-12.5 h-9 box-border border-2 border-gray-400  items-center rounded flex justify-center">
                    <p className="items-center text-gray-600">XL</p>
                  </div>
                  <div className="w-12.5 h-9 box-border border-2 border-gray-400  items-center rounded flex justify-center">
                    <p className="items-center text-gray-600">XXL</p>
                  </div>
                  <div className="flex justify-items-end"><button
                    onClick={() => setOpenSizeChart(true)}
                    className="underline cursor-pointer"
                  >
                    Check Size Chart
                  </button></div>
                  <SizeChart
                    open={openSizeChart}
                    onClose={() => setOpenSizeChart(false)}
                  />
                </div>
              </div>
              <div>
                <span className="font-medium">Material</span>
                <div className="pt-2">
                  <span className="text-gray-500 font-medium">Rayon</span>
                </div>
              </div>
              <Link to="/Virtual">
                <div>
                  <img src="/t2.png"
                    className="w-150 h-29.5" />
                </div>
              </Link>
              <div className="flex flex-row gap-3">
                <div className="w-108.25 h-14 bg-orange-500 box-border flex justify-center items-center rounded">
                  <span className="items-center text-white font-medium">Add To Bag</span>
                </div>
                <div className="w-15 h-14 box-border border border-gray-500 flex justify-center items-center rounded group hover:bg-black hover:border-white">
                  <FiHeart size={22}
                    className="text-black group-hover:text-white"
                  />
                </div>
                <div className="w-15 h-14 box-border border border-gray-500 flex justify-center items-center rounded group hover:bg-black hover:border-white">
                  <FiShare2
                    size={22}
                    className="text-black group-hover:text-white transition"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold pb-3">Delivery To</h2>
                <div className="flex items-center border border-gray-300 rounded-md px-2 py-2">
                  <FiMapPin className="text-gray-500 mr-2" size={18} />
                  <input type="text" placeholder="Pincode" className="flex-1 outline-none text-sm" />
                  <p className="text-orange-500 font-medium text-sm ">Check</p>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600"> Delivery by 12 Jun, Thursday</span>
                  <span className="text-red-500 font-medium"> Save 20% on Your Purchase Today.</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="mt-0 md:mt-0 lg:-mt-12 pl-6">
        <img src="/t.png" className="w-170 h-29.5 max-w-170 " />
      </div>
      <Img />
      <Similar />
      <Recent />
      <Rating />
      <Footer />
    </>
  );
} export default Add