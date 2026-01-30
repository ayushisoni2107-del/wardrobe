import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="w-full">
        <div className="flex flex-row flex-nowrap items-center w-full pt-4 md:pt-14 pb-5 gap-2 md:gap-4 px-3 md:px-0">
          <div className="flex flex-1 items-center justify-start md:pl-24 gap-2">
            <img src="/inst.png" className="w-auto sm:w-auto md:w-auto lg:w-auto pr-1 md:pr-4" />
            <img src="/fac.png" className="w-auto sm:w-auto md:w-auto lg:w-auto pr-1 md:pr-4" />
            <img src="/what.png" className="w-auto sm:w-auto md:w-auto lg:w-auto pr-1 md:pr-4" />
            <img src="/yt.png" className="w-auto sm:w-auto md:w-auto lg:w-auto pr-1 md:pr-4" />
          </div>
          <div className="flex justify-center shrink-0">
            <img src="/Logo.png" className="w-auto sm:w-20 md:w-18 lg:w-auto object-contain" />
          </div>
          <div className="flex flex-1 items-center justify-center md:justify-end gap-2 md:pr-24">
            <img src="shape.png" className="w-auto sm:w-auto md:w-auto lg:w-auto pr-1 md:pr-4 cursor-pointer" />
            <img src="h.png" className="w-auto sm:w-auto md:w-auto lg:w-auto pr-1 md:pr-4 cursor-pointer" />
            <img src="c.png" className="w-auto sm:w-auto md:w-auto lg:w-auto pr-1 md:pr-4 cursor-pointer" />
            <img src="p.png" className="w-auto sm:w-auto md:w-auto lg:w-auto pr-1 md:pr-4 cursor-pointer" />
          </div>
        </div>
        <div className="w-full bg-[#1f1f1f] h-18">
          <ul className="flex justify-center items-center h-14 text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 pt-4 md:pt-7">
            <li className="px-2 sm:px-4 md:px-6 lg:px-10 cursor-pointer hover:text-white">All Products</li>
            <li className="px-2 sm:px-4 md:px-6 lg:px-10 cursor-pointer hover:text-white">Gown</li>
            <li className="px-2 sm:px-4 md:px-6 lg:px-10 cursor-pointer hover:text-white">Dresses</li>
            <li className="px-2 sm:px-4 md:px-6 lg:px-10 cursor-pointer hover:text-white">Suit Set</li>
            <li className="px-2 sm:px-4 md:px-6 lg:px-10 cursor-pointer hover:text-white">Top's</li>
            <li className="px-2 sm:px-4 md:px-6 lg:px-10 cursor-pointer hover:text-white">Co-Ord Set</li>
            <li className="px-2 sm:px-4 md:px-6 lg:px-10 cursor-pointer hover:text-white">Lehenga</li>
          </ul>
        </div>
        <div className="flex items-center justify-start flex-nowrap whitespace-nowrap overflow-hidden pt-3 md:pt-5 pb-4 md:pb-6 border-b-2 border-gray-500 text-[10px] sm:text-xs md:text-sm">
          <p className="font-semibold">Up To 30% Off |</p>
          <p className="underline underline-offset-1 px-1 sm:px-2 md:px-4 pr-3 sm:pr-8 md:pr-20">Shop Now</p>
          <p className="font-semibold">Extra 15% Off |</p>
          <p>Use Code:</p>
          <p className="text-amber-600 px-1 sm:px-2 md:pr-20 font-semibold">EXTRA15</p>
          <p className="font-semibold">Up To 30% Off |</p>
          <p className="underline underline-offset-1 px-1 sm:px-2 md:px-4 pr-3 sm:pr-8 md:pr-20"> Shop Now</p>
          <p className="font-semibold">Extra 15% Off |</p>
          <p>Use Code:</p>
          <p className="text-amber-600 px-1 sm:px-2 md:pr-24 font-semibold">EXTRA15</p>
          <p className="font-semibold">Up To 30% Off |</p>
          <p className="underline underline-offset-1 px-1"> Shop Now</p>
        </div>
      </nav>
    </>
  );
} export default Navbar