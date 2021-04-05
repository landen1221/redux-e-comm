import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CSS/CartDetails.css";
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid'

const CartDetails = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((store) => store.cart);
  
  const removeFromCart = (name) => dispatch({type: "REMOVE_FROM_CART", name})

  return (
    <>
      <Link to="/">
        <Button size="small" variant="outlined" color="primary">
          Continue Shopping
        </Button>
      </Link>
      <div className="CartDetails">
        <h1>My Cart!</h1>
        {items.map((item) => {
          return (
            <p key={uuid()}>
              <b>Item:</b> {item.name} <b>Quantity:</b> {item.quantity}{" "}
              <b>Total Price: </b>${item.quantity * item.price}
              <button onClick={() => removeFromCart(item.name)}>x</button>
            </p>
          );
        })}
        <p>Subtotal: ${totalPrice}</p>
      </div>
    </>
  );
};

export default CartDetails;
