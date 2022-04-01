import React from "react";
// import offer from "../../assets/images/offer.png";
import "../../assets/style/Featured.css";
import offer from "../../assets/images/offer.png";

const ProductCard = ({ products }: any) => {
  return (
    <div className="hover14 column">
      <div className="agile_top_brand_left_grid"> 
        {products.hasOffer && (
          <div className="polaroid">
            <img src={offer} alt="" className="img-responsive" />
          </div>
        )}
        <div className="agile_top_brand_left_grid1">
          <figure>
            <div className="snipcart-item block">
              <div className="snipcart-thumb">
                 <img src={products.images[0].imageName} alt="" width="100%" />
                <p>{products.title}</p>
                <div className="stars">
                  <i className="fa fa-star blue-star" aria-hidden="true"></i>
                  <i className="fa fa-star blue-star" aria-hidden="true"></i>
                  <i className="fa fa-star blue-star" aria-hidden="true"></i>
                  <i className="fa fa-star blue-star" aria-hidden="true"></i>
                  <i className="fa fa-star gray-star" aria-hidden="true"></i>
                </div>
                <h4>Nrs.{products.unitPrice[0].sellingPrice}</h4>
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

export default ProductCard;
