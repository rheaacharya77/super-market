import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Category from "../components/Category/Category";

const Signature = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Signature" />
      <Category categoryid={134} />
    </>
  );
};

export default Signature;
