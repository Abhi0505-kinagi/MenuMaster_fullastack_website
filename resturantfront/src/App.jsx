import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import ProductList from './Components/Products'
import TitleCard  from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AddProduct from "./Components/Admin/addProduct";
import DeleteProduct from "./Components/Admin/DeleteProduct";
import Cart from './Components/Cart'
function App() {
  return(<>
    <TitleCard />
    <Router>
      {/* Components that are always visible */}
      <Navigation />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<ProductList />} /> 

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/delete" element={<DeleteProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </>)
}

export default App;
