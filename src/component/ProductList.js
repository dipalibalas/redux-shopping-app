import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("error ", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ui grid container">
      <ProductCard />
    </div>
  );
};

export default ProductList;
