import React from "react";
import Nav from "../Cart/Nav";
import Footer from "../Home/Footer";
import PaymentSummary from "../Cart/PaymentSummary";

function F() {
  return (
    <>
      <Nav />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">

        {/* Breadcrumb (Optional) */}
        <p className="text-sm text-gray-500 mb-4">
          Home / Checkout
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE - Form (2 Columns) */}
          <div className="lg:col-span-2 rounded-xl p-6 shadow-sm bg-white">

            {/* Shipping + Basic Details */}
            <div className="w-full max-w-4xl">

              {/* Shipping Address */}
              <div className="mb-8">

                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-orange-500 font-semibold text-lg">
                    Shipping Address
                  </h2>
                  <span className="text-sm underline cursor-pointer text-gray-700 hover:text-orange-500">
                    Edit
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm mb-1">Address Line 1</label>
                    <input
                      type="text"
                      placeholder="Enter House no, flat no, etc"
                      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Address Line 2</label>
                    <input
                      type="text"
                      placeholder="Enter Landmark, street, etc"
                      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Postal Code</label>
                    <input
                      type="text"
                      placeholder="Enter Postal Code"
                      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">City</label>
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">State</label>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                </div>

                <div className="flex items-center gap-2 mt-5">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">
                    Make this as my default address
                  </span>
                </div>

              </div>


              {/* Basic Details */}
              <div>

                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-orange-500 font-semibold text-lg">
                    Basic Details
                  </h2>
                  <span className="text-sm underline cursor-pointer text-gray-700 hover:text-orange-500">
                    Edit
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm mb-1">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Mobile No.</label>
                    <input
                      type="tel"
                      placeholder="Enter Mobile No."
                      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

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
          </div>


          {/* RIGHT SIDE - Payment Summary */}
          <div>
            <PaymentSummary />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
} export default F
