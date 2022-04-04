import React from "react";
import "../../assets/style/ImageLayout.css";
import { Container, Row } from "react-bootstrap";

const ImageLayout = () => {
  return (
    <>
      <div className="section__header">
        <h3>Why Choose Dalle Restaurant?</h3>
      </div>
      <Container>
        <Row>
          {/* <div className="landing__page__section"> */}
          <div className="col-lg-6">
            <div className="about__list__wrapper">
              <div className="about__list">
                <img
                  src={require("../../assets/images/aboutdalle.png")}
                  alt=""
                  className="img-fluid"
                />
                <div className="list__contents">
                  <h4>Only the freshest ingredients</h4>
                  <p>
                    "To maintain quality and hygiene in food,finest ingredients
                    are delivered to the Dalle restaurants daily."
                  </p>
                </div>
              </div>
              <div className="about__list">
                <img
                  src={require("../../assets/images/aboutdalle.png")}
                  alt=""
                  className="img-fluid"
                />
                <div className="list__contents">
                  <h4>We have passion for food</h4>
                  <p>
                    "No matter what the situation,Dalle bowl and Curly fries
                    always helps."
                  </p>
                </div>
              </div>
              <div className="about__list">
                <img
                  src={require("../../assets/images/aboutdalle.png")}
                  alt=""
                  className="img-fluid"
                />
                <div className="list__contents">
                  <h4>We never compromise the quality</h4>
                  <p>
                    "Tantalise your palate with our delicious and true flavoured
                    Darjeeling style cooked food."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <img
                src={require("../../assets/images/imagelayout.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          {/* </div> */}
        </Row>
      </Container>
    </>
  );
}
export default ImageLayout;
