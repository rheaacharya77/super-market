import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";

import "../../assets/style/Login.css";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const auth = "api/v4/auth";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [messages, setMessage] = useState("");
  // const [error, setError] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      const body = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        mobile_number: phoneNumber,
      };

      let response = await axios.post(`${baseURL}/${auth}/signup`, body);
      console.log(response);   
      // setMessage('success');
    } catch (err) {
      console.log(err);
      // setError('err');
     
    }
   
  };

  return (
  
    <div className="register">
      <div className="container">
        <h2>Register Here</h2>
        <div className="login-form-grids">
        {/* {<div className="text-danger mb-3 text-center">{error}</div>} */}
          <h5>profile information</h5>
          {/* {errors && <div className="text-danger text-center">{errors[0].message}</div>} */}
          <Form>
            <input
              type="text"
              placeholder="First Name..."
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name..."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <h6>Login information</h6>
            <input
              type="email"
              placeholder="Email Address..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassWord(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone number"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="register-check-box">
              <div className="check">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" />
                  <i> </i>I accept the terms and conditions
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Register"
              className="register-btn"
              onClick={submitHandler}
            />
          </Form>
        </div>
        <div className="register-home">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
