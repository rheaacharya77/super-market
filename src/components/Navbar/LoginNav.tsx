  import React ,{useState} from "react";
import { Link} from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
import "../../assets/style/Navbar.css";


const accessToken = localStorage.getItem("accessToken");
const LoginNav = () => {
  const[isLoggedin,setIsLoggedin] = useState(false);
  const navigate = useNavigate();


  const logoutHandler = () =>{
    localStorage.clear();
    navigate("/");
    setIsLoggedin(false);
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
            { !isLoggedin ? (
            <>
            <li>
              <Link to="/register">CREATE ACCOUNT</Link>
            </li>
            <li>
               <Link to="/login" onClick={()=> {setIsLoggedin(true)}}> {/* */} LOGIN </Link> 
            </li>
            <li>
              <Link to="/contact">HELP</Link>
            </li>
            </>
             ): 
              
           ( <>
               <li>
              <Link to="/register">CREATE ACCOUNT</Link>
            </li>
              <li>
                <Link to="/" onClick={() => {logoutHandler()}}> LOGOUT </Link>
              </li>
              <li>
              <Link to="/contact">HELP</Link>
            </li>
              </>
               ) }
            
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
