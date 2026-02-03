import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchOverlay from "../Home/Search";
import Cart from "../Home/Cart"
import Carts from "../Cart/Carts"
import { Link } from "react-router-dom";


function Nav() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="w-full">
        <div className="flex flex-row flex-nowrap items-center w-full pt-4 md:pt-14 pb-5 gap-2 md:gap-4 px-3 md:px-0 border-b-2">
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
            <img
              src="shape.png"
              onClick={() => setOpenSearch(true)}
              className="w-auto pr-1 md:pr-4 cursor-pointer"
            />
            <img
              src="h.png"
              className="w-auto pr-1 md:pr-4 cursor-pointer"
              onClick={() => setOpenCart(true)} // OPEN CART
            />
            <img src="c.png"
              onClick={() => navigate("/Carts")}
              className="w-auto sm:w-auto md:w-auto lg:w-auto pr-1 md:pr-4 cursor-pointer" />
            <img src="p.png" className="w-auto sm:w-auto md:w-auto lg:w-auto pr-1 md:pr-4 cursor-pointer" />
          </div>
          {/* SEARCH OVERLAY */}
          {openSearch && (
            <SearchOverlay onClose={() => setOpenSearch(false)} />
          )}
          {/* CART OVERLAY */}
          {openCart && (
            <Cart onClose={() => setOpenCart(false)} />
          )}
        </div>
      </nav>
    </>
  );
} export default Nav
