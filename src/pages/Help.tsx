import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Contact from "../components/Contact/Contact";

const Help = () => {
  
  return (
   <>
   <BreadCrumbs previous="Home" current="Contact" />
   <Contact/>
   </>
  );
};

export default Help;
