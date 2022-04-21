import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_URL } from "../../constant/api";
import Axios from "axios";

const BillingAddress = () => {
  const [data, setData] = useState({});

  const addressHandler = async () => {
    try {
      const res = await Axios.post(`${API_URL}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const TableAdress = () => {
    const userGlobal = useSelector((state) => state.user);
    return userGlobal.user_addresses?.map((val) => {
      return (
        <>
          {/* TABLE ADDRESS HERE */}
          <div className="w-full items-end">
            <div className=" w-full rounded-xl shadow-sm">
              <div className="p-3 rounded-t-xl">
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <h2 className="font-bold">{userGlobal.full_name}</h2>
                    <p className="text-gray-400 text-sm">
                      ({val.address_type})
                    </p>
                    {val.isDefault ? (
                      <p className="text-xs border-1 bg-info text-white border-accent px-1 rounded-sm">
                        Default
                      </p>
                    ) : null}
                  </div>
                  <h2 className="">
                    {val.address_line}, <span>{val.city}</span>
                  </h2>
                  <h2 className="">Postal Code: {val.postal_code}</h2>
                  <div className="flex justify-between items-center">
                    <h2 className="text-gray-400">Phone: {val.phone}</h2>
                    <div className="flex space-x-2">
                      {val.isDefault ? (
                        <button className="flex btn btn-outline btn-accent btn-sm font-bold normal-case">
                          Deliver To This Address
                        </button>
                      ) : (
                        <>
                          <button className="flex btn btn-outline btn-black btn-sm font-bold normal-case">
                            Delete
                          </button>
                          <button className="flex btn btn-outline btn-accent btn-sm font-bold normal-case">
                            Deliver To This Address
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
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
            <label
              for="my-modal-3"
              className="btn modal-button text-accent btn-ghost btn-sm hover:bg-gray-200 normal-case"
              onClick={() => addressHandler()}
            >
              + Add New Address
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  for="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold text-center mb-2">
                  Please Input Your New Address
                </h3>
                <div class="form-control w-full max-w-xs m-auto">
                  <label class="label">
                    <div className="flex ">
                      <span class="label-text">
                        Address{" "}
                        <span className="text-gray-400 text-sm">
                          Ex: Jl. Kenangan Blok V2 No.9
                        </span>
                      </span>
                    </div>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
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
