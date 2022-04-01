import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="register">
      <div className="container">
        <h2>Register Here</h2>
        <div className="login-form-grids">
          <h5>profile information</h5>
          <form action="#" method="post">
            <input type="text" placeholder="First Name..." />
            <input type="text" placeholder="Last Name..." />
          </form>
          <div className="register-check-box">
            <div className="check">
              <label className="checkbox">
                <input type="checkbox" name="checkbox" />
                <i> </i>Subscribe to Newsletter
              </label>
            </div>
          </div>
          <h6>Login information</h6>
          <form action="#" method="post">
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password Confirmation" />
            <div className="register-check-box">
              <div className="check">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" />
                  <i> </i>I accept the terms and conditions
                </label>
              </div>
            </div>
            <input type="submit" value="Register" />
          </form>
        </div>
        <div className="register-home">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
