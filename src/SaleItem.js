import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

import './CSS/SaleItem.css'
import Quantity from "./Quantity";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "15px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function SaleItem({ item, id }) {
  const classes = useStyles();
  const { name, price, description, image_url: imgURL } = item;
  const dispatch = useDispatch();

  const updateCartPrice = (totalPrice) =>
    dispatch({ type: "UPDATE_TOTAL", totalPrice });

  const [cartUpdate, setCartUpdate] = React.useState({ name, quantity: 1, price });

  const addToCart = (newItem) => dispatch({ type: "ADD_TO_CART", newItem });


  function titleCase(str) {
    if (str === "tv") {
      return "TV";
    }

    str = str.toLowerCase();
    str = str.split(" ");

    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    return str.join(" ");
  }
  
  function pushToCart() {
    const updatePrice = cartUpdate.quantity * price;
    updateCartPrice(updatePrice);
    addToCart(cartUpdate);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={imgURL} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {titleCase(name)}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {description}
                </Typography>
              </Grid>
              <Grid item>
                <Quantity setCartUpdate={setCartUpdate} cartUpdate={cartUpdate}/>
                <AddToCart pushToCart={pushToCart} />
                <Link to={`/products/${id}`}>
                  <Button
                    size="small"
                    variant="outlined"
                    color="default"
                  >
                    View Details
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">${price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
