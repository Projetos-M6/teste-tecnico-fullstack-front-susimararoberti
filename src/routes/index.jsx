import { Route, Switch } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Contacts from "../pages/contacts";
import Profile from "../pages/profile";

function Routes() {
  return (
    <Switch>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/contacts" exact>
        <Contacts />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/">{/* <Home /> */}</Route>
    </Switch>
  );
}

export default Routes;
