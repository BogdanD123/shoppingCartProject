import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import "./Categories.css";
function Categories({ filter, handleFilter }) {
  const [categories, setCategoires] = useState(["All"]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories/`)
      .then((req) => req.json())
      .then((res) => {
        setCategoires([...categories, ...res]);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="categoriesContainer">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="singleCategoryContainer"
              onClick={() => handleFilter(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
