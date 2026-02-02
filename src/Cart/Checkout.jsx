
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import PaymentSummary from "./PaymentSummary";
import TrendingItems from "./TrendingItems";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import React from "react";


export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          Home / Add to cart
        </p>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <CartItem />
            <hr className="my-6" />
            <CartItem />
          </div>

          {/* RIGHT SIDE */}
          <PaymentSummary
            onMakePayment={() => navigate("/payment")}
          />
        </div>
      </div>

      <TrendingItems />
      <Footer />
    </div>
  );
}
