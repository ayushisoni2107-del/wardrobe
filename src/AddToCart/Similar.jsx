import React from "react";
import { Link } from "react-router-dom";
import Newscart from "../New/Newscart"


function Similar() {
  return (
    <>
      <div className="flex items-center md:gap-1 ">
        <img src="/leaf.png" className="h-12 sm:h-24 md:h-36 lg:h-52 object-contain opacity-50 " />
        <div>
          <h1 className="font-serifPro text-4xl md:text-5xl tracking-widest font-playfair">
            <span className="text-orange-500 pr-3">SIMILAR</span>
            <span className="text-gray-800">STYLES</span>
          </h1>
          <p className="mt-2 text-gray-500 text-sm md:text-base tracking-wide">
            Fresh Selections
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
        <div className="pt-12 pl-12">

          <div className="relative h-72 w-64  rounded group overflow-hidden bg-white">
            <div className="absolute  left-0 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-r-full">
              <p>40% OFF</p>
            </div>

            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="relative group/icon">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> ⇄</button>
                <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
              </div>
              <div className="relative group/icon">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">👁</button>
                <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>
              <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>

          <p className="font-bold">Chaniya Choli Kids</p>
          <div className="flex flex-row gap-2">
            <p className="text-orange-500">Rs 2000</p>
            <p className="line-through text-gray-500">Rs 4000</p>
          </div>
          <div className="relative inline-block group cursor-pointer">
            <span>3 colors</span>
            <div className="absolute left-0 mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-4 h-4 bg-fuchsia-500 rounded"></div>
              <div className="w-4 h-4 bg-stone-950 rounded"></div>
              <div className="w-4 h-4 bg-green-600 rounded"></div>
            </div>
          </div>
        </div>

        <div className="pt-12 pl-12">

          <div className="relative h-72 w-64  rounded group overflow-hidden bg-white">
            <div className="absolute  left-0 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-r-full">
              <p>40% OFF</p>
            </div>

            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="relative group/icon">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> ⇄</button>
                <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
              </div>
              <div className="relative group/icon">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">👁</button>
                <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>
              <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>

          <p className="font-bold">Chaniya Choli Kids</p>
          <div className="flex flex-row gap-2">
            <p className="text-orange-500">Rs 2000</p>
            <p className="line-through text-gray-500">Rs 4000</p>
          </div>
          <div className="relative inline-block group cursor-pointer">
            <span>3 colors</span>
            <div className="absolute left-0 mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-4 h-4 bg-fuchsia-500 rounded"></div>
              <div className="w-4 h-4 bg-stone-950 rounded"></div>
              <div className="w-4 h-4 bg-green-600 rounded"></div>
            </div>
          </div>
        </div>

        <div className="pt-12 pl-12">

          <div className="relative h-72 w-64  rounded group overflow-hidden bg-white">
            <div className="absolute  left-0 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-r-full">
              <p>40% OFF</p>
            </div>
            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="relative group/icon">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> ⇄</button>
                <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
              </div>
              <div className="relative group/icon">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">👁</button>
                <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>
              <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>

          <p className="font-bold">Chaniya Choli Kids</p>
          <div className="flex flex-row gap-2">
            <p className="text-orange-500">Rs 2000</p>
            <p className="line-through text-gray-500">Rs 4000</p>
          </div>
          <div className="relative inline-block group cursor-pointer">
            <span>3 colors</span>
            <div className="absolute left-0 mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-4 h-4 bg-fuchsia-500 rounded"></div>
              <div className="w-4 h-4 bg-stone-950 rounded"></div>
              <div className="w-4 h-4 bg-green-600 rounded"></div>
            </div>
          </div>
        </div>

        <div className="pt-12 pl-12">

          <div className="relative h-72 w-64  rounded group overflow-hidden bg-white">
            <div className="absolute  left-0 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-r-full">
              <p>40% OFF</p>
            </div>

            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="relative group/icon">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> ⇄</button>
                <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
              </div>
              <div className="relative group/icon">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">👁</button>
                <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>
              <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>

          <p className="font-bold">Chaniya Choli Kids</p>
          <div className="flex flex-row gap-2">
            <p className="text-orange-500">Rs 2000</p>
            <p className="line-through text-gray-500">Rs 4000</p>
          </div>
          <div className="relative inline-block group cursor-pointer">
            <span>3 colors</span>
            <div className="absolute left-0 mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-4 h-4 bg-fuchsia-500 rounded"></div>
              <div className="w-4 h-4 bg-stone-950 rounded"></div>
              <div className="w-4 h-4 bg-green-600 rounded"></div>
            </div>
          </div>
        </div>
        <div className="col-span-full flex justify-center mt-8">
          <Link to="/Newscart"><button className="rounded-4xl px-3 py-3 hover:border text-sm">View All</button></Link>
        </div>
      </div >
    </>
  );
} export default Similar