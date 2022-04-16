import React from "react";
import { Link } from "react-router-dom";

const OrderProgress = () => {
  return (
    <>
      {/* HEADER STARTS */}
      <div className="">
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

      <div className="h-[600px] flex w-screen space-x-2 pt-5 justify-end pr-48">
        {/* DIV PRODUCT CARD */}
        <div className="w-1/2">
          <div className="w-full h-full">
            {/* TABLE STARTS HERE */}
            <div className=" w-full h-2/5 rounded-xl border-1">
              <div className="bg-red-200 p-3 rounded-t-xl">
                <h2>
                  Cart <span className="text-gray-400">(1 Item)</span>
                </h2>
              </div>
              <div className="h-3/5 flex space-x-5 w-full px-2">
                <table className="w-full">
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
                    <tr className="bg-red-200 text-center">
                      <td>
                        <div className="flex items-center">
                          <div>
                            <img
                              className="mask mask-squircle w-20"
                              src="https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=20&m=956501428&s=612x612&w=0&h=UC4qdZa2iA0PJvv0RIBlJDyF80wxFyLPq4YWvZa30Sc="
                            />
                          </div>
                          <div>
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
                                  <span className="text-black">Green</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-left">Rp. 100</td>
                      <td className="text-left">
                        <div>
                          <div className="flex border-1 rounded-md space-x-4 items-center justify-center align-middle">
                            <span className="text-4xl">-</span>
                            <span className="text-1xl">2</span>
                            <span className="text-2xl">+</span>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs text-center">
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
                <div className="text-gray-400 hover:text-gray-500 text-sm space-x-2 mt-3 flex group">
                  <i className="fas fa-arrow-left transition-all group-hover:mr-1"></i>
                  <h2 className=" font-bold">Continue Shopping</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* DIV ORDER SUMMARY */}
        <div className=" w-1/4 flex flex-col">
          <div className="w-full h-3/4 bg-slate-200 rounded-xl">HIHIHI</div>
          <button className="mt-4 btn btn-block btn-accent text-white">
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderProgress;
