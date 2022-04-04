import React from "react";

import "../../assets/style/ProductsCard.css";
import offer from "../../assets/images/offer.png";


const ProductsCard = ({products }: any) => {
  const { title, unitPrice,hasOffer, images,id } = products;
   //console.log(products);
  return (
    <div className="hover14 column" key={id}>
      <div className="agile_top_brand_left_grid"> 
        {hasOffer && (
          <div className="agile_top_brand_left_grid_pos">
            <img src={offer} alt="" className="img-responsive" />
          </div>
        )}
        <div className="agile_top_brand_left_grid1">
          <figure>
            <div className="snipcart-item block">
              <div className="snipcart-thumb">
                 <img src={images[0].imageName} alt="" width="100%" />
                <p>{title}</p>
                <div className="stars">
                  <i className="fa fa-star blue-star" aria-hidden="true"></i>
                  <i className="fa fa-star blue-star" aria-hidden="true"></i>
                  <i className="fa fa-star blue-star" aria-hidden="true"></i>
                  <i className="fa fa-star blue-star" aria-hidden="true"></i>
                  <i className="fa fa-star gray-star" aria-hidden="true"></i>
                </div>
                <h4>Nrs.{unitPrice[0].markedPrice}</h4>
              </div>
              <div className="snipcart-details top_brand_home_details">
                <input
                  type="submit"
                  name="submit"
                  value="Add to cart"
                  className="button"
                ></input>
              </div>
            </div>
          </figure>
        </div>
      </div>
     </div>
     
  );
};

export default ProductsCard;
