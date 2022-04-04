import React from "react";
import Contact from "../components/Contact/Contact";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";


const Help = () => {
  
  return (
   <>
   <BreadCrumbs previous="Home" current="Contact" />
   <Contact/>
   </>
  );
};

export default Help;
