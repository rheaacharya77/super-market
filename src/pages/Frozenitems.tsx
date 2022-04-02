import React from "react";
import CategoryContainer from "../components/Category/CategoryContainer";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
const Frozenitems = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Frozen Items" />
      <CategoryContainer categoryid={11} />
    </>
  );
};

export default Frozenitems;
