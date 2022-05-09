import React, { useState, useEffect } from "react";
import Axios from "axios";
import { API_URL } from "../../constant/api.js";
import { getCartCookie } from "../../hooks/getCookie.js";
import { currencyFormatter } from "../../helpers/currencyFormatter.js";
import { setPaymentCookie } from "../../hooks/setCookie.js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

const PaymentSummary = () => {
  const [cartItems, setCartItems] = useOutletContext();
  const [shipmentOption, setShipmentOption] = useState([]);
  const [paymentOption, setPaymentOption] = useState([]);
  const [shipmentValue, setShipmentValue] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [selectedPaymentId, setSelectedPaymentId] = useState("");
  console.log(selectedPaymentId);

  const userGlobal = useSelector((state) => state.user);
  const getCart = getCartCookie() ? JSON.parse(getCartCookie()) : null;

  const getUserCart = async () => {
    const results = await Axios.get(`${API_URL}/carts/get/${userGlobal.id}`);
    setCartItems(results.data.carts);
  };

  const closeModal = () => {
    document.getElementById("my-modal-4").click();
    toast.success("Payment Options Has Been Added!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    getUserCart();
  };

  useEffect(() => {
    const setPaymentOptionsCookie = async () => {
      try {
        if (selectedPaymentId) {
          const results = await Axios.get(
            `${API_URL}/carts/getpaymentoption/${selectedPaymentId}`
          );
          setPaymentCookie(JSON.stringify(results.data));
        }
      } catch (err) {
        console.log(err);
      }
    };
    setPaymentOptionsCookie();
  }, [selectedPaymentId]);

  useEffect(() => {
    const getShipments = async () => {
      try {
        const results = await Axios.get(`${API_URL}/carts/getshipments`);
        setShipmentOption(results.data);
      } catch (err) {
        console.log(err);
      }
    };
    getShipments();
  }, []);

  useEffect(() => {
    const getPaymentOption = async () => {
      try {
        const results = await Axios.get(`${API_URL}/carts/getpaymentoptions`);
        setPaymentOption(results.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPaymentOption();
  }, []);

  const selectShipmentOptions = () => {
    return shipmentOption?.map((val) => {
      return (
        <option key={val.id} value={val.name}>
          {val.name}
        </option>
      );
    });
  };

  const selectPaymentOptions = () => {
    return paymentOption?.map((val) => {
      return (
        <div className="form-control rounded-xl border-0 ">
          <div className="flex justify-between w-full items-center">
            <div className="flex space-x-4">
              <img src={val.logo} alt="" className="w-12" />
              <div className="flex flex-col">
                <span className="label-text text-left">{val.name}</span>
                <span className="label-text text-sm text-gray-400">
                  {val.description}
                </span>
              </div>
            </div>
            <input
              onChange={(e) => setSelectedPaymentId(+e.target.value)}
              value={val.id}
              type="radio"
              name="radio-6"
              className="radio checked:bg-accent items-end"
            />
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    const cartItemsQty = () => {
      let total = 0;
      getCart.forEach((val) => {
        total += val.quantity;
        setQuantity(total);
      });
    };
    cartItemsQty();
  }, []);

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
          <div className=" w-full rounded-xl shadow-sm ">
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
                  <h2 className="text-md">Shipping Cost :</h2>
                  <h2 className="text-teal-400 text-md font-bold">Rp 25.000</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT SUMMARY */}
        <div className=" w-full rounded-xl shadow-sm ">
          <div className="p-3 rounded-t-xl">
            <div className="flex flex-col">
              <div className="flex flex-col mt-4">
                <h2 className="mb-2 font-bold">
                  Here is your Product Details :
                </h2>

                {/* LIST STARTS HERE */}
                <h2 className="text-sm mb-2">
                  Total: <span className="font-bold">{quantity}</span> Items
                </h2>
                {getCart?.map((val) => {
                  return (
                    <div className="form-control rounded-xl border-0 ">
                      <div className="flex justify-between w-full items-center">
                        <div className="flex space-x-4">
                          <img
                            src={`${API_URL}/${val.product.product_image}`}
                            alt=""
                            className="w-12"
                          />
                          <div className="flex flex-col">
                            <span className="label-text text-left">
                              {val.product.name}
                            </span>
                            <span className="label-text text-sm text-gray-400">
                              {val.quantity} x{" "}
                              {currencyFormatter(val.product.price)}
                            </span>
                            <div className="mt-2">
                              <span className="flex border-top h-[1px] bg-slate-100 w-[500px]"></span>
                            </div>
                          </div>
                        </div>
                        <h2 className="text-sm text-gray-500">
                          {currencyFormatter(val.subtotal)}
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* PAYMENT SERVICES */}
              <div className="mt-4">
                <label
                  htmlFor="my-modal-4"
                  className="btn modal-button bg-accent border-none w-1/3 hover:bg-accent"
                >
                  Choose Payment
                </label>

                <input
                  type="checkbox"
                  id="my-modal-4"
                  className="modal-toggle"
                />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                  <label className="modal-box relative" htmlFor="">
                    <div className=" w-full rounded-xl shadow-sm ">
                      <div className="p-3 rounded-t-xl">
                        <div className="flex flex-col">
                          <div className="space-x-2">
                            <h2 className="font-bold">Payment Options</h2>
                          </div>
                          <span className="border-1 w-full mt-2"></span>
                          <div className="flex flex-col mt-4 space-y-4">
                            <h2 className="mb-2">How would you like to pay?</h2>
                            {selectPaymentOptions()}
                          </div>
                          <button
                            onClick={closeModal}
                            className="btn btn-sm btn-accent text-white mt-4"
                          >
                            Choose Payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </label>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSummary;
