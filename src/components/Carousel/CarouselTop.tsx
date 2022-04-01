import React from "react";
import { Carousel } from "react-bootstrap";

import "../../assets/style/Carousel.css";

function CarouselTop() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/images/layout1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3 className='slider-h3'></h3>
            <p className='slider-p'></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/images/layout2.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3 className='slider-h3'></h3>
            <p className='slider-p'></p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselTop;
