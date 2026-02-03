import React from "react";

function Rating() {
  return (
    <div className="pb-20" >
      <div className="w-full min-h-screen bg-[#FAF6E9] flex flex-col items-center px-4 py-12">
        <h1 className="text-3xl sm:text-5xl font-playfair tracking-wide">
          <span className="text-orange-500">RATING</span> & REVIEW
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mt-2"> Tap on the stars to Rate this product</p>
        <div className="w-full max-w-md mt-10 space-y-5">
          <input type="text" placeholder="Review Title"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none " />
          <textarea placeholder="Write your review here" rows="5"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 resize-none focus:outline-none"></textarea>
          <div>
            <p className="text-sm text-gray-600 mb-3 text-center">Upload photo / video</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-20 h-20 bg-white rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer" >
                </div>))}
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium"> Submit Review</button>
        </div>
      </div>
    </div>
  );
} export default Rating