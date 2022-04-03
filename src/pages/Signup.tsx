import React from "react";
import SignUp from "../components/SignUp/SignUp";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

const Signup = () => {
 
  return (
    <>
    <BreadCrumbs previous="Home" current="Create Account" />
    <SignUp/> 
    </>
  );
};
export default Signup;
