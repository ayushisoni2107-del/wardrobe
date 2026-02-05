import React from "react";
import { ChevronLeft } from "lucide-react";

function Card({ goBack }) {
  return (
    <div className="space-y-4">
      <Header title="Card Payment" goBack={goBack} />
      <input placeholder="Card Number" className="input" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input placeholder="MM/YY" className="input" />
        <input placeholder="CVV" className="input" />
      </div>
      <div className="flex justify-end mt-5">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg w-full sm:w-auto">
          Pay ₹699
        </button>
      </div>
    </div>
  );
} export default Card;

function Header({ title, goBack }) {
  return (
    <div className="flex items-center gap-3">
      <button onClick={goBack}><ChevronLeft className="text-orange-500" size={22} /></button>
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
}
