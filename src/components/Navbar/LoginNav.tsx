  import React ,{useState} from "react";
import { Link,NavLink} from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
import "../../assets/style/Navbar.css";



const LoginNav = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();


  const logoutHandler = () =>{
    localStorage.clear();
    navigate("/");
  }
 
  return (
    <div className="agileits_header">
      <Container>
        <div className="w3l_offers">
          <p>
            Welcome to DalleMomo! <Link to="/products">SHOP NOW</Link>
          </p>
        </div>
        <div className="agile-login">
          <ul>
            { accessToken === null ? (
            <>
            <li>
              <NavLink to="/register">CREATE ACCOUNT</NavLink>
            </li>
            <li>
               <NavLink to="/login"> LOGIN </NavLink> 
            </li>
           
            </>
             ): ( <>
               <li>
              <NavLink to="/profile">PROFILE</NavLink>
            </li>
              <li>
                <NavLink to="/" onClick={() => {logoutHandler()}}> LOGOUT </NavLink>
              </li>
            
              </>
               ) }
             <li>
              <NavLink to="/contact">HELP</NavLink>
            </li>
          </ul>
        </div>
        <div className="product_list_header">
          <Link to="/cart">
            <button
              className="w3view-cart"
              type="submit"
              name="submit"
              value=""
            >
              <FontAwesomeIcon
                icon={faCartArrowDown}
                className="cart1"
                size="lg"
              />
            </button>
          </Link>
        </div>
        <div className="clearfix"> </div>
      </Container>
    </div>
  );
};
export default LoginNav;
