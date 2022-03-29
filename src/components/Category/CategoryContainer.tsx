import React from 'react';
import CategorySideBar from './CategorySideBar';

import ProductDisplay from '../ProductDisplay/ProductDisplay';


const CategoryContainer= ((categoryid:any) => {
  return (
    <>
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
            <CategorySideBar/>
            </div>
            <div className="col-lg-8 col-md-12">
              <ProductDisplay categoryid = {categoryid} key = {categoryid.id}/> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
)

export default CategoryContainer;