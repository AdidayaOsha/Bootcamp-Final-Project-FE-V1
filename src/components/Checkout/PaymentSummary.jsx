import React from "react";

const PaymentSummary = () => {
  const TableBilling = () => {
    return (
      <>
        {/* RIGHT COL ORDER SUMMARY */}
        <div className=" w-full flex flex-col ">
          <div className="w-full rounded-xl flex flex-col p-4 shadow-sm">
            {/* Title Order Summary */}
            <div>
              <h1 className="font-bold">Order Summary</h1>
            </div>
            <div className="space-y-6 text-sm mt-4">
              <div className="flex justify-between">
                <h2 className="text-gray-400">Sub Total</h2>
                <h2 className="font-bold">Rp. 20000</h2>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-400">Discount</h2>
                <h2 className="font-bold">-</h2>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-400">Shipping</h2>
                <h2 className="font-bold">Free</h2>
              </div>
              <span className="flex border-top h-[2px] bg-slate-100 w-full"></span>
              <div className="flex justify-between">
                <div className="text-lg font-bold">
                  <h2>Total</h2>
                </div>
                <div className="">
                  <h2 className="text-lg font-bold text-red-400 text-right">
                    Rp. 2.000.000
                  </h2>
                  <p className="text-xs font-extralight text-right italic">
                    (PPN Included if Applicable)
                  </p>
                </div>
              </div>
              <div className="border-2 rounded-md flex justify-between p-2">
                <h2 className="text-lg">DISCOUNT5</h2>
                <button className="btn btn-ghost text-accent btn-sm">
                  Apply
                </button>
              </div>
            </div>
          </div>
          <button className="mt-4 btn btn-block btn-accent text-white">
            CHECKOUT
          </button>
        </div>
      </>
    );
  };
  const TableAddress = () => {
    return (
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
              <h2 className="text-sm">
                Villa Bintaro Regency, Jl.Lombok II Blok G2 No.9 Pondok Aren,
                Tangerang Selatan. 15220
              </h2>
              <div className="flex justify-between items-center">
                <h2 className="text-gray-400">021-7587535</h2>
                <button className="flex btn btn-ghost text-accent hover:text-green-500 hover:bg-white btn-xs font-bold normal-case">
                  Choose Another Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="w-1/2 flex flex-col space-y-2">
        <div className="w-full flex space-x-6">
          {/* Delivery Time */}
          <div className="w-full h-36 rounded-xl shadow-sm bg-gray-50">
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
                      className="text-left text-md border-2 rounded-md"
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
          <div className=" w-full h-36 rounded-xl shadow-sm bg-gray-50">
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
                  >
                    <option value="">JNE</option>
                    <option value="">TIKI</option>
                    <option value="">NINJA</option>
                    <option value="">Go-Send</option>
                    <option value="">Grab-Send</option>
                  </select>
                  <h2 className="text-teal-400 text-md italic">Rp 25.000</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT OPTIONS */}
        <div className=" w-full rounded-xl shadow-sm bg-gray-50">
          <div className="p-3 rounded-t-xl">
            <div className="flex flex-col">
              <div className="space-x-2">
                <h2 className="font-bold">Payment</h2>
              </div>
              <span className="border-1 w-full mt-2"></span>
              <div className="flex flex-col mt-4 space-y-4">
                <h2 className="mb-2">Pay Via Bank Transfer</h2>
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

      <div className="w-3/12 flex flex-col items-end space-y-1">
        {TableAddress()}
        {TableBilling()}
      </div>
    </>
  );
};

export default PaymentSummary;