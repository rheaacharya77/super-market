import React from "react";
import Product from "../components/Product/Product";
import CategorySideBar from "../components/Category/CategorySideBar"

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <CategorySideBar />
          </div>
          <div className="col-lg-8 col-md-12">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
