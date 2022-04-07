import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Category from "../components/Category/Category";
const Snacks = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Snacks" />
      <Category categoryid={4} />
    </>
  );
};

export default Snacks;
