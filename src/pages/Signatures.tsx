import React from "react";
import CategoryContainer from "../components/Category/CategoryContainer";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
const Signatures = () => {
  return (
    <>
       <BreadCrumbs previous="Home" current="Signatures" />
      <CategoryContainer categoryid={6} />
    </>
  );
};

export default Signatures;
