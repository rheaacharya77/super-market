import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import "../../assets/style/Navbar.css";

const SearchNav = () => {
  return (
    <>
      <div className="logo_products">
        <Container>
          <div className="w3ls_logo_products_left1">
            <ul className="phone_icon">
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} className="phoneIcon" />
                Order online or call us : (+0123) 234 567
              </li>
            </ul>
          </div>
          <div className="w3ls_logo_products_left">
            <h1>
              <Link to="/">DALLE MOMO</Link>
            </h1>
          </div>
          <div className="w3l_search">
            <form action="#">
              <input
                type="search"
                name="Search"
                placeholder="Search for a Product..."
              />
              <button
                type="submit"
                className="btn btn-default search"
                aria-label="Left Align"
              >
                <FontAwesomeIcon icon={faSearch} className="search" />
              </button>
              <div className="clearfix"></div>
            </form>
          </div>

          <div className="clearfix"> </div>
        </Container>
      </div>
    </>
  );
};

export default SearchNav;
