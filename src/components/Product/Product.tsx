import React, { useState, useEffect, ChangeEvent } from "react";

import { Row, Spinner, Form } from "react-bootstrap";
import ProductsCard from "../ProductCard/ProductsCard";
import { ProductInterface } from "../../types/products";
import "../../assets/style/Product.css";
// import offer from "../../assets/images/offer.png";
import Pagination from "../Pagination/Pagination";
const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";

const Products = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

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

  //sorting
  //   const [sort, setSort] = useState('');
  //   const [productsToSort, setProductsToSort] = useState<ProductInterface[]>([]);

  //   const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //     setSort(e.target.value);
  //     setProductsToSort([...products]);
  //   };

  //     const sortProducts = () => {
  //     let sortedProducts: ProductInterface[] = [];
  //     if (sort === 'nameAsc') {
  //         sortedProducts = productsToSort.sort((a, b) => {
  //             return (a.title > b.title) ? 1 : -1;
  //         });
  //     } else if (sort === 'nameDesc') {
  //         sortedProducts = productsToSort.sort((a, b) => {
  //             return (a.title > b.title) ? -1 : 1;
  //         });
  //     } else if (sort === 'priceAsc') {
  //         sortedProducts = productsToSort.sort((a, b) => {
  //             return (a.unitPrice[0].markedPrice < b.unitPrice[0].markedPrice) ? -1 : 1;
  //         });
  //     } else if (sort === 'priceDesc') {
  //         sortedProducts = productsToSort.sort((a, b) => {
  //             return (a.unitPrice[0].markedPrice > b.unitPrice[0].markedPrice) ? 1: -1
  //         });
  //     }
  //     console.log(sortedProducts);
  //     setProducts([...sortedProducts]);
  // }
  //   useEffect(() =>{
  //   sortProducts();
  // },[sort]);

  // console.log(products);

  if (loading) {
    return <Spinner animation={"border"} />;
  }
  
  // Get current posts
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
                {/* value={sort} onChange={handleSortChange}> */}
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
          {products && products.slice(indexOfFirstPost,indexOfLastPost).map((product) => {
              return (
                <div className="col-md-4 top_brand_left" key={product.id}>
                  <ProductsCard products={product} />
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

export default Products;
