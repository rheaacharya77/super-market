import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Category from "../components/Category/Category";
const Momo = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Momo" />
      <Category categoryid={133} />
    </>
  );
};

export default Momo;
