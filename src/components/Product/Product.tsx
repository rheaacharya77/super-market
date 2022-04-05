import React, { useState, useEffect } from "react";

import { Row,Spinner,Form } from "react-bootstrap";
import ProductsCard from "../ProductCard/ProductsCard";

import "../../assets/style/Product.css";


const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
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

  // console.log(products);

  if (loading) {
    return <Spinner animation={"border"} />;
  }
  

  return (
    <>
    <div className="products-right-grid">
    <div className="products-right-grids">
      <div className="sorting">
        <Form.Select className="frm-field required sect">
          <option value="null">Default sorting</option>
          <option value="sortAsc">Sort by Alphabetical Order(A-Z)</option>
          <option value="sortDesc">Sort by Alphabetical Order(Z-A)</option>
          <option value="sortAsc">Sort by price(High-Low)</option>
          <option value="sortDesc">Sort by price(Low-High)</option>
        </Form.Select>
      </div>
      <div className="sorting-left">
        <Form.Select className="frm-field required sect">
          <option value="null">Item on page 9</option>
          <option value="null">Item on page 18</option>
          <option value="null">Item on page 32</option>
          <option value="null">All</option>
        </Form.Select>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>     
          <div className="agile_top_brands_grids">
            <Row>
              {products &&
                products.map((product) => {
                  return (
                    <div className="col-md-4 top_brand_left" key={product.id}>
                      <ProductsCard products ={product} />
                    </div>
                  );
                })}
            </Row>
            <div className="clearfix"> </div>
          </div>
    
    </>
  );
};

export default Products;
