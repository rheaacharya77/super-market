import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselBottom = () => {
  return (
    <Carousel>
      <Carousel.Item interval={900}>
        <img
          className="d-block w-100"
          src={require("../../assets/images/slider2.jpg")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <div className="overflow">
          <img
            className="d-block w-100"
            src={require("../../assets/images/dallebanner2.jpg")}
            alt="Third slide"
            height="433px"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBottom;
