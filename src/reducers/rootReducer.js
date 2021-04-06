const inventory = require("../data.json");

// item = {name, quantity, price}
const INITIAL_STATE = {
  cart: {
    items: [{name: 'tv', quantity: 2, price: 250}],
    totalPrice: 0,
  },
  inventory: inventory.products,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // add cart.item ({name, quantity, price})
      // update cart.totalPrice
      
      // if cart updated
      const newArray = []
      let update = false
      
      for (let i of state.cart.items) {
        console.log(action.newItem.name)
        console.log(i.name)
        if (action.newItem.name == i.name) {
            i.quantity = i.quantity+action.newItem.quantity
            newArray.push(i)
            update = true
        } else {
            newArray.push(i)
        }
      }

      if (!update) {
          newArray.push(action.newItem)
      }
      
      console.log(newArray)
      

      return {...state, cart: {...state.cart, items: [...newArray]}};

    case "UPDATE_TOTAL":
        let x = state.cart.totalPrice
        return {...state, cart: {...state.cart, totalPrice: x + action.totalPrice}}

    case "REMOVE_FROM_CART":
        console.log('removing')
      return {...state, cart: {...state.cart, items: [...state.cart.items.filter((item)=> item.name !== action.name)], totalPrice: 0}};
    default:
      return state;
  }
};

export default rootReducer;

// let x = {...INITIAL_STATE, cart: {...INITIAL_STATE.cart, items: {...INITIAL_STATE.cart.items, newItem}} }

