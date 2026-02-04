import PaymentSummary from "./PaymentSummary";
import Nav from "./Nav";
import Footer from "../Home/Footer";
import Forms from "./Forms";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import React from "react";
import Upi from "./Upi";
import Card from "./Card";
import Emi from "./Emi.jsx";
import Cod from "./Cod";

function Edit() {
  const [page, setPage] = useState("home");
  return (
    <>
      <Nav />
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-6">

          <div className="w-full lg:w-2/3 bg-white p-4 sm:p-6 rounded-xl shadow">
            <div className="bg-orange-50 p-4 rounded-lg mb-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold"> Delivering to Dhara Keshwala</h3>
                <p className="text-sm text-gray-600">Lorem ispum dolor sit amet, lorem ispum, PORBANDAR, GUJARAT, 360579, India</p>
              </div>
              <Link to="/F"
                className="text-sm font-medium underline text-orange-600 hover:text-orange-700">
                Edit Address
              </Link>
            </div>
            {page === "home" && (
              <>
                <div>
                  <h2 className="text-xl font-semibold mb-5"> Choose Payment Method</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Btn title="UPI" onClick={() => setPage("upi")} />
                    <Btn title="Card" onClick={() => setPage("card")} />
                    <Btn title="EMI" onClick={() => setPage("emi")} />
                    <Btn title="COD" onClick={() => setPage("cod")} />
                  </div>
                </div>
              </>
            )}
            {page === "upi" && <Upi goBack={() => setPage("home")} />}
            {page === "card" && <Card goBack={() => setPage("home")} />}
            {page === "emi" && <Emi goBack={() => setPage("home")} />}
            {page === "cod" && <Cod goBack={() => setPage("home")} />}
          </div>

          <div className="w-full lg:w-1/3">
            <PaymentSummary />
          </div>
        </div>
      </div >
      <Footer />
    </>
  );
} export default Edit;

function Btn({ title, onClick }) {
  return (
    <button onClick={onClick}
      className="border p-4 rounded-lg text-left hover:bg-orange-50">
      {title}
    </button>
  );
}