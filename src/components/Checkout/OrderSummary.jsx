import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../../helpers/currencyFormatter";

const OrderSummary = () => {
  const cartGlobal = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const renderSubTotal = () => {
      let total = 0;
      cartGlobal.cartList.forEach((val) => {
        total += val.subtotal;
        setSubTotal(total);
      });
    };
    renderSubTotal();
  }, []);

  useEffect(() => {
    const renderTotalPrice = () => {
      return subTotal + discount + shipping;
    };
    renderTotalPrice();
  }, [subTotal, discount, shipping]);

  console.log("testi");
  return (
    <>
      {/* RIGHT COL ORDER SUMMARY */}
      <div className=" w-3/12 flex flex-col ">
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
            <div className="flex justify-between">
              <h2 className="text-gray-400">Discount</h2>
              <h2 className="font-bold">-</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-gray-400">Shipping</h2>
              <h2 className="font-bold">Free</h2>
            </div>
            <span className="flex border-top h-[2px] bg-slate-100 w-full"></span>
            <div className="flex justify-between">
              <div className="text-lg font-bold">
                <h2>Total</h2>
              </div>
              <div className="">
                <h2 className="text-lg font-bold text-red-400 text-right">
                  Rp. {}
                </h2>
                <p className="text-xs font-extralight text-right italic">
                  (PPN Included if Applicable)
                </p>
              </div>
            </div>
            <div className="border-2 rounded-md flex justify-between p-2">
              <h2 className="text-lg">DISCOUNT5</h2>
              <button className="btn btn-ghost text-accent btn-sm">
                Apply
              </button>
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
