import React, { useState, useEffect } from "react";
import { Row, Spinner, Card, Form } from "react-bootstrap";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";

interface Props {
  categoryid: number;
}
const CategoryDisplay = ({ categoryid }: Props) => {
  const [productsbycategory, setProductsByCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    let response: any = await fetch(
      `${baseURL}/api/v4/product?categoryId=${categoryid}`,
      {
        method: "GET",
        headers: {
          "Warehouse-Id": warehouseId,
          "api-key": apiKey,
        },
      }
    );
    let newData = await response.json();
    //  console.log(newData.data);
    setProductsByCategory(newData.data);
    // console.log(productsbycategory);
    setLoading(false);
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // console.log(productsbycategory);

  if (loading) {
    return <Spinner animation={"border"} />;
  }

  console.log(productsbycategory);
  return (
    <div className="products-right">
      <div className="products-right-grid">
        <div className="products-right-grids">
          <div className="sorting">
            <Form.Select className="frm-field required sect">
              <option value="null">Default sorting</option>
              <option value="null">Sort by popularity</option>
              <option value="null">Sort by average rating</option>
              <option value="null">Sort by price</option>
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
          {productsbycategory &&
            productsbycategory.map((product: any) => (
              <div className="col-md-4 top_brand_left" key={product.id}>
                <div className="hover14 column">
                  <Card.Img
                    variant="top"
                    src={product.images[0].imageName}
                    height="300px"
                  />
                  <Card.Body className="text-center">
                    <Card.Title>
                      <h4>{product.title}</h4>{" "}
                    </Card.Title>
                    <div className="stars">
                      <i
                        className="fa fa-star blue-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star blue-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star blue-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star blue-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star gray-star"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <Card.Text>
                      <h4>NRS.{product.unitPrice[0].sellingPrice}</h4>
                    </Card.Text>
                    <div className="snipcart-details top_brand_home_details">
                      <input
                        type="submit"
                        name="submit"
                        value="Add to cart"
                        className="button-cart"
                      />
                    </div>
                  </Card.Body>
                </div>
              </div>
            ))}
        </Row>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default CategoryDisplay;
