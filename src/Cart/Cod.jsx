import { ChevronLeft } from "lucide-react";
import React from "react";
function Cod({ goBack }) {
  return (
    <div className="space-y-4">
      <Header title="Cash on Delivery" goBack={goBack} />
      <input value="Pay when order arrives" disabled
        className="input bg-gray-100" />
      <div className="flex justify-end mt-5">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg w-full sm:w-auto">
          Pay ₹699
        </button>
      </div>
    </div>
  );
} export default Cod;

function Header({ title, goBack }) {
  return (
    <div className="flex items-center gap-3">
      <button onClick={goBack}><ChevronLeft className="text-orange-500" size={22} /></button>
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
}
