import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import CategoryContainer from "../components/Category/CategoryContainer";
const Signatures = () => {
  return (
    <>
       <BreadCrumbs previous="Home" current="Signatures" />
      <CategoryContainer categoryid={6} />
    </>
  );
};

export default Signatures;
