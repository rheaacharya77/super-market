import React from "react";
import { Carousel,Container} from "react-bootstrap";

import "../../assets/style/Carousel.css";

const CarouselTop = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={1400}>
        <img
          className="d-block w-100"
          src={require("../../assets/images/dallecover2.jpeg")}
          alt="First slide"
        />
        <Container>
        <div >
        <Carousel.Caption>
        <h1 className="animated1">Tantalise your palate with our delicious food</h1>
        </Carousel.Caption>

        </div>
  
        </Container>
      </Carousel.Item>
      <Carousel.Item interval={1400}>
        <img
          className="d-block w-100"
          src={require("../../assets/images/dallecover3.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='animated1'>Satisfy Your Cravings</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselTop;
