import React, { useEffect } from "react";
import { API_URL } from "./constant/api";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./pages/productScreen";
import CategoriesScreen from "./pages/CategoriesScreen";
import AddProduct from "./pages/AddProduct";
import ProductEditScreen from "./pages/ProductEditScreen";

import AdminAuthentication from "./pages/AdminAuth/AdminAuthentication";
// import AdminForgotPassword from "./pages/Auth/AdminForgotPassword";
// import AdminRecoverPassword from "./pages/Auth/AdminRecoverPassword";
import AdminRegister from "./pages/AdminAuth/AdminRegister";
import AdminLogin from "./pages/AdminAuth/AdminLogin";

import Authentication from "./pages/Auth/Authentication";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import RecoverPassword from "./pages/Auth/RecoverPassword";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

import Home from "./pages/User/Home";
import Catalog from "./pages/User/Catalog";
import Details from "./pages/User/Details";

import Report from "./pages/Admin/Report";
import User from "./pages/Admin/User";
import Warehouse from "./pages/Admin/Warehouse";
import FormWarehouse from "./pages/Admin/FormWarehouse";
import ShowWarehouse from "./pages/Admin/ShowWarehouse";
import CostWarehouse from "./pages/Admin/CostWarehouse";
import ProductWarehouse from "./pages/Admin/ProductWarehouse";
import ShippingWarehouse from "./pages/Admin/ShippingWarehouse";
import Dashboard from "./pages/Admin/Dashboard";

import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import CheckoutDetails from "./pages/CheckoutDetails";
import BillingDetails from "./pages/BillingDetails";
import PaymentDetails from "./pages/PaymentDetails";
import Axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const userLocalStorage = localStorage.getItem("userDataEmmerce");
  const adminLocalStorage = localStorage.getItem("adminDataEmmerce");

  const userKeepLogin = () => {
    console.log(userLocalStorage);
    Axios.post(
      `http://localhost:9990/users/auth`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userLocalStorage}`,
        },
      }
    )
      .then((res) => {
        console.log(res);
        dispatch({
          type: "USER_KEEP_LOGIN",
          payload: res.data,
        });
        dispatch({
          type: "GET_CART",
          payload: res.data.carts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const adminKeepLogin = () => {
    console.log(adminLocalStorage);
    Axios.post(
      `http://localhost:9990/admins/auth`,
      {},
      {
        headers: {
          Authorization: `Bearer ${adminLocalStorage}`,
        },
      }
    )
      .then((res) => {
        console.log(res);
        dispatch({
          type: "ADMIN_KEEP_LOGIN",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    userKeepLogin();
    adminKeepLogin();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* PRODUCTS */}
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/category" element={<CategoriesScreen />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products/find/:id" element={<ProductEditScreen />} />

          {/* CARTS */}
          <Route path="/checkout" element={<CheckoutDetails />} />
          <Route path="/billing" element={<BillingDetails />} />
          <Route path="/payment" element={<PaymentDetails />} />
          <Route
            path="/adminauthentication/:token"
            element={<AdminAuthentication />}
          />
          {/* <Route path="/adminforgotpassword" element={<AdminForgotPassword />} /> */}
          {/* <Route path="/adminrecoverpassword/:token" element={<AdminRecoverPassword />} /> */}
          <Route path="/adminregister" element={<AdminRegister />} />
          <Route path="/admin" element={<AdminLogin />} />

          {/* USER */}
          <Route path="/authentication/:token" element={<Authentication />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/recoverpassword/:token" element={<RecoverPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* HOMEPAGE */}
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          {/* ADMIN MASTER DATA */}
          <Route path="/report" element={<Report />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/warehouse/:id" element={<ShowWarehouse />} />
          <Route path="/warehouse/:id/inventory" element={<ProductWarehouse />} />
          <Route path="/warehouse/:id/cost" element={<CostWarehouse />} />
          <Route path="/warehouse/:id/shipping" element={<ShippingWarehouse />} />
          <Route path="/addwarehouse" element={<FormWarehouse />} />
          <Route path="/user" element={<User />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
