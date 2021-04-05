import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

import {useDispatch} from 'react-redux'

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
  const dispatch = useDispatch()

  const [quantity, setQuantity] = React.useState('1');
  const updateCartPrice = (totalPrice) => dispatch({type: "UPDATE_TOTAL", totalPrice})

  const [cartUpdate, setCartUpdate] = React.useState({name, quantity, price})

  const addToCart = (newItem) => dispatch({type: "ADD_TO_CART", newItem})  

  const handleChange = (event) => {
    const newQuantity = event.target.value
    setQuantity(newQuantity);
    setCartUpdate({...cartUpdate, quantity: newQuantity})
  };

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
    
    const updatePrice = quantity * price
    console.log(cartUpdate)
    updateCartPrice(updatePrice)

    addToCart(cartUpdate)

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
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                    <TextField
                      id="itemCount"
                      select
                      value={quantity}
                      onChange={handleChange}
                      helperText="Quantity"
                    >
                      {[1,2,3,4,5].map((val) => (
                        <MenuItem key={val} value={val}>
                          {val}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </form>
                <Button variant="outlined" color="primary" onClick={pushToCart}>
                  Add to Cart
                </Button>
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