import React,{useState} from 'react';
import { Link } from "react-router-dom";
import {Form} from "react-bootstrap";

import "../../assets/style/Login.css";


const clientId = 2;
const warehouseId = "1";
const auth = "api/v4/auth";
const grantTtype = "password";
const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const clientSecret = "olzBb6we0po4B0PSJyDpNGhhSsnvZmeio8sRoASa";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";



const LoginForm = () => {
const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[message,setMessage] = useState("");
const[error,setError]= useState("");

const submitHandler = async(e:any) => {
e.preventDefault();

try{

const body = {
username: email,
password: password,
client_id: clientId,
client_secret: clientSecret,
grant_type: grantTtype,
};
let response = await fetch(`${baseURL}/${auth}/login`,{
    method: 'POST',
    headers:{
      'Warehouse-Id': warehouseId,
      'Api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

let newData = await response.json();
console.log(newData);

if(response.status === 200){
setMessage('Login Successful');
localStorage.setItem('accessToken',newData.access_token);
}else{
setError(newData.errors[0].message);
}

}catch(err){
  console.log(err);
}

};

     return (
        <div className="login">
        <div className="container">
          <h2>Login Form</h2>
          <div
            className="login-form-grids animated wow slideInUp"
            data-wow-delay=".5s"
          >
            <div className="text-danger mb-3 text-center ">{message}</div>
            <div className="text-danger text-center">{error}</div>

            <Form>
              <input type="email" 
              placeholder="Email"
              required 
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
              />

              <input type="password"
               placeholder="Password" 
               required
               value={password}
               onChange={(e)=> setPassword(e.target.value)}
               />
                            
              <div className="forgot">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </div>
              <input type="submit" value="Login" onClick={submitHandler}/>
            </Form>
          </div>
          <h4>For New People</h4>
          <p>
            <Link to="/register">Register Here</Link> (Or) go back to{" "}
            <Link to="/">
              Home
              <span
                className="glyphicon glyphicon-menu-right"
                aria-hidden="true"
              ></span>
            </Link>
          </p>
        </div>
      </div>
  )
}
export default LoginForm;