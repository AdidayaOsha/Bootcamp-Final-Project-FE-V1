import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../../helpers/currencyFormatter";
import Axios from "axios";
import { API_URL } from "../../constant/api";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  console.log(
    `sub: ${subTotal}, disc: ${discount}, Ship: ${shipping}, TotalPrice: ${totalPrice}`
  );

  const userGlobal = useSelector((state) => state.user);
  const summaryGlobal = useSelector((state) => state.summary);

  useEffect(() => {
    const getUserCart = async () => {
      try {
        const results = await Axios.get(
          `${API_URL}/carts/get/${userGlobal.id}`
        );
        setCartItems(results.data.carts);
      } catch (err) {
        console.log(err);
      }
    };
    getUserCart();
  }, [userGlobal]);

  useEffect(() => {
    const renderSubTotal = async () => {
      try {
        let total = 0;
        cartItems.forEach((val) => {
          total += val.subtotal;
          setSubTotal(total);
        });
      } catch (err) {
        console.log(err);
      }
    };
    renderSubTotal();
  }, [cartItems]);

  useEffect(() => {
    const renderTotalPrice = () => {
      try {
        let total = 0;
        total = subTotal - discount + shipping;

        setTotalPrice(total);
      } catch (err) {
        console.log(err);
      }
    };
    renderTotalPrice();
  }, [cartItems, subTotal, discount, shipping]);

  useEffect(() => {
    const discountHandler = () => {
      try {
        let discountFee = 0;
        discountFee = totalPrice * 0.05;
        setDiscount(discountFee);
        setTotalPrice(totalPrice - discountFee);
      } catch (err) {
        console.log(err);
      }
    };
    discountHandler();
  }, [isClicked]);

  return (
    <>
      {/* RIGHT COL ORDER SUMMARY */}
      <div className="flex flex-col ">
        <div className="w-full rounded-xl flex flex-col p-4 shadow-sm">
          {/* Title Order Summary */}
          <div>
            <h1 className="font-bold">Order Summary</h1>
          </div>
          <div className="space-y-6 text-sm mt-4">
            <div className="flex justify-between">
              <h2 className="text-gray-400">Sub Total</h2>
              <h2 className="font-bold">{currencyFormatter(subTotal)}</h2>
            </div>
            {/* DISCOUNT */}
            <div className="flex justify-between">
              <h2 className="text-gray-400">Discount</h2>
              {discount ? (
                <h2 className="">{currencyFormatter(discount)}</h2>
              ) : (
                <h2 className="">-</h2>
              )}
            </div>
            <div className="flex justify-between">
              <h2 className="text-gray-400">Shipping</h2>
              <h2 className="font-bold">Free</h2>
            </div>
            <span className="flex border-top h-[2px] bg-slate-100 w-full"></span>
            {/* TOTAL PRICE */}
            <div className="flex justify-between">
              <div className="text-lg font-bold">
                <h2>Total</h2>
              </div>
              <div className="">
                <h2 className="text-lg font-bold text-red-400 text-right">
                  {currencyFormatter(totalPrice)}
                </h2>
                <p className="text-xs font-extralight text-right italic">
                  (PPN Included if Applicable)
                </p>
              </div>
            </div>
            {summaryGlobal.discount ? (
              <div className="w-7/12 m-auto mt-3 rounded-lg bg-orange-50 ">
                <h2 className="text-yellow-500 text-center italic">
                  Discount Has Been Applied!
                </h2>
              </div>
            ) : null}
            <div className="border-2 rounded-md flex justify-between p-2">
              <h2 className="text-lg">DISCOUNT5</h2>
              {summaryGlobal.discount ? (
                <button className="btn btn-ghost text-gray-600 bg-gray-200 btn-sm disabled">
                  Apply
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsClicked(true);
                  }}
                  className="btn btn-ghost text-accent btn-sm"
                >
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>
        <button className="mt-4 btn btn-block btn-accent text-white">
          CHECKOUT
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
