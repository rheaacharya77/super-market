import React from "react";
import Category from "./Category";
import {Row,Container} from "react-bootstrap";
import CategorySideBar from "./CategorySideBar";

import "../../assets/style/Product.css";


const CategoryContainer = ({ categoryid }: any) => {
  return (
    <div className="products">
      <Container>
       <Row>
          <div className="col-md-4 products-left">
            <CategorySideBar />
          </div>
          <div className="col-md-8 products-right">
            <Category categoryid={categoryid} />
          </div>
          <div className="clearfix"></div>
       </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
