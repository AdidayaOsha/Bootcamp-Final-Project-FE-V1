import Cookie from "js-cookie";

const getCookie = (selectedCart) => {
  return Cookie.get("selectedCart");
};

export default getCookie;
