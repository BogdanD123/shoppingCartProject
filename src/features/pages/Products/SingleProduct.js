import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./SingleProduct.css";
function SingleProduct({ data, SingleProductInfo = false }) {
  const { title, thumbnail, price, rating, id, description } = data;

  if (SingleProductInfo) {
    return (
      <>
        <div className="contentContainer">
          <div className="singleProduct">
            <img
              className="imageOfProduct"
              src={thumbnail}
              alt={"somePicture"}
            />
            <div className="titleOfProduct">{title}</div>
            <div className="description">{description}</div>
            <div className="rating-price-info-container">
              <div className="singleProductRatingPrice">
                <div>{rating}Rating</div>
                <div className="priceOfProduct">Price:{price}$</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="singleProduct">
      <img className="imageOfProduct" src={thumbnail} alt="somePic" />
      <div className="titleOfProduct">{title}</div>
      <div className="description">{description}</div>
      <div className="rating-price-info-container">
        <div className="ratingPrice">
          <div>{rating}Rating</div>
          <div className="priceOfProduct">Price:{price}$</div>
        </div>
        <NavLink to={`/products/${id}`} className="productInfo">
          About Product...
        </NavLink>
      </div>
    </div>
  );
}

export default SingleProduct;
