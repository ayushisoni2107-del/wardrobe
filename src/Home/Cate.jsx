import React from "react";
import { useEffect, useRef } from "react";

function Slider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (slider) {
        slider.scrollLeft += 1; // speed
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-10">
      <div className="bg-[#F9F6EE] h-140 ">
        <div className="items-center flex justify-center pt-7 font-playfair">
          <span className="text-4xl items-center text-amber-600 pr-3">CATEGORIES</span>
          <span className="text-4xl">YOU MIGHT LIKE</span>
        </div>
        <div className="flex justify-center items-center pt-3">
          <span className="text-gray-500 items-center">Lorem ispum dolor sit amet.</span>
        </div>

        <div ref={sliderRef} className="pl-8 pt-3 flex gap-6 overflow-x-auto no-scrollbar scroll-smooth">

          <div className="group flex flex-col items-center ">
            <div className=" relative box-border h-96 w-64 group-hover:bg-gray-200 rounded-full transition group">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-2xl">
                  ↗
                </div>
              </div>
            </div>
            <div className="text-center cursor-pointer">
              <p className="text-lg font-medium group-hover:text-black transition">
                Gown
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition">
                20 Products
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center">
            <div className="relative box-border h-96 w-64 group-hover:bg-gray-200 rounded-full transition group">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-2xl">
                  ↗
                </div>
              </div>
            </div>
            <div className="text-center cursor-pointer">
              <p className="text-lg font-medium group-hover:text-black transition">
                Dresses
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition">
                20 Products
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center">
            <div className="relative transition group box-border h-96 w-64 group-hover:bg-gray-200 rounded-full">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-2xl">
                  ↗
                </div>
              </div>
            </div>
            <div className="text-center cursor-pointer">
              <p className="text-lg font-medium group-hover:text-black transition">
                Suit set
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition">
                20 Products
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center">
            <div className="relative transition group box-border h-96 w-64 group-hover:bg-gray-200 rounded-full">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-2xl">
                  ↗
                </div>
              </div>
            </div>
            <div className="text-center cursor-pointer">
              <p className="text-lg font-medium group-hover:text-black transition">
                Tops
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition">
                20 Products
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center">
            <div className="relative transition box-border h-96 w-64 group-hover:bg-gray-200 rounded-full">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-2xl">
                  ↗
                </div>
              </div>
            </div>
            <div className="text-center cursor-pointer">
              <p className="text-lg font-medium group-hover:text-black transition">
                Co-ord Set
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition">
                20 Products
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center">
            <div className="relative box-border h-96 w-64 group-hover:bg-gray-200 rounded-full transition group">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-2xl">
                  ↗
                </div>
              </div>
            </div>
            <div className="text-center cursor-pointer">
              <p className="text-lg font-medium group-hover:text-black transition">
                Lehenga
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition">
                20 Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
} export default Slider