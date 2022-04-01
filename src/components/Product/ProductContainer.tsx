import React from 'react';
import CategorySideBar from '../Category/CategorySideBar';

import Products from '../Product/Product';


const ProductContainer= (() => {
  return (
    <>
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
            <CategorySideBar/>
            </div>
            <div className="col-lg-8 col-md-12">
              <Products/> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
)

export default ProductContainer;