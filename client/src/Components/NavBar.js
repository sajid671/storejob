import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CartJS from "./Cart";
import { Home } from "./home";
import ProductsJS from "./Products";

export default function Nav() {
  return (
    <Router>
<nav className="navbar navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/"><img style={{height:100}} src="https://raw.githubusercontent.com/DwinaTech/public-images/main/DwinaTech-brand.png" alt="" /></Link>
    <form className="d-flex">
    <Link className="btn btn-light" to="/cart"><i class="bi bi-cart3"></i></Link>
    </form>
  </div>
</nav>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <ProductsJS />
          </Route>
          <Route path="/cart">
            <CartJS />
          </Route>
        </Switch>
    </Router>
  );
}