import React from "react";
import CartDetails from "../components/Checkout/CartDetails";
import OrderProgress from "../components/Checkout/OrderProgress";
import OrderSummary from "../components/Checkout/OrderSummary";

const CheckoutDetails = () => {
  return (
    <>
        <OrderProgress />
      <div className="flex w-screen space-x-4 pt-5 justify-end pr-48">
        <CartDetails />
        <OrderSummary />
      </div>
    </>
  );
};

export default CheckoutDetails;
