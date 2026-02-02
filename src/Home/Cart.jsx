import React from "react";
import { FiX, FiEye } from "react-icons/fi";
import { HiArrowsRightLeft } from "react-icons/hi2";

/* ===============================
   PRODUCT CARD COMPONENT
================================ */
function ProductCard() {
  return (
    <div className="relative group border rounded overflow-hidden bg-white">

      {/* PRODUCT IMAGE */}
      <div className="h-80 bg-gray-100 relative">
        {/* Discount badge */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          40% OFF
        </span>
      </div>

      {/* RIGHT ICONS */}
      <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">

        {/* QUICK VIEW */}
        <div className="relative group/icon">
          <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-black hover:text-white transition">
            <FiEye />
          </button>

          <div
            className="
              hidden md:flex
              absolute right-12 top-1/2 -translate-y-1/2
              bg-black text-white text-xs px-4 py-2 rounded-full
              opacity-0 translate-x-2
              group-hover/icon:opacity-100
              group-hover/icon:translate-x-0
              transition-all duration-200
              whitespace-nowrap
            "
          >
            Quick View
          </div>
        </div>

        {/* ADD TO COMPARE */}
        <div className="relative group/icon">
          <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-black hover:text-white transition">
            <HiArrowsRightLeft />
          </button>

          <div
            className="
              hidden md:flex
              absolute right-12 top-1/2 -translate-y-1/2
              bg-black text-white text-xs px-4 py-2 rounded-full
              opacity-0 translate-x-2
              group-hover/icon:opacity-100
              group-hover/icon:translate-x-0
              transition-all duration-200
              whitespace-nowrap
            "
          >
            Add to Compare
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="p-4">
        <p className="text-sm font-medium">Chaniya Choli Kids</p>

        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="text-orange-600 font-semibold">Rs 2000</span>
          <span className="line-through text-gray-400">Rs 4000</span>
        </div>

        <p className="text-xs text-gray-500 mt-1">3 Colors</p>

        <button className="mt-3 w-full bg-black text-white py-2 text-sm hover:bg-gray-900 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/* ===============================
   CART COMPONENT
================================ */
export default function Cart({ onClose }) {
  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* DRAWER */}
      <div
        className="
          fixed top-0 right-0 h-full
          w-full sm:w-[80%] md:w-[60%] lg:w-[60%]
          bg-white z-50 shadow-xl
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg md:text-xl font-medium">
            My Shortlist
          </h2>

          <button onClick={onClose}>
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="h-full overflow-y-auto px-4 md:px-6 py-6">

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProductCard />
            <ProductCard />
          </div>

        </div>
      </div>
    </>
  );
}
