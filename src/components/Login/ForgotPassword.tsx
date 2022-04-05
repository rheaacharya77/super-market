import React ,{useState} from "react";
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";


const auth = "api/v4/auth";
const baseURL = "https://uat.ordering-dalle.ekbana.net/";

const ForgotPassword = () => {
  const[email,setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try{
    const body = {
      email:email
    };
    let response = await fetch(`${baseURL}/${auth}/forgot-password`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    let newData = await response.json();
    console.log(newData);
    if(response.status === 200){
      setMessage("Check your email for password reset");
      alert("Check your email for password reset");
      console.log(response);
      navigate('/');
    }
  }catch(err){
    console.log(err);
  }
  }
    return(
      <>
      <BreadCrumbs current="Forgot Password" previous="Login"/>
      <div className="login"> 
      <Container>
          <h2>Forgot Password?</h2>

          <div
              className="login-form-grids animated wow slideInUp"
              data-wow-delay=".5s">
               <div className="text-success mb-3 text-center ">{message}</div>
              <Form>
                  <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                      type="submit"
                      value="Login"
                      className="register-btn"
                      onClick={submitHandler}
                  />
              </Form>
          </div>
          <p>
              <Link to="/signup">Register Here</Link> (Or) go back to{' '}
              <Link to="/">
                  Home{' '}
              </Link>
          </p>
      </Container>
  </div>
  </>
    );
  
};

export default ForgotPassword;

