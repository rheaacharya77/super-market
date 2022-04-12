import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetCartData } from "../../types/cart";
import CartCard from "./CartCard";

const baseURL = "https://uat.ordering-dalle.ekbana.net";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = "1";
const accessToken = localStorage.getItem("accessToken");

const Cart = () => {
  const [cartItem, setCartItem] = useState<GetCartData[]>([]);

  const getData = async () => {
    let response = await fetch(`${baseURL}/api/v4/cart`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken} `,
        "Warehouse-Id": warehouseId,
        "Api-Key": apiKey,
      },
    });

    let newData = await response.json();
    if (response.status === 200) {
      setCartItem([newData.data]);
      console.log(newData.data);
    }
  };

  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="checkout">
      <Container>
        <h2>
          Your shopping cart contains:{" "}
          <span>{cartItem.length} Product(s)</span>
        </h2>
        <div className="checkout-right">
          <table className="timetable_sub">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Product</th>
                <th>Quality</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item, i) => {
                  return <CartCard item={item} i={i + 1} key={item.id} />;
                })}
            </tbody>
          </table>
        </div>
        <div className="checkout-left">
          <div className="checkout-left-basket">
            <h4>Continue to basket</h4>
            <ul>
              <li>
                Sub Total <i>-</i>{" "}
              </li>
              <li>
                Delivery Charge <i>-</i>{" "}
              </li>
              <li>
                Total <i>-</i>{" "}
              </li>
            </ul>
          </div>
          <div className="checkout-right-basket">
            <Form.Select aria-label="Default select example"></Form.Select>
            <Link to="/">
              <Button className="mt-5">Checkout</Button>
            </Link>
          </div>
          <div className="clearfix"> </div>
        </div>
      </Container>
    </div>
  );
};
export default Cart;
