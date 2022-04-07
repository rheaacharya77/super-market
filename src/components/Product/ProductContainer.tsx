import React from "react";
import {Row,Container} from "react-bootstrap";
import CategorySideBar from "../Category/CategorySideBar";
import "../../assets/style/Product.css";
import ProductsCard from "../ProductCard/ProductsCard";

const ProductContainer = ({products}:any) => {
  return (
      <div className="products">
        <Container>
        <Row>
            <div className="col-md-4 products-left">
              <CategorySideBar />
            </div>
            <div className="col-md-8 products-right">
              <ProductsCard products={products}/>
            </div>
            <div className="clearfix"></div>
          </Row>
        </Container>
        </div>
  );
};

export default ProductContainer;