import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";

function ProductInfo() {
  const { products } = useParams();
  console.log("Here i am");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${products}`)
      .then((req) => req.json())
      .then((res) => setData(res));
  }, [products]);

  return (
    <div className="singleProductContainer">
      {<SingleProduct data={data} SingleProductInfo={true} />}
    </div>
  );
}

export default ProductInfo;
