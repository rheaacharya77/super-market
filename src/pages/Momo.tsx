import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import CategoryContainer from "../components/Category/CategoryContainer";
const Momo = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Momo" />
      <CategoryContainer categoryid={133} />
    </>
  );
};

export default Momo;
