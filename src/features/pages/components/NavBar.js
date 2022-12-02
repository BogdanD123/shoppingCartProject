import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navigationBarContainer">
      <div className="logoPage">
        <NavLink to={"/"}>
          <img
            className="logoPageImage"
            src="https://www.creativefabrica.com/wp-content/uploads/2020/02/09/shopping-cart-logo-Graphics-1-1-580x386.jpg"
            alt="homePagePic"
          ></img>
        </NavLink>
      </div>
      <div className="navigationPages">
        <NavLink to={"/products"} className="products pages">
          Products
        </NavLink>
        <NavLink to={"/contact"} className="contactInfo pages">
          Contact info
        </NavLink>
        <NavLink to={"/shopping"} className="shoppingCart pages ">
          Shopping Cart
          <span>0</span>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
