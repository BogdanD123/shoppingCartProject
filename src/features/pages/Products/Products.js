import React, { useState, useEffect } from "react";
import Categories from "../components/Categories/Categories";
import SingleProduct from "./SingleProduct";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((req) => req.json())
      .then((res) => setProducts(res.products));
  }, []);

  const handleFilter = (data) => {
    setFilter(data);
  };

  const prepareData = () => {
    if (filter === "all") {
      return products;
    }
    return products.filter((item) => item.category === setProducts(filter));
  };

  if (products.length === 0) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <>
      <Categories filter={filter} handleFilter={handleFilter} />
      <div className="productsContainer">
        {prepareData() &&
          prepareData().map((item, index) => {
            return (
              <div key={index} className="singleProductContainer">
                <SingleProduct data={item} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Products;
