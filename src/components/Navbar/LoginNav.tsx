import React from "react";
import { NavLink,Link } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';

const LoginNav = () => {
return(
    <div className="agileits_header">
        <Container>
          <div className="w3l_offers">
            <p>
              Welcome to DalleMomo! <Link to="/products">SHOP NOW</Link>
            </p>
          </div>
          <div className="agile-login">
            <ul>
                  <li>
                    <NavLink to="/login"> LOGIN </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">SIGN UP</NavLink>
                  </li>
              <li>
                <NavLink to="/contact">HELP</NavLink>
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
        </Container>
      </div>
);
}
export default LoginNav;