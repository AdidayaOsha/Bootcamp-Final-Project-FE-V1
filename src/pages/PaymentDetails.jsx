import React from "react";
import OrderProgress from "../components/Checkout/OrderProgress";
import PaymentSummary from "../components/Checkout/PaymentSummary";
import BillingAddress from "../components/Checkout/BillingAddress";

const PaymentDetails = () => {
  return (
    <>
      <div className="mt-20">
        <OrderProgress />
        <div className="flex w-full space-x-8 pt-5 justify-end pr-48">
          <PaymentSummary />
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
