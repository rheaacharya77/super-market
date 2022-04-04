import React from "react";
import { Link } from "react-router-dom";
import { Row, Carousel } from "react-bootstrap";

import "../../assets/style/Aboutus.css";
import firstImg from "../../assets/images/p3.jpg";
import secondImg from "../../assets/images/p4.jpg";

import AboutTeam from "./AboutTeam";
import AboutUsMiddle from "./AboutUsMiddle";

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <h3 className="w3_agile_header">About Us</h3>
          <div className="about-agileinfo w3layouts">
            <Row>
              <div className="col-md-8 about-wthree-grids grid-top">
                <h4>Blanditiis praesentium deleniti atque corrupti quos </h4>
                <p className="top">
                  Gnissimos voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi. atque corrupti quos dolores et quas
                  molestias excepturi sint occaecat officia deserunt mollitia
                  laborum et dolorum fuga
                </p>
                <p>
                  Dignissimos at vero eos et accusamus et iusto odio ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecat officia
                  deserunt mollitia laborum et dolorum fuga. At vero eos et
                  accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecat atque corrupti quos
                  dolores et quas molestias excepturi sint occaecat officia
                  deserunt mollitia laborum et dolorum{" "}
                </p>
                <div className="about-w3agilerow">
                  <div className="col-md-4 about-w3imgs">
                    <img
                      src={firstImg}
                      alt=""
                      className="img-responsive zoom-img"
                    />
                  </div>
                  <div className="col-md-4 about-w3imgs">
                    <img
                      src={secondImg}
                      alt=""
                      className="img-responsive zoom-img"
                    />
                  </div>
                  <div className="col-md-4 about-w3imgs">
                    <img
                      src={firstImg}
                      alt=""
                      className="img-responsive zoom-img"
                    />
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-4 about-wthree-grids">
                <div className="offic-time">
                  <div className="time-top">
                    <h4>Praesentium :</h4>
                  </div>
                  <div className="time-bottom">
                    <h5>At vero eos </h5>
                    <h5>Accusamus et</h5>
                    <p>
                      Dignissimos at vero eos et accusamus et iusto odio ducimus
                      qui accusamus et.{" "}
                    </p>
                  </div>
                </div>
                <div className="testi">
                  <h3 className="w3_agile_header">Testimonial</h3>
                  <div id="top" className="callbacks_container">
                    <Carousel fade className="car">
                      <Carousel.Item interval={2500}>
                        <div className="testi-slider">
                          <h4>" I AM VERY PLEASED.</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse eu magna dolor, quisque semper.
                          </p>
                          <div className="testi-subscript">
                            <p>
                              <Link to="#">John Doe,</Link>Adipiscing
                            </p>
                            <span className="w3-agilesub"> </span>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="testi-slider">
                          <h4>" I AM LOREM IPSUM.</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse eu magna dolor, quisque semper.
                          </p>
                          <div className="testi-subscript">
                            <p>
                              <Link to="#">elit semper,</Link>Dolor Elit
                            </p>
                            <span className="w3-agilesub"> </span>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="testi-slider">
                          <h4>" CONSECTETUR PIMAGNA.</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse eu magna dolor, quisque semper.
                          </p>
                          <div className="testi-subscript">
                            <p>
                              <Link to="#">Amet Doe,</Link>Suspendisse
                            </p>
                            <span className="w3-agilesub"> </span>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </Row>
          </div>
        </div>
      </div>
      <AboutUsMiddle />
      <AboutTeam />
    </>
  );
};
export default AboutUs;
