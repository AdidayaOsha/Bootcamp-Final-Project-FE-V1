import React from "react";
import { Link } from "react-router-dom";

const BillingAddress = () => {
  return (
    <>
      {/* DIV PRODUCT CARD */}
      <div></div>
      <div className="w-1/2 bg-red-200">
        {/* TABLE ADDRESS HERE */}
        <div className=" w-full rounded-xl shadow-sm">
          <div className="p-3 rounded-t-xl">
            <div className="space-y-3">
              <div className="flex space-x-2">
                <h2 className="font-bold">Osha Prima Adidaya</h2>
                <p className="text-gray-400 text-sm">( Home)</p>
                <p className="text-sm border-1 bg-accent text-white border-accent px-1 rounded-md">
                  default
                </p>
              </div>
              <h2 className="">
                19034 Verna Unions Apt. 164 - Honolulu, RI / 87535
              </h2>
              <div className="flex justify-between items-center">
                <h2 className="text-gray-400">021-7587535</h2>
                <button className="flex btn btn-outline btn-accent btn-sm">
                  Deliver To This Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-200">
        <Link to="/">
          <div className="text-gray-600 hover:text-gray-500 text-sm space-x-2 my-6 flex group">
            <i className="fas fa-arrow-left transition-all group-hover:mr-1"></i>
            <h2 className="font-bold">Back</h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BillingAddress;
