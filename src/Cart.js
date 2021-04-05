import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./CSS/Cart.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
  },
  title: {
    fontSize: 18,
  },
});

export default function Cart() {
  const classes = useStyles();

  const cart = useSelector((store) => store.cart);
  console.log(cart.items);

  return (
    <Card className={classes.root} id="Card">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Shopping Cart
        </Typography>
        <hr />
        <Typography variant="body" id="cartList">
          <p>Items:</p>

          <ul>
            {cart.items.length === 0 ? <li>Cart empty</li> : ""}
            {cart.items.map((item, idx) => {
              return (
                <li key={idx}>
                  ${item.price * item.quantity} --{item.name} (Qty:{" "}
                  {item.quantity})
                </li>
              );
            })}
          </ul>
          <br />
          <p id="subtotal">Subtotal: ${cart.totalPrice}</p>
        </Typography>
        <hr />
        <Link to="/cart">
          <Button size="small" variant="contained" color="primary">
            Checkout/Edit
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
