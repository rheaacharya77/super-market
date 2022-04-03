import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";

import "../../assets/style/Navbar.css";

const CategoryHeader = () => {
  return (
    <div className="navigation-agileits">
    <div className="container">
    
      <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link
                to="/"
                className="nav-link"
              >
                HOME
              </Link>
              <Link
                to="/signatures"
                className="nav-link"
              >
                SIGNATURES
              </Link>
              <Link
                to="/snacks"
                className="nav-link"
              >
                SNACKS
              </Link>
              <Link
                to="/dallemomos"
                className="nav-link"
              >
                DALLE MOMOS
              </Link>
              <Link
                to="/riceandnoodles"
                className="nav-link"
              >
                RICE AND NOODLES
              </Link>
              <Link
                to="/frozenitems"
                className=" nav-link"
              >
                FROZEN ITEMS
              </Link>
              <Link
                to="/momo"
                className=" nav-link"
              >
                MOMO
              </Link>
              <Link
                to="/signature"
                className=" nav-link"
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
      </Navbar>
      </div>
      </div>
  );
};

export default CategoryHeader;
