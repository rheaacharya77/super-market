import React from "react";
import CategoryContainer from "../components/Category/CategoryContainer";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
const Snacks = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Snacks" />
      <CategoryContainer categoryid={4} />
    </>
  );
};

export default Snacks;
