import React from "react";
import {Row,Container} from "react-bootstrap";
import CategorySideBar from "../Category/CategorySideBar";
import "../../assets/style/Product.css";
import Products from "./Product";

const ProductContainer = () => {
  return (
      <div className="products">
        <Container>
        <Row>
            <div className="col-md-4 products-left">
              <CategorySideBar />
            </div>
            <div className="col-md-8 products-right">
              <Products />
            </div>
            <div className="clearfix"></div>
          </Row>
        </Container>
        </div>
  );
};

export default ProductContainer;