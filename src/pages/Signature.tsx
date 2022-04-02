import React from "react";
import CategoryContainer from "../components/Category/CategoryContainer";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
const Signature = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Signature" />
      <CategoryContainer categoryid={134} />
    </>
  );
};

export default Signature;
