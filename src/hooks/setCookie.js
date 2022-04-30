import Cookie from "js-cookie";

export const setCartCookie = (cookiename, cartItems) => {
  Cookie.set("selectedCart", cartItems, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};
export const setAddressCookie = (cookiename, cartItems) => {
  Cookie.set("selectedAdress", cartItems, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};
export const setPaymentCookie = (cookiename, cartItems) => {
  Cookie.set("selectedPayment", cartItems, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};
