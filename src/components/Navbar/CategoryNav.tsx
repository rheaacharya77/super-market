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
                Home
              </Link>
              <Link
                to="/signatures"
                className="nav-link"
              >
                Signatures
              </Link>
              <Link
                to="/snacks"
                className="nav-link"
              >
                Snacks
              </Link>
              <Link
                to="/dallemomos"
                className="nav-link"
              >
                Dalle Momos
              </Link>
              <Link
                to="/riceandnoodles"
                className="nav-link"
              >
                Rice and Noodles
              </Link>
              <Link
                to="/frozenitems"
                className=" nav-link"
              >
                Frozen Items
              </Link>
              <Link
                to="/momo"
                className=" nav-link"
              >
                Momo
              </Link>
              <Link
                to="/signature"
                className=" nav-link"
              >
                Signature
              </Link>
              {/* <Link to="/offer" className="text-white text-decoration-none px-3 nav-link">
                Offers
              </Link>*/}
              <Link to="/contact" className="text-white text-decoration-none nav-link">
                Contact
              </Link> 
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
      </div>
  );
};

export default CategoryHeader;
