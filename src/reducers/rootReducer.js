const inventory = require("../data.json");

const INITIAL_STATE = {
  cart: {
    items: [],
    totalPrice: 0,
  },
  inventory: inventory.products,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // add cart.item (name {quantity & price})
      // update cart.totalPrice
      
      // if cart updated

      return {...state, cart: {...state.cart, items: [...state.cart.items, action.newItem]}};

    case "UPDATE_TOTAL":
        let x = state.cart.totalPrice
        return {...state, cart: {...state.cart, totalPrice: x + action.totalPrice}}
    case "REMOVE_FROM_CART":
      return "removing item";
    default:
      return state;
  }
};

export default rootReducer;

// let x = {...INITIAL_STATE, cart: {...INITIAL_STATE.cart, items: {...INITIAL_STATE.cart.items, newItem}} }

