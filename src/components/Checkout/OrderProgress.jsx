import React from "react";
import { Link } from "react-router-dom";

const OrderProgress = () => {
  return (
    <>
      {/* Checkout Links */}
      <div className="m-4">
        <div>
          <h1 className="textpxl font-bold mb-2">Checkout</h1>
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

      {/* Progress Bar Nya */}
      <div className="w-100 flex flex-row justify-center space-x-40">
        <span>.</span>
      </div>
      <div className="w-100 flex flex-row justify-center space-x-40">
        <div>
          <p className="text-sm">Cart</p>
        </div>
        <div>
          <p className="text-sm">Billing & Address</p>
        </div>
        <div>
          <p className="text-sm">Payment</p>
        </div>
      </div>
    </>
  );
};

export default OrderProgress;
