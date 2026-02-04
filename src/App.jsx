import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './Pages/Home'
import Carts from './Cart/Carts'
import Checkout from './Cart/Checkout'
import Newscart from "./New/Newscart"
import Add from "./AddToCart/Add"
import Check from './Cart/Check';
import Edit from './Cart/Edit';
import Forms from './Cart/Forms';
import F from './Cart/F';
import Compare from './Home/Compare';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Newscart" element={<Newscart />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Check" element={<Check />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path="/F" element={<F />} />
        <Route path="/Compare" element={<Compare />} />
      </Routes>
    </>
  )
}

export default App
