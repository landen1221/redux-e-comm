import { Route, Switch, Redirect } from "react-router-dom";
import AllItems from "./AllItems";
import ProductDetails from "./ProductDetails";
import CartDetails from './CartDetails'

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><AllItems /></Route>
      <Route exact path="/products/:id"><ProductDetails /></Route>
      <Route exact path="/cart"><CartDetails /></Route>
      
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
