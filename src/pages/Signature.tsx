import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import CategoryContainer from "../components/Category/CategoryContainer";

const Signature = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Signature" />
      <CategoryContainer categoryid={134} />
    </>
  );
};

export default Signature;
