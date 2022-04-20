import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constant/api";
import Axios from "axios";

const CartDetails = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getUserCart = async (id) => {
      try {
        const results = await Axios.get(`${API_URL}/carts/get/1`);
        setData(results.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserCart();
  }, []);

  const TableHead = () => {
    return (
      <thead>
        <tr className=" text-sm text-gray-500 h-14 bg-slate-100 ">
          <th className="text-left w-1/2 rounded-l-md pl-2">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th className="rounded-r-md">Action</th>
        </tr>
      </thead>
    );
  };

  const ProductList = () => {
    return (
      <tr className="text-center h-20 border-none">
        <td>
          <div className="flex items-center">
            <div>
              <img
                className="mask mask-squircle w-20"
                src="https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=20&m=956501428&s=612x612&w=0&h=UC4qdZa2iA0PJvv0RIBlJDyF80wxFyLPq4YWvZa30Sc="
              />
            </div>
            <div className="space-y-2">
              <div>
                <p className="font-bold">{data.name}</p>
              </div>
              <div className="flex">
                <div>
                  <p className="text-gray-400">
                    Size: <span className="text-black">9</span>
                  </p>
                </div>
                <span className="border-1 h-5 mx-2"></span>
                <div>
                  <p className="text-gray-400">
                    Color:
                    <span className="text-black"> Green</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td className="text-left">Rp. 200000</td>
        <td className="text-left">
          <div>
            <div className="flex border-1 rounded-md space-x-4 items-center justify-center align-middle">
              <span className="text-4xl">-</span>
              <span className="text-1xl">1</span>
              <span className="text-2xl">+</span>
            </div>
            <div>
              <p className="text-gray-400 text-xs text-center mt-1">
                available: 42
              </p>
            </div>
          </div>
        </td>
        <td className="text-center">Rp. 2000</td>
        <td>
          <i className="fas fa-trash-alt"></i>
        </td>
      </tr>
    );
  };

  return (
    <>
      {/* DIV PRODUCT CARD */}
      <div className="w-1/2">
        {/* TABLE STARTS HERE */}
        <div className=" w-full rounded-xl shadow-sm">
          <div className="p-3 rounded-t-xl">
            <h2 className="font-bold">
              Cart <span className="text-gray-400">(1 Item)</span>
            </h2>
          </div>
          <div className="h-3/5 flex space-x-5 w-full px-2">
            <table className="w-full my-2">
              {TableHead()}
              <tbody className="text-sm">{ProductList()}</tbody>
            </table>
          </div>
        </div>
        <div>
          <Link to="/">
            <div className="text-gray-600 hover:text-gray-500 text-sm space-x-2 my-6 flex group">
              <i className="fas fa-arrow-left transition-all group-hover:mr-1"></i>
              <h2 className="font-bold">Continue Shopping</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
