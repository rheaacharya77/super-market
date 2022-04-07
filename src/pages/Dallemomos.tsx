import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Category from "../components/Category/Category";

const Dallemomos = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Dalle Momos" />
      <Category categoryid={2} />
    </>
  );
};

export default Dallemomos;
