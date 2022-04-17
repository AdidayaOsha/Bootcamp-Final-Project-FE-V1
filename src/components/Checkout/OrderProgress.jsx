import React from "react";
import { Link } from "react-router-dom";

const OrderProgress = () => {
  return (
    <>
      {/* HEADER STARTS */}
      <div className="mt-20">
        {/* Checkout Links */}
        <div className="ml-60 mt-10 mb-4">
          <div>
            <h1 className="text-xl font-bold mb-2">Checkout</h1>
          </div>
          <div className="flex flex-row space-x-4">
            <Link to="/" className="hover:text-gray-500 text-sm">
              <h2>Dashboard</h2>
            </Link>
            <span>•</span>
            <Link to="/" className="hover:text-gray-500 text-sm">
              <h2>E-Commerce</h2>
            </Link>

            <span>•</span>
            <h2 className="text-sm">Checkout</h2>
          </div>
        </div>

        <div className="mr-60">
          {/* Progress Bar Nya */}
          <div className="w-100 flex justify-center space-x-5 text-center items-center">
            <span className="text-4xl text-gray-400">•</span>
            <span className="flex border-top h-[2px] bg-slate-100 w-[200px]"></span>
            <span className="text-4xl text-gray-400">•</span>
            <span className="flex border-top h-[2px] bg-slate-100 w-[200px]"></span>
            <span className="text-4xl text-gray-400">•</span>
          </div>

          {/* Progress Head */}
          <div className="w-100 flex justify-center">
            <div>
              <p className="text-sm text-gray-500 font-bold">Cart</p>
            </div>
            <div className="mx-40 ">
              <p className="text-sm text-gray-400 font-bold ml-10">
                Billing & Address
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-bold">Payment</p>
            </div>
          </div>
        </div>
      </div>
      {/* HEADER ENDS */}

      <div className="flex w-screen space-x-4 pt-5 justify-end pr-48">
        {/* DIV PRODUCT CARD */}
        <div className="w-1/2">
          <div className="w-full">
            {/* TABLE STARTS HERE */}
            <div className=" w-full rounded-xl shadow-sm">
              <div className="p-3 rounded-t-xl">
                <h2 className="font-bold">
                  Cart <span className="text-gray-400">(1 Item)</span>
                </h2>
              </div>
              <div className="h-3/5 flex space-x-5 w-full px-2">
                <table className="w-full my-2">
                  <thead>
                    <tr className=" text-sm text-gray-500 h-14 bg-slate-100 ">
                      <th className="text-left w-1/2 rounded-l-md pl-2">
                        Product
                      </th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th className="rounded-r-md">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="text-center h-20 border-none">
                      <td>
                        <div className="flex items-center">
                          <div>
                            <img
                              className="mask mask-squircle w-20"
                              src="https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=20&m=956501428&s=612x612&w=0&h=UC4qdZa2iA0PJvv0RIBlJDyF80wxFyLPq4YWvZa30Sc="
                            />
                          </div>
                          <div className="space-y-1">
                            <div>
                              <p className="font-bold">
                                Nike Air Force 1 NDESTRUKT
                              </p>
                            </div>
                            <div className="flex">
                              <div>
                                <p className="text-gray-400">
                                  Size: <span className="text-black">9</span>
                                </p>
                              </div>
                              <span className="border-1 h-5 mx-2"></span>
                              <div>
                                <p className="text-gray-400">
                                  Color:
                                  <span className="text-black"> Green</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-left">Rp. 200000</td>
                      <td className="text-left">
                        <div>
                          <div className="flex border-1 rounded-md space-x-4 items-center justify-center align-middle">
                            <span className="text-4xl">-</span>
                            <span className="text-1xl">1</span>
                            <span className="text-2xl">+</span>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs text-center mt-1">
                              available: 42
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">Rp. 2000</td>
                      <td>
                        <i className="fas fa-trash-alt"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <Link to="/">
                <div className="text-gray-400 hover:text-gray-500 text-sm space-x-2 my-3 flex group">
                  <i className="fas fa-arrow-left transition-all group-hover:mr-1"></i>
                  <h2 className="font-bold">Continue Shopping</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COL ORDER SUMMARY */}
        <div className=" w-3/12 flex flex-col ">
          <div className="w-full rounded-xl flex flex-col p-4 shadow-sm">
            {/* Title Order Summary */}
            <div>
              <h1 className="font-bold">Order Summary</h1>
            </div>
            <div className="space-y-6 text-sm mt-4">
              <div className="flex justify-between">
                <h2>Sub Total</h2>
                <h2 className="font-bold">Rp. 20000</h2>
              </div>
              <div className="flex justify-between">
                <h2>Discount</h2>
                <h2>-</h2>
              </div>
              <div className="flex justify-between">
                <h2>Shipping</h2>
                <h2 className="font-bold">Free</h2>
              </div>
              <span className="flex border-top h-[2px] bg-slate-100 w-full"></span>
              <div className="flex justify-between">
                <div className="text-lg font-bold">
                  <h2>Total</h2>
                </div>
                <div className="">
                  <h2 className="text-lg font-bold text-accent text-right">
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
      </div>
    </>
  );
};

export default OrderProgress;
