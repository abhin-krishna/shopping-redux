const initialState = {
  products: [],
  cart: [],
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return { ...state, products: action.payload };
      case "ADD_TO_CART":
        return {...state,cart:[...state.cart,action.payload]}
      case "DELETE_FROM_CART":
        return{...state,cart:state.cart.filter(c=>c.product.id!==action.payload.product.id)}
    default:
      return state;
  }
};
export default shoppingReducer;
