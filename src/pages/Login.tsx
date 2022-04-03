import React from "react";
import LoginForm from "../components/Login/Login";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

  
const Login = () => {
 
  return (
   <>
    <BreadCrumbs previous="Home" current="Login" />
    <LoginForm/>
   </>
  );
};

export default Login;
