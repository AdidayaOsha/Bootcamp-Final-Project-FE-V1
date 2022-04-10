import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./pages/productScreen";
import CategoriesScreen from "./pages/CategoriesScreen";
import AddProduct from "./pages/AddProduct";
import ProductEditScreen from "./pages/ProductEditScreen";

import Home from "./pages/User/Home";
import Catalog from "./pages/User/Catalog";
import Details from "./pages/User/Details";

import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/category" element={<CategoriesScreen />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/product/edit/:id" element={<ProductEditScreen />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
