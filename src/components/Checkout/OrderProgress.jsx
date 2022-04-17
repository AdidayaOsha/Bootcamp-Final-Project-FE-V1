import React from "react";
import { Link } from "react-router-dom";

const OrderProgress = () => {
  return (
    <>
      {/* HEADER STARTS */}
      <div className="mt-28">
        {/* Checkout Links */}
        <div className="ml-60 mt-10 mb-4">
          <div>
            <h1 className="text-xl font-bold mb-2">Checkout</h1>
          </div>
          <div className="flex flex-row space-x-4">
            <Link to="/" className="hover:text-gray-500 text-sm">
              <h2>Dashboard</h2>
            </Link>
            <span>•</span>
            <Link to="/" className="hover:text-gray-500 text-sm">
              <h2>E-Commerce</h2>
            </Link>

            <span>•</span>
            <h2 className="text-sm">Checkout</h2>
          </div>
        </div>

        <div className="mr-60">
          {/* Progress Bar Nya */}
          <div className="w-100 flex justify-center space-x-5 text-center items-center">
            <span className="text-4xl text-gray-400">•</span>
            <span className="flex border-top h-[2px] bg-slate-100 w-[200px]"></span>
            <span className="text-4xl text-gray-400">•</span>
            <span className="flex border-top h-[2px] bg-slate-100 w-[200px]"></span>
            <span className="text-4xl text-gray-400">•</span>
          </div>

          {/* Progress Head */}
          <div className="w-100 flex justify-center">
            <div>
              <p className="text-sm text-gray-500 font-bold">Cart</p>
            </div>
            <div className="mx-40 ">
              <p className="text-sm text-gray-400 font-bold ml-10">
                Billing & Address
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-bold">Payment</p>
            </div>
          </div>
        </div>
      </div>
      {/* HEADER ENDS */}
    </>
  );
};

export default OrderProgress;