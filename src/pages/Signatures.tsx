import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Category from "../components/Category/Category";
const Signatures = () => {
  return (
    <>
       <BreadCrumbs previous="Home" current="Signatures" />
      <Category categoryid={6} />
    </>
  );
};

export default Signatures;
