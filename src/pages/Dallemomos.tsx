import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import CategoryContainer from "../components/Category/CategoryContainer";

const Dallemomos = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Dalle Momos" />
      <CategoryContainer categoryid={2} />
    </>
  );
};

export default Dallemomos;
