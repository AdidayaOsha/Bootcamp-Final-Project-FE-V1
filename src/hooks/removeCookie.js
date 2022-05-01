import Cookie from "js-cookie";

const removeCookie = (selectedCart) => {
  Cookie.remove("selectedCart");
};

export default removeCookie;
