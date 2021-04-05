import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const Quantity = ({ handleChange, quantity }) => {
  return(
    <form noValidate autoComplete="off">
      <div>
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
      </div>
    </form>
  );
};

export default Quantity;
