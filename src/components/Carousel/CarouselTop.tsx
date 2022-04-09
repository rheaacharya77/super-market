import React from "react";
import { Carousel,Container} from "react-bootstrap";

import "../../assets/style/Carousel.css";
import dallecover2 from '../../assets/images/dallecover2.jpeg';
import dallecover4 from '../../assets/images/dallecover4.jpg';
import dallecover6 from '../../assets/images/dallecover6.jpg';
import dallecovermain from '../../assets/images/dallecovermain.jpg';

const CarouselTop = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={1400}>
        <img
          className="d-block w-100"
          src={dallecovermain}
          alt="First slide"
        />
        <Container>
        <div >
        <Carousel.Caption>
        <h1 className="animated1"> It's dallecious</h1>
        </Carousel.Caption>

        </div>
  
        </Container>
      </Carousel.Item>
      <Carousel.Item interval={1400}>
        <img
          className="d-block w-100"
          src={dallecover4}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='animated1'>Satisfy Your Cravings</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1400}>
        <img
          className="d-block w-100"
          src={dallecover6}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='animated1'>No matter what the situation, Dalle's food always helps</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1400}>
        <img
          className="d-block w-100"
          src={dallecover2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='animated1'>Tantalise your palate with our delicious food</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselTop;
