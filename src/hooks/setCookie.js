import Cookie from "js-cookie";

export const setCartCookie = (cartItems) => {
  Cookie.set("selectedCart", cartItems, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};
export const setAddressCookie = (chosenAddress) => {
  Cookie.set("selectedAddress", chosenAddress, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};
export const setPaymentCookie = (selectedPaymentId) => {
  Cookie.set("selectedPayment", selectedPaymentId, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};
