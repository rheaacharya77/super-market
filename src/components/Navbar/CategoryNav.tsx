import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "../../assets/style/Navbar.css";

const CategoryHeader = () => {
  return (
    <>
      <Navbar bg="category-header" expand="lg">
        <Container className="justify-content-end justify-content-md-between">
          <Navbar.Toggle className="justify-self-end" />
          <Navbar.Collapse>
            <Nav>
              <Link
                to="/"
                className=" text-white text-decoration-none px-3 nav-link"
              >
                HOME
              </Link>
              <Link
                to="/signatures"
                className=" text-white text-decoration-none px-3 nav-link"
              >
                SIGNATURES
              </Link>
              <Link
                to="/snacks"
                className=" text-white text-decoration-none px-3 nav-link"
              >
                SNACKS
              </Link>
              <Link
                to="/dallemomos"
                className=" text-white text-decoration-none px-3 nav-link"
              >
                DALLE MOMOS
              </Link>
              <Link
                to="/riceandnoodles"
                className=" text-white text-decoration-none px-3 nav-link"
              >
                RICE AND NOODLES
              </Link>
              <Link
                to="/frozenitems"
                className=" text-white text-decoration-none px-3 nav-link"
              >
                FROZEN ITEMS
              </Link>
              <Link
                to="/momo"
                className="text-white text-decoration-none px-3 nav-link"
              >
                MOMO
              </Link>
              <Link
                to="/signature"
                className="text-white text-decoration-none px-3 nav-link"
              >
                SIGNATURE
              </Link>
              {/* <Link to="/offer" className="text-white text-decoration-none px-3 nav-link">
                Offers
              </Link>
              <Link to="/contact" className="text-white text-decoration-none nav-link">
                Contact
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CategoryHeader;
