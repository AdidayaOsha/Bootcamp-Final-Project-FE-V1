import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import OrderProgress from "../components/Checkout/OrderProgress";
import OrderSummary from "../components/Checkout/OrderSummary";
import TableAddress from "../components/Checkout/TableAddress";

const CheckoutDetails = () => {
  const summaryGlobal = useSelector((state) => state.summary);
  console.log(summaryGlobal);

  return (
    <>
      <div>
        <OrderProgress />
        <div className="flex w-screen space-x-4 pt-5 justify-end pr-48 ">
          <Outlet />
          <div className="w-3/12 space-y-4 flex flex-col">
            {summaryGlobal.isAddressMode && <TableAddress />}
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutDetails;
