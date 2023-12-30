import React from 'react';
import { Route, Routes } from "react-router-dom";
import GroceryCard from "./GroceryCard";
import GroceryCart from './GroceryCart';
import Error from "./Error";
import OrderSummary from './OrderSummary';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<GroceryCard/>} path="/"/>
        <Route element={<GroceryCart/>} path="/cart"/>
        <Route path="/order" element={<OrderSummary/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default MainRoutes
