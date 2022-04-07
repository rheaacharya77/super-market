import React from "react";

import Product from "../components/Product/Product";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";


const Products = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Products" />
    <Product/>
    </>
            
     
  );
};

export default Products;
