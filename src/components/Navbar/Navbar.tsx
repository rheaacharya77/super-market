import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faSearch } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/styles.css';
import CategoryHeader from "../Category/CategoryHeader";


function Navbar() {
  return (
    <>
      <div className="agileits_header">
        <div className="container">
          <div className="w3l_offers">
            <p>
              Welcome to DalleMomo! <Link to="/products">SHOP NOW</Link>
            </p>
          </div>
          <div className="agile-login">
            <ul>
                  <li>
                    <Link to="/login"> LOGIN </Link>
                  </li>
                  <li>
                    <Link to="/register">SIGN UP</Link>
                  </li>
              <li>
                <Link to="/contact">HELP</Link>
              </li>
            </ul>
          </div>
          <div className="product_list_header">
            <Link to="/cart">
              <button className="w3view-cart" type="submit" name="submit" value="">
                <FontAwesomeIcon icon={faCartArrowDown} className="cart1" size="lg" />
              </button>
            </Link>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>

      <div className="logo_products">
        <div className="container">
          <div className="left1">
                <img src={require('../../assets/images/dallemomologo.png')} alt='' className='boalogo'/>
          </div>
          <div className="w3ls_logo_products_left">
            <h1>
              <Link to="/" className = "dalle" >DALLE MOMO</Link>
            </h1>
          </div>
          <div className="w3l_search">
            <form action="#">
              <input type="search" name="Search" placeholder="Search for a Product..." />
              <button type="submit" className="btn btn-default search" aria-label="Left Align">
                <FontAwesomeIcon icon={faSearch} className="search" />
              </button>
              <div className="clearfix"></div>
            </form>
          </div>

          <div className="clearfix"> </div>
        </div>
      </div>
      <CategoryHeader/>
    </>
  );
}

export default Navbar;