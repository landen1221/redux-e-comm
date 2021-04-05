import Button from "@material-ui/core/Button";
import React from 'react'

const AddToCart = ({pushToCart}) => {

    // const [cartUpdate, setCartUpdate] = React.useState({ name, quantity, price });
    // function pushToCart() {
    //     const updatePrice = quantity * price;
    //     updateCartPrice(updatePrice);
    
    //     addToCart(cartUpdate);
    //   }
  return (
    <Button
      size="small"
      variant="outlined"
      color="primary"
      onClick={pushToCart}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;

