import React from "react";
import CategoryContainer from "../components/Category/CategoryContainer";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
const Momo = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Momo" />
      <CategoryContainer categoryid={2} />
    </>
  );
};

export default Momo;
