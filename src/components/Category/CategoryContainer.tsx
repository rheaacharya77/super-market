import React from "react";

import CategorySideBar from "./CategorySideBar";

import Category from "./Category";

const CategoryContainer = ({ categoryid }: any) => {
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-md-4 products-left">
            <CategorySideBar />
          </div>
          <div className="col-md-8 products-right">
            <Category categoryid={categoryid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
