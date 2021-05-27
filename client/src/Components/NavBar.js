import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CartJS from "./Cart";
import { HomeJS } from "./Home";
import ProductsJS from "./Products";

export default function Nav() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">GrocerApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <Switch>
        <Route exact path="/">
            <HomeJS />
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