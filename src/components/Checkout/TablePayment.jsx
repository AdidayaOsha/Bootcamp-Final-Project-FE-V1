import React from "react";
import { getPaymentCookie } from "../../hooks/getCookie";
import { AiOutlineCheck } from "react-icons/ai";

import Axios from "axios";

const TablePayment = () => {
  const paymentCookie = getPaymentCookie()
    ? JSON.parse(getPaymentCookie())
    : null;

  return (
    <div className="w-full items-end">
      <div className=" w-full rounded-xl shadow-sm">
        <div className="p-3 rounded-t-xl">
          <div className="space-y-3">
            <div className="flex space-x-2">
              <h2 className="font-bold">Payment Options</h2>{" "}
              <span className="text-xl text-green-600">
                <AiOutlineCheck />
              </span>
            </div>
            <h2 className="text-sm">BCA Bank Transfer</h2>
            <h2 className="text-sm text-gray-400">360037812 a.n E-Commerce</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePayment;
