import { Link, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import "./CSS/ProductDetails.css";
import Cart from "./Cart";
import AddToCart from "./AddToCart";
import Quantity from "./Quantity";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProductDetails = ({quantity}) => {
  const { id } = useParams();
  const inventory = useSelector((store) => store.inventory);
  const { name, price, description, image_url } = inventory[id];

  const [cartUpdate, setCartUpdate] = useState({ name, quantity: 1, price });

  const dispatch = useDispatch();

  const updateCartPrice = (totalPrice) =>
    dispatch({ type: "UPDATE_TOTAL", totalPrice });

  const addToCart = (newItem) => dispatch({ type: "ADD_TO_CART", newItem });

  function pushToCart() {
    const updatePrice = cartUpdate.quantity * price;
    updateCartPrice(updatePrice);
    addToCart(cartUpdate);
  }

  return (
    <div className="ProductDetails">
      <Grid container spacing={0}>
        <Grid id="backButton" item xs={2}>
          <Link to="/">
            <Button variant="outlined" color="primary">
              Back
            </Button>
          </Link>
        </Grid>

        <Grid item xs={8}>
          <div className="Item">
            <img src={image_url} width="350px" alt={`${name}`} /> <hr/>
            <h2>{name}</h2>
            <h4>${price}</h4>
            <p id="details">{description}</p>
            <Quantity setCartUpdate={setCartUpdate} cartUpdate={cartUpdate} />
            <AddToCart pushToCart={pushToCart}/>
          </div>
        </Grid>

        <Grid id="cart" item xs={2}>
          <Cart />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
