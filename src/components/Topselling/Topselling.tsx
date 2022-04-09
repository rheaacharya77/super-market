import React, { useState, useEffect } from "react";
import "../../assets/style/Topselling.css";
import { Container, Row, Spinner } from "react-bootstrap";
import { ProductInterface } from "../../types/products";
import AddProduct from "../Product/AddProduct";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";

const Topselling = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [toggleState, setToggleState] = useState(1);

  const getData = async () => {
    const response = await fetch(`${baseURL}/api/v4/product`, {
      method: "GET",
      headers: {
        "api-key": apiKey,
        "Warehouse-id": warehouseId,
      },
    });
    const newData = await response.json();
    if (response.status === 200) {
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

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <div className="top-brands">
      <Container>
        <h2>Top selling offers</h2>
        <div className="grid_3 grid_5">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <p>SUPER SAVER PACK</p>
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <p>COMBO PACK</p>
            </button>
          </div>

          <Container>
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <Row>
                {products &&
                  products.slice(24, 30).map((product: any) => {
                    return (
                      <div className="col-md-3 col-sm-12 p-3" key={product.id}>
                        <AddProduct products={product} key={product.id} />
                      </div>
                    );
                  })}
              </Row>

              <div className="clearfix"> </div>
            </div>
          </Container>

          <Container>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <Row>
                {products &&
                  products.slice(9, 15).map((product: any) => {
                    return (
                      <div className="col-md-3 col-sm-12 p-3" key={product.id}>
                        <AddProduct products={product} key={product.id} />
                      </div>
                    );
                  })}
              </Row>

              <div className="clearfix"> </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Topselling;
