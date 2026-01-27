import React from 'react'

function Navbar() {
  return (
    <>
      <nav>
        <div className="flex items-center w-full  pt-14 pb-5">
          <div className="flex flex-1 items-center  pl-24">
            <img src="/inst.png" class="pr-4" />
            <img src="/fac.png" class="pr-4" />
            <img src="/what.png" class="pr-4" />
            <img src="/yt.png" />
          </div>
          <div className="flex justify-center shrink-0">
            <img src="/Logo.png" />
          </div>
          <div className="flex flex-1 items-center justify-end gap-2 pr-24">
            <img src="shape.png" class="pr-4 cursor-pointer hover:text-white" />
            <img src="h.png" class="pr-4 cursor-pointer hover:text-white" />
            <img src="c.png" class="pr-4 cursor-pointer hover:text-white" />
            <img src="p.png" class="pr-4 cursor-pointer hover:text-white" />
          </div>
        </div>
        <div className="w-full bg-[#1f1f1f] h-18">
          <ul className="flex justify-center items-center h-10 text-lg text-gray-200 pt-7">
            <li className="px-10 cursor-pointer hover:text-white">All Products</li>
            <li className="px-10 cursor-pointer hover:text-white">Gown</li>
            <li className="px-10 cursor-pointer hover:text-white">Dresses</li>
            <li className="px-10 cursor-pointer hover:text-white">Suit Set</li>
            <li className="px-10 cursor-pointer hover:text-white">Top's</li>
            <li className="px-10 cursor-pointer hover:text-white">Co-Ord Set</li>
            <li className="px-10 cursor-pointer hover:text-white">Lehenga</li>
          </ul>
        </div>
        <div className='flex justify-start pt-5 border-b-2 pb-6 border-gray-500'>
          <p className="text-sm font-semibold">Up To 30% Off |</p>
          <p className='underline underline-offset-1 px-4 pr-20 text-sm'> Shop Now</p>
          <p className='text-sm font-semibold'>Extra 15% Off | </p>
          <p className="text-sm">Use Code:</p>
          <p className='text-amber-600 text-sm px-2 pr-20'>EXTRA 15</p>

          <p className="text-sm font-semibold">Up To 30% Off | </p>
          <p className='underline underline-offset-1 px-4 pr-20 text-sm'> Shop Now</p>
          <p className='text-sm font-semibold'>Extra 15% Off |</p>
          <p className="text-sm">Use Code:</p>
          <p className='text-amber-600 px-2 text-sm pr-24'>EXTRA 15</p>

          <p className="text-sm font-semibold">Up To 30% Off | </p>
          <p className='underline underline-offset-1 px-1 text-sm'>Shop No</p>
        </div>

      </nav>
    </>
  );
} export default Navbar