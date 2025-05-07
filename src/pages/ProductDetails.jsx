import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const param = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${param.id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [param.id]);

  return (
    <div className="container product-details">
      <img src={product.thumbnail} alt="" />

      <div className="product-details-content">
        <small>In Stock: {product.stock}</small>

        <p>Name: {product.title}</p>

        <p>Price: {product.price}</p>

        <p>Rating: {product.rating}</p>

        <p>Description: {product.description}</p>

        <small>Return Policy: {product.returnPolicy}</small>
      </div>
    </div>
  );
};

export default ProductDetails;
