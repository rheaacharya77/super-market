import React, { useState, useEffect } from "react";
//import {Link} from 'react-router-dom';
import { Container, Row, Spinner } from "react-bootstrap";
import { ProductInterface } from "../../types/products";
import AddProduct from "../Product/AddProduct";
import "../../assets/style/ProductsCard.css";


const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";

const Featured = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(`${baseURL}/api/v4/product`, {
      method: "GET",
      headers: {
        "api-key": apiKey,
        "Warehouse-id": warehouseId,
      },
    });
    const newData = await response.json();
    if(response.status === 200){
    setProducts(newData.data);
    setLoading(false);
    console.log(newData.data);
    }
  };

  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (loading) {
    return <Spinner animation={"border"} />;
  }

  return (
    <div className="newproducts-w3agile">
      <Container>
        <h3>NEW OFFERS</h3>
        <div className="agile_top_brands_grids">
          <Row>
             {products && products.slice(9,13).map((product:any) => {
                return (
                  <div className="col-md-3 top_brand_left-1" key={product.id}>
                    <AddProduct products={product} key={product.id} />
                  </div>
                );
              })}
          </Row>
          <div className="clearfix"> </div>
        </div>
      </Container>
    </div>
  );
};
export default Featured;
