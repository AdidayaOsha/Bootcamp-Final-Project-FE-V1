import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import { API_URL } from "../../constant/api";
import { currencyFormatter } from "../../helpers/currencyFormatter";
import { debounce } from "throttle-debounce";
import Axios from "axios";

const CartDetails = () => {
  const [cartItems, setCartItems] = useOutletContext();

  const TableHead = () => {
    return (
      <thead>
        <tr className=" text-sm text-gray-500 h-14 bg-slate-100 ">
          <th className="text-left w-5/12 rounded-l-md pl-2">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th className="rounded-r-md">Action</th>
        </tr>
      </thead>
    );
  };

  // CART ITEMS COMPONENT
  const CartItems = ({ items }) => {
    const [quantity, setQuantity] = useState(items.quantity);

    const qtyHandler = useCallback(
      debounce(1000, async (quantity) => {
        console.log("tes berapa lama muncul");
        await Axios.patch(`${API_URL}/carts/quantity/${items.id}`, {
          quantity,
        });
      }),
      []
    );

    useEffect(() => {
      qtyHandler(quantity);
    }, [quantity]);

    return (
      <tr className="text-center h-20 border-none">
        <td>
          <div className="flex items-center space-x-2">
            <div>
              <img
                className="mask mask-squircle w-20"
                src={`${API_URL}/${items.product.product_image}`}
              />
            </div>
            <div className="space-y-2">
              <div>
                <p className="font-bold text-left">{items.product.name}</p>
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
        <td className="text-left">{currencyFormatter(items.product.price)}</td>
        <td className="text-left">
          <div>
            <div className="flex border-1 rounded-md space-x-4 items-center justify-center align-middle">
              <button
                className="text-4xl"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
              <span className="text-1xl">{quantity}</span>
              <button
                className="text-2xl"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <div>
              <p className="text-gray-400 text-xs text-center mt-1">
                available: {items.product.warehouse_products[0].stock_ready}
              </p>
            </div>
          </div>
        </td>
        <td className="text-center">{currencyFormatter(items.subtotal)}</td>

        <td>
          <i className="hover:cursor-pointer fas fa-trash-alt"></i>
        </td>
      </tr>
    );
  };

  const CartList = () => {
    return cartItems?.map((val) => {
      return <CartItems items={val} />;
    });
  };

  return (
    <>
      {/* DIV PRODUCT CARD */}
      <div className="w-1/2">
        {/* TABLE STARTS HERE */}
        <div className=" w-full rounded-xl shadow-sm">
          <div className="p-3 rounded-t-xl">
            <h2 className="font-bold">
              Cart{" "}
              <span className="text-gray-400">({cartItems?.length} Items)</span>
            </h2>
          </div>
          <div className="h-3/5 flex space-x-5 w-full px-2">
            <table className="w-full my-2">
              {TableHead()}
              <tbody className="text-sm">{CartList()}</tbody>
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
