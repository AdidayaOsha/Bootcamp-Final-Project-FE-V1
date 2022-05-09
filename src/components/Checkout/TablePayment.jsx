import React, { useState, useEffect } from "react";
import { getPaymentCookie } from "../../hooks/getCookie";
import { AiOutlineCheck } from "react-icons/ai";

const TablePayment = () => {
  const paymentCookie = getPaymentCookie()
    ? JSON.parse(getPaymentCookie())
    : null;

  const renderPaymentTable = () => {
    return (
      <div className="w-full items-end">
        <div className=" w-full rounded-xl shadow-sm">
          <div className="p-3 rounded-t-xl">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <h2 className="font-bold">Payment Options</h2>{" "}
                <span className="text-xl text-green-600">
                  <AiOutlineCheck />
                </span>
              </div>
              <div className="flex space-x-2">
                <img src={paymentCookie.logo} alt="" className="w-2/12" />
                <div>
                  <h2 className="text-sm">{paymentCookie.name}</h2>
                  <h2 className="text-sm text-gray-400">
                    {paymentCookie.description}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return renderPaymentTable();
};

export default TablePayment;
