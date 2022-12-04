import { Route, Switch } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Contacts from "../pages/contacts";
import Profile from "../pages/profile";
import Home from "../pages/home";

function Routes() {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/contacts" exact>
        <Contacts />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
