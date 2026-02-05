import { useNavigate } from "react-router-dom";
import PaymentSummary from "./PaymentSummary";
import Nav from "./Nav";
import Footer from "../Home/Footer";
import Forms from "./Forms";
import Pay from "../Payment/Pay";
import React from "react";

export default function Check() {
  const navigate = useNavigate();

  return (
    <div>
      <Nav />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          Home / Add to cart
        </p>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2  rounded-xl p-6 shadow-sm">
            <Forms />
          </div>

          {/* RIGHT SIDE */}
          <PaymentSummary
            onMakePayment={() => navigate("/Pay")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
