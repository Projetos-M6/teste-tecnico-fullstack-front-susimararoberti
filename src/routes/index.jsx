import { Route, Switch } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";

function Routes() {
  return (
    <Switch>
      <Route path="/registro" exact>
        <Register />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      {/* ultimo */}
      <Route path="/">{/* <Home /> */}</Route>
    </Switch>
  );
}

export default Routes;
