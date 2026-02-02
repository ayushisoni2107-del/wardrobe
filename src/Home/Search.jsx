import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function Search({ onClose }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* SEARCH BOX */}
      <div
        className="fixed top-24 md:top-32 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-175"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex items-center gap-3 px-5 h-14 md:h-15
          rounded-full bg-white transition-all
          ${focused
              ? "border-2 border-orange-500"
              : "border border-gray-200"
            }`}
        >
          {/* Search Icon */}
          <FiSearch
            className={`text-lg ${focused ? "text-orange-500" : "text-gray-400"
              }`}
          />

          {/* Input */}
          <input
            type="text"
            placeholder="Search Here"
            value={value}
            autoFocus
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 outline-none text-sm md:text-base placeholder-gray-400"
          />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center"
          >
            <FiX className="text-xl text-gray-500 hover:text-black" />
          </button>
        </div>
      </div>
    </>
  );
}
