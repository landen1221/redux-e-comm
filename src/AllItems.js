import SaleItem from "./SaleItem";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Cart from './Cart'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cartItem: {
      paddingLeft: '15px',
  },
}));

const AllItems = () => {
  const inventory = useSelector((store) => store.inventory);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.cartItem} item xs={8}>
          <ul>
            {Object.keys(inventory).map((keyName) => {
              return (
                <SaleItem
                  item={inventory[keyName]}
                  key={keyName}
                  id={keyName}
                />
              );
            })}
          </ul>
        </Grid>
        <Grid item xs={4}>
            <Cart />
        </Grid>
      </Grid>
    </div>
  );
};

export default AllItems;
