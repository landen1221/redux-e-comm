import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import {useState} from 'react'

const Quantity = ({ setCartUpdate, cartUpdate }) => {
  const [quantity, setQuantity] = useState("1");

  const handleChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);

    setCartUpdate({ ...cartUpdate, quantity: newQuantity });
  };

  return (
    <form noValidate autoComplete="off">

        <TextField
          id="itemCount"
          select
          value={quantity}
          onChange={handleChange}
          helperText="Quantity"
        >
          {[1, 2, 3, 4, 5].map((val) => (
            <MenuItem key={val} value={val}>
              {val}
            </MenuItem>
          ))}
        </TextField>

    </form>
  );
};

export default Quantity;
