import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import offer from "../../assets/images/offer.png";

const baseURL = "https://uat.ordering-dalle.ekbana.net";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";
const access_token = localStorage.getItem("accessToken");

const AddProduct = ({ products }: any) => {
  const { title, unitPrice, hasOffer, images, id } = products;
  //console.log(products);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const addItem = async () => {
    try {
      const body = {
        productId: id,
        priceId: unitPrice[0].id,
        quantity: 1,
        note: "test",
      };
      if (access_token) {
        let response = await fetch(`${baseURL}/api/v4/cart-product`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Warehouse-Id": warehouseId,
            "Api-key": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        let newData = await response.json();
        console.log(newData);
        if (response.status === 200) {
          setMessage("Item added to cart");
          alert("Item added to cart");
        }
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
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
                <h4>Rs.{unitPrice[0].sellingPrice}</h4>
              </div>
              <div className="snipcart-details top_brand_home_details">
                <input
                  type="submit"
                  name="submit"
                  value="Add to cart"
                  className="button"
                  onClick={addItem}
                ></input>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
