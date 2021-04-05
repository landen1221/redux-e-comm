import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './CSS/Cart.css'

import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  title: {
    fontSize: 18,
  },
});

export default function Cart() {
  const classes = useStyles();

  const cart = useSelector((store) => store.cart);
  console.log(cart.items)

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
        <hr/>
        <Typography variant="body" id="cartList">
          Items:
          <ul>
              {cart.items.map((item, idx) => {
                  return <li key={idx}>{item.name} (Qty: {item.quantity}) -- ${item.price * item.quantity}</li>
              })}
          </ul>
          <br />
          Subtotal: ${cart.totalPrice}
        </Typography>
        <br/>
        <Button size="small" variant="contained" color="primary">Checkout</Button>
      </CardContent>
        
    </Card>
  );
}
