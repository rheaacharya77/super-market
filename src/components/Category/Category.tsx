import React, { useState, useEffect } from "react";
import { Row, Spinner} from "react-bootstrap";
import ProductsCard from "../ProductCard/ProductsCard";

import "../../assets/style/Product.css";
import SortHeader from "../SortHeader/SortHeader";

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
   <>
          <SortHeader/>
          <div className="agile_top_brands_grids">
            <Row>
              {productsbycategory &&
                productsbycategory.map((product: any) => {
                  return (
                    <div className="col-md-4 top_brand_left" key={product.id}>
                      <ProductsCard products={product} />
                    </div>
                  );
                })}
            </Row>
            <div className="clearfix"></div>
          </div>
</>
  );
};

export default CategoryDisplay;
