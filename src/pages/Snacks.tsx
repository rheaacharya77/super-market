import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import CategoryContainer from "../components/Category/CategoryContainer";
const Snacks = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Snacks" />
      <CategoryContainer categoryid={4} />
    </>
  );
};

export default Snacks;
