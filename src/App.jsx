import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './Pages/Home'
import Carts from './Cart/Carts'
import Checkout from './Cart/Checkout'

import Add from "./AddToCart/Add"
import Check from './Cart/Check';
import Edit from './Payment/Pay';
import Forms from './Cart/Forms';
import F from './Payment/F';
import Compare from './Home/Compare';
import Virtual from './AddToCart/Virtual';
import Dresses from './Pages/Dresses';
import Newscart from './New/Newscart';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Dresses" element={<Dresses />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Check" element={<Check />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path="/F" element={<F />} />
        <Route path="/Compare" element={<Compare />} />
        <Route path="/Virtual" element={<Virtual />} />
        <Route path="/Newscart" element={<Newscart />} />
      </Routes>
    </>
  )
}

export default App
