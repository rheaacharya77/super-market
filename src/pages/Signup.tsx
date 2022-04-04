import React from "react";
import SignUpForm from "../components/SignUp/SignUpForm";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

const Signup = () => {
 
  return (
    <>
    <BreadCrumbs previous="Home" current="Create Account" />
    <SignUpForm/> 
    </>
  );
};
export default Signup;
