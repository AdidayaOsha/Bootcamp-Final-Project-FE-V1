import React from "react";
import { Link } from "react-router-dom";

const BillingAddress = () => {
  const TableAdress = () => {
    return (
      <>
        {/* TABLE ADDRESS HERE */}
        <div className="w-full items-end">
          <div className=" w-full rounded-xl shadow-sm">
            <div className="p-3 rounded-t-xl">
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <h2 className="font-bold">Osha Prima Adidaya</h2>
                  <p className="text-gray-400 text-sm">( Home)</p>
                  <p className="text-xs border-1 bg-info text-white border-accent px-1 rounded-sm">
                    Default
                  </p>
                </div>
                <h2 className="">
                  Villa Bintaro Regency, Jl.Lombok II Blok G2 No.9 Pondok Aren,
                  Tangerang Selatan. 15220
                </h2>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400">021-7587535</h2>
                  <button className="flex btn btn-outline btn-accent btn-xs font-bold normal-case">
                    Deliver To This Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full items-end">
          <div className=" w-full rounded-xl shadow-sm">
            <div className="p-3 rounded-t-xl">
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <h2 className="font-bold">Osha Prima Adidaya</h2>
                  <p className="text-gray-400 text-sm">( Apartment)</p>
                </div>
                <h2 className="">
                  437 W Cambridge Ave Greenwood, South Carolina(SC), 29646{" "}
                </h2>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400">(864) 223-5297</h2>
                  <div className="flex space-x-2 mt-4">
                    <button className="flex btn btn-outline btn-black btn-xs font-bold normal-case">
                      Delete
                    </button>
                    <button className="flex btn btn-outline btn-accent btn-xs font-bold normal-case">
                      Deliver To This Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Footer = () => {
    return (
      <>
        <div className="flex justify-between items-center">
          <div className="items-start">
            <Link to="/checkout">
              <div className="text-gray-600 hover:text-gray-500 text-sm space-x-2 my-3 flex group">
                <i className="fas fa-arrow-left transition-all group-hover:mr-1"></i>
                <h2 className="font-bold">Back</h2>
              </div>
            </Link>
          </div>
          <div>
            <button className="text-accent btn btn-ghost btn-sm hover:bg-gray-200 normal-case">
              + Add New Address
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* DIV PRODUCT CARD */}
      <div className="w-1/2 flex flex-col space-y-4">
        {TableAdress()}
        {Footer()}
      </div>
    </>
  );
};

export default BillingAddress;
