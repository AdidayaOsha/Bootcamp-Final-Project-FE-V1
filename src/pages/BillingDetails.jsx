import React from "react";
import OrderProgress from "../components/Checkout/OrderProgress";
import OrderSummary from "../components/Checkout/OrderSummary";
import BillingAddress from "../components/Checkout/BillingAddress";

const BillingDetails = () => {
  return (
    <>
      <div className="mt-20">
        <OrderProgress />
        <div className="flex w-full space-x-8 pt-5 justify-end pr-48">
          <BillingAddress />
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default BillingDetails;
