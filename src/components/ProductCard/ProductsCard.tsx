import React, { useState, useEffect } from "react";
import { Row, Form } from "react-bootstrap";
import AddProduct from "../Product/AddProduct";
import Pagination from "../Pagination/Pagination";

const ProductsCard = ({ products }: any) => {
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="products-right-grid">
        <div className="products-right-grids">
          <div className="sorting">
            <Form>
              <select className="frm-field required sect">
                <option value="null">Default sorting</option>
                <option value="sortAsc">Sort by Alphabetical Order(A-Z)</option>
                <option value="sortDesc">
                  Sort by Alphabetical Order(Z-A)
                </option>
                <option value="priceAsc">Sort by price(High-Low)</option>
                <option value="priceDesc">Sort by price(Low-High)</option>
              </select>
            </Form>
          </div>
          <div className="sorting-left">
            <Form>
              <select className="frm-field required sect">
                <option value="null">Item on page 9</option>
                <option value="null">Item on page 18</option>
                <option value="null">Item on page 32</option>
                <option value="null">All</option>
              </select>
            </Form>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      <div className="agile_top_brands_grids">
        <Row>
          {products &&
            products
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((product: any) => {
                return (
                  <div className="col-md-4 top_brand_left" key={product.id}>
                    <AddProduct products={product} key={product.id} />
                  </div>
                );
              })}
        </Row>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        />
        <div className="clearfix"> </div>
      </div>
    </>
  );
};

export default ProductsCard;
