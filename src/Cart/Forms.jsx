import React from "react";

function Forms() {
  return (
    <div className="min-h-screen flex justify-center items-start py-10 px-4">
      {/* Main Card */}
      <div className=" w-full max-w-4xl rounded-xl  p-6 sm:p-8">

        {/* Shipping Address */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-orange-500 font-semibold text-lg">
            Shipping Address
          </h2>

          <span className="text-sm underline cursor-pointer text-gray-700 hover:text-orange-500">
            Edit
          </span>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Address 1 */}
          <div>
            <label className="block text-sm mb-1">Address Line 1</label>
            <input
              type="text"
              placeholder="Enter House no, flat no, etc"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Address 2 */}
          <div>
            <label className="block text-sm mb-1">Address Line 2</label>
            <input
              type="text"
              placeholder="Enter Landmark, street, etc"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm mb-1">Postal Code</label>
            <input
              type="text"
              placeholder="Enter Postal Code"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm mb-1">City</label>
            <input
              type="text"
              placeholder="Enter City, Town"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm mb-1">State</label>
            <input
              type="text"
              placeholder="Enter State"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Default Checkbox */}
        <div className="flex items-center gap-2 mt-5">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm">
            Make this as my default address
          </span>
        </div>

        <hr className="my-6" />

        {/* Basic Details */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-orange-500 font-semibold text-lg">
            Basic Details
          </h2>

          <span className="text-sm underline cursor-pointer text-gray-700 hover:text-orange-500">
            Edit
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* First Name */}
          <div>
            <label className="block text-sm mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm mb-1">Mobile No.</label>
            <input
              type="tel"
              placeholder="Enter Mobile No."
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

        </div>

      </div>
    </div>
  );
} export default Forms
