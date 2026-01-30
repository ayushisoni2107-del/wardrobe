import React from "react";

function Shop() {
  return (
    <>
      <div className="bg-[#D2D4AB] h-87.5 sm:h-100 md:h-125 lg:h-140 pt-6 sm:pt-8 md:pt-10">
        <div className="pl-4 sm:pl-8 md:pl-24 lg:pl-36 pt-6 sm:pt-10 md:pt-24">
          <h1 className="font-playfair text-[30px] sm:text-[40px] md:text-[60px] lg:text-[70px] tracking-widest sm:tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.25em] uppercase font-light text-[#8A7B00]">
            Dress
          </h1>
          <p className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide text-gray-700">
            UP TO 30% OFF
          </p>
          <button className=" mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-white rounded-full shadow text-xs sm:text-sm md:text-base hover:bg-amber-600 hover:text-white transition">
            Shop Now
          </button>
        </div>
      </div>

    </>
  );
} export default Shop