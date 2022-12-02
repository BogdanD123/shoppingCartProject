import React from "react";
import NavBar from "../components/NavBar";
import "./ShoppingCart.css";
function ShoppingCart() {
  return (
    <div>
      <NavBar />
      <div className="contentShoppingContainer">
        <div>
          <div className="titleShoppingCart">This is your shopping cart</div>
        </div>
        <div className="shoppingCartProducts">
          <div></div>
          <div className="buttons">
            <button className="addProduct">+</button>
            <button className="removeProduct">-</button>
            <button className="removeAllProducts">REMOVE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
