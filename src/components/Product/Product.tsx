import React, { useState, useEffect } from "react";

import {Spinner } from "react-bootstrap";
import ProductContainer from "./ProductContainer";
import { ProductInterface } from "../../types/products";
import "../../assets/style/Product.css";
import Topselling from "../Topselling/Topselling";
// import offer from "../../assets/images/offer.png";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";

const Product = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);
 

  const getProducts = async () => {
    let response: any = await fetch(`${baseURL}/api/v4/product`, {
      method: "GET",
      headers: {
        "Warehouse-Id": warehouseId,
        "Api-key": apiKey,
      },
    });
    let newData = await response.json();
    //  console.log(newData.data);
    setProducts(newData.data);
    // console.log(products);
    setLoading(false);
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // console.log(products)
  if (loading) {
    return <Spinner animation={"border"} />;
  }
  return (
    <>
    <ProductContainer products={products} />  
    </>
  );
};

export default Product;
