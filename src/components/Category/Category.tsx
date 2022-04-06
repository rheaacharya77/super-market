import React, { useState, useEffect } from "react";
import { Row, Spinner,Form} from "react-bootstrap";
import ProductsCard from "../ProductCard/ProductsCard";
import {ProductInterface} from "../../types/products";
import "../../assets/style/Product.css";
import Pagination from "../Pagination/Pagination";
const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";

interface Props {
  categoryid: number;
}


const CategoryDisplay = ({ categoryid }: Props) => {
  const [productsbycategory, setProductsByCategory] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

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
  },[]);

  console.log(productsbycategory);
  if (loading) {
    return <Spinner animation={"border"} />;
  }
   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
     // Change page
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

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
              {productsbycategory &&
                productsbycategory.slice(indexOfFirstPost,indexOfLastPost).map((product: any) => {
                  return (
                    <div className="col-md-4 top_brand_left" key={product.id}>
                      <ProductsCard products={product} />
                    </div>
                  );
                })}
            </Row>
            <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={productsbycategory.length}
                    paginate={paginate}
                  />
            <div className="clearfix"></div>
          </div>
</>
  );
};

export default CategoryDisplay;
