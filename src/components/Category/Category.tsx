import React, { useState, useEffect } from "react";
import {Spinner} from "react-bootstrap";
import {ProductInterface} from "../../types/products";
import "../../assets/style/Product.css";
import ProductContainer from "../Product/ProductContainer";
const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";

interface Props {
  categoryid: number;
}

const CategoryDisplay = ({categoryid }: Props) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);


  const getProducts = async () => {
    let response: any = await fetch(
      `${baseURL}/api/v4/product?categoryId=${categoryid}`,
      {
        method: "GET",
        headers: {
          "Warehouse-Id": warehouseId,
          "api-key": apiKey,
        },
      }
    );
    let newData = await response.json();
    //  console.log(newData.data);
    setProducts(newData.data);
    // console.log(productsbycategory);
    setLoading(false);
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (err) {
      console.log(err);
    }
  },[]);

  console.log(products);

  if (loading) {
    return <Spinner animation={"border"} />;
  }
  
  return (
   <>
   <ProductContainer products={products}/>
   </>
  );
};

export default CategoryDisplay;
