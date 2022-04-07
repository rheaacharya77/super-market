import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Category from "../components/Category/Category";

const Frozenitems = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Frozen Items" />
      <Category categoryid={11} />
    </>
  );
};

export default Frozenitems;
