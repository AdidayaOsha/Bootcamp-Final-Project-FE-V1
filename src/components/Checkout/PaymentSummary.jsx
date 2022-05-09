import React, { useState, useEffect } from "react";
import Axios from "axios";
import { API_URL } from "../../constant/api.js";

const PaymentSummary = () => {
  const [shipmentOption, setShipmentOptions] = useState([]);
  const [shipmentValue, setShipmentValue] = useState("");
  console.log(shipmentOption);
  console.log(shipmentValue);

  useEffect(() => {
    const getShipments = async () => {
      try {
        const results = await Axios.get(`${API_URL}/carts/getshipments`);
        setShipmentOptions(results.data);
      } catch (err) {
        console.log(err);
      }
    };
    getShipments();
  }, []);

  const selectShipmentOptions = () => {
    return shipmentOption.map((val) => {
      return <option value={val.name}>{val.name}</option>;
    });
  };

  return (
    <>
      <div className="w-1/2 flex flex-col space-y-2 ">
        <div className="w-full flex space-x-6">
          {/* Delivery Time */}
          <div className="w-full h-32 rounded-xl shadow-sm ">
            <div className="p-3 rounded-t-xl">
              <div className="flex flex-col justify-between ">
                <div className="space-x-2">
                  <h2 className="font-bold">Delivery Time</h2>
                </div>
                <div className="mt-2">
                  <div className="">
                    <select
                      name=""
                      id=""
                      className="text-left text-md border-2 rounded-md text-md"
                    >
                      <option value="">Same Day</option>
                      <option value="">Next Day</option>
                      <option value="">Regular(3-5 days)</option>
                    </select>
                    <div clas>
                      <p className="text-sm text-gray-400 mt-2">
                        Estimated Time Arrive:
                      </p>
                      <p className="text-sm text-gray-400">April 19th, 2022.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Choose Courier */}
          <div className=" w-full h-32 rounded-xl shadow-sm ">
            <div className="p-3 rounded-t-xl">
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <h2 className="font-bold">Available Service </h2>
                  <p className="text-xs border-1 bg-info text-white border-accent px-1 rounded-sm">
                    Choose One
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <select
                    name=""
                    id=""
                    className="text-left text-md border-2 rounded-md w-1/2"
                    onChange={(e) => setShipmentValue(e.target.value)}
                  >
                    {selectShipmentOptions()}
                  </select>
                  <h2 className="text-teal-400 text-md italic">Rp 25.000</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT OPTIONS */}
        <div className=" w-full rounded-xl shadow-sm ">
          <div className="p-3 rounded-t-xl">
            <div className="flex flex-col">
              <div className="space-x-2">
                <h2 className="font-bold">Cart Summary</h2>
              </div>
              <span className="border-1 w-full mt-2"></span>
              <div className="flex flex-col mt-4 space-y-4">
                <h2 className="mb-2">Please check twice before you checkout</h2>
                <div className="form-control rounded-xl border-0 ">
                  <div className="flex justify-between w-full items-center">
                    <div className="flex space-x-4">
                      <img
                        src="https://www.yayasansimetri.or.id/wp-content/uploads/2021/03/Logo-BCA-blue-A4.png"
                        alt=""
                        className="w-12"
                      />
                      <div className="flex flex-col">
                        <span className="label-text text-left">
                          BCA Bank Transfer
                        </span>
                        <span className="label-text text-sm text-gray-400">
                          360037812 a.n E-Commerce
                        </span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="radio-6"
                      className="radio checked:bg-accent items-end"
                      checked
                    />
                  </div>
                </div>
                <div className="form-control rounded-xl border-0">
                  <div className="flex justify-between w-full items-center ">
                    <div className="flex space-x-4">
                      <img
                        src="https://mpng.subpng.com/20180815/ab/kisspng-bank-mandiri-depok-logo-bank-mandiri-semarang-kred-5b74ed29b6a585.5966533915343895457481.jpg"
                        alt=""
                        className="w-12"
                      />
                      <div className="flex flex-col">
                        <span className="label-text text-left">
                          Mandiri Bank Transfer
                        </span>
                        <span className="label-text text-gray-400">
                          8256000378274 a.n E-Commerce
                        </span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="radio-6"
                      className="radio checked:bg-accent"
                      checked
                    />
                  </div>
                </div>
                <div className="form-control rounded-xl border-0">
                  <div className="flex justify-between w-full items-center ">
                    <div className="flex space-x-4">
                      <img
                        src="https://download.logo.wine/logo/PayPal/PayPal-Logo.wine.png"
                        alt=""
                        className="w-12"
                      />
                      <div className="flex flex-col">
                        <span className="label-text text-left">Paypal</span>
                        <span className="label-text text-sm text-gray-400">
                          You will be redirected to PayPal website to complete
                          your purchase securely.
                        </span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="radio-6"
                      className="radio checked:bg-accent"
                      checked
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSummary;
