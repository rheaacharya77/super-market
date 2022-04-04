import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import CategoryContainer from "../components/Category/CategoryContainer";

const Frozenitems = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Frozen Items" />
      <CategoryContainer categoryid={11} />
    </>
  );
};

export default Frozenitems;
