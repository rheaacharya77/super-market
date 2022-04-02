import React from "react";
import CategoryContainer from "../components/Category/CategoryContainer";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
const RiceandNoodles = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Rice and Noodles" />
      <CategoryContainer categoryid={3} />
    </>
  );
};

export default RiceandNoodles;
