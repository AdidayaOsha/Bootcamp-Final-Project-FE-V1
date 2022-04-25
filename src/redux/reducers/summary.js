const init_state = {
  subTotal: 0,
  totalPrice: 0,
  discount: 0,
  isAddressMode: true,
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "GET_SUBTOTAL":
      return { ...state, subTotal: action.payload };
    case "GET_TOTALPRICE":
      return { ...state, totalPrice: action.payload };
    case "GET_DISCOUNT":
      return { ...state, discount: action.payload };
    case "GET_ADDRESS":
      return { ...state, isAddressMode: action.payload };
    default:
      return state;
  }
};

export default reducer;
