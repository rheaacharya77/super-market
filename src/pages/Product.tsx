import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import ProductContainer from "../components/Product/ProductContainer";


const Products = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Products" />
    <ProductContainer />
    </>
            
     
  );
};

export default Products;
