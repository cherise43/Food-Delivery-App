import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import OrderForm from "./OrderForm";
import AddMeals from "./AddMeals";
import DeleteMeals from "./Delete";

function Navbar(){

   return ( 
   <>
        <nav id="nav">
            <NavLink exact='true' to="/">Home</NavLink >
            <NavLink  exact='true' to="/about">About</NavLink >
            <NavLink  exact='true' to="/order">Order</NavLink >
            <NavLink  exact='true' to="/add">Add Meals</NavLink >
            <NavLink  exact='true' to="/delete">Delete</NavLink >
        </nav>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/order" element={<OrderForm />}/>
            <Route path="/add" element={<AddMeals />}/>
            <Route path="/delete" element={<DeleteMeals />}/>
        </Routes>
    </>
    )
    
}
export default Navbar