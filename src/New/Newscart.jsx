import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Add from "../AddToCart/Add";
import { Link } from "react-router-dom";
import { ArrowLeftRight, Eye } from 'lucide-react';


function Newscart() {
  return (
    <>
      <Navbar />
      <div className="pl-10 pt-4">
        <span className="text-gray-700">Home /</span>Dresses</div>
      <div className="flex gap-6 px-20 py-8">

        {/* LEFT FILTER SIDEBAR */}
        <div className="w-75 h-375 bg-white shadow rounded p-4">

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">FILTER BY</h2>
            <button className="text-sm text-gray-500">Reset</button>
          </div>

          {/* Price */}
          <div className="mb-6 border-b  border-b-gray-400 pb-4">
            <h3 className="font-semibold mb-2">Price Range</h3>
            <input type="range" className="w-full accent-orange-500" />
            <div className="flex justify-between text-sm mt-1">
              <span>₹0</span>
              <span>₹5000</span>
            </div>
          </div>

          {/* Discount */}
          <div className="mb-6 border-b border-b-gray-400 pb-4">
            <h3 className="font-semibold mb-2">Discount</h3>
            <div className="space-y-2 text-sm">
              <label className="flex gap-2">
                <input type="checkbox" /> Upto 10%
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> 10% - 20%
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> 20% - 30%
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> 30% - 40%
              </label>
            </div>
          </div>

          {/* Colour */}
          <div className="mb-6 border-b border-b-gray-400 pb-4">
            <h3 className="font-semibold mb-3 flex gap-2 items-center">
              <span className="text-orange-500">▼</span> Colour
            </h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="w-3 h-3 bg-indigo-900 rounded-full"></span>Pink (96)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="w-3 h-3 bg-pink-500 rounded-full"></span>Pink (17)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>Pink (15)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>Pink (10)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>Pink (8)
              </label>
            </div>
          </div>

          {/* Size */}
          <div className="mb-6 border-b border-b-gray-400 pb-4">
            <h3 className="font-semibold mb-3 flex gap-2 items-center">
              <span className="text-orange-500">▼</span> Size
            </h3>
            <div className="space-y-2 text-sm">
              <label className="flex gap-2">
                <input type="checkbox" defaultChecked className="accent-orange-500" /> S (96)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> M (17)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> L (15)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" defaultChecked className="accent-orange-500" /> XL (10)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> XXL (8)
              </label>
            </div>
          </div>

          {/* Category */}
          <div className="mb-6 border-b border-b-gray-400 pb-4">
            <h3 className="font-semibold mb-3 flex gap-2 items-center">
              <span className="text-orange-500">▼</span> Category
            </h3>
            <div className="space-y-2 text-sm">
              <label className="flex gap-2">
                <input type="checkbox" /> Gown (96)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Dresses (17)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Suit Sets (15)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Tops (10)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Co-ords (8)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Lehenga (12)
              </label>
            </div>
          </div>

          {/* Occasion */}
          <div>
            <h3 className="font-semibold mb-3 flex gap-2 items-center">
              <span className="text-orange-500">▼</span> Occasion
            </h3>
            <div className="space-y-2 text-sm">
              <label className="flex gap-2">
                <input type="checkbox" /> Casual Wear (96)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Party Wear (17)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Festive Wear (15)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Active Wear (10)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Work Wear (8)
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Holiday (12)
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT PRODUCTS AREA */}
        <div className="flex-1">

          {/* Top Bar */}
          <div className="flex justify-between items-center bg-white p-4 shadow rounded mb-6">
            <p className="text-gray-600">Showing 3 of 30 products</p>

            <select className="border rounded px-3 py-1">
              <option>Best Seller</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          </div>


          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="pt-12 pl-12">

              <div className="relative h-72 w-64  rounded group overflow-hidden bg-white">
                <div className="absolute  left-0 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-r-full">
                  <p>40% OFF</p>
                </div>

                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="relative group/icon">
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button></Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button></Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button></Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button></Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button></Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button></Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button></Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button></Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button></Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button>
                  </Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button>
                  </Link>
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
                    <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"> <ArrowLeftRight /></button>
                    <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap"> Add to Compare</div>
                  </div>
                  <Link to="/Add">
                    <div className="relative group/icon">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"><Eye /></button>
                      <div className="absolute right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition whitespace-nowrap">Quick View</div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-400 text-white text-sm flex justify-center gap-6 py-2">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                  <Link to="/add">
                    <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition">
                      Add to Cart
                    </button>
                  </Link>
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
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
} export default Newscart