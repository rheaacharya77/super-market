import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import CategoryContainer from "../components/Category/CategoryContainer";
const RiceandNoodles = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Rice and Noodles" />
      <CategoryContainer categoryid={3} />
    </>
  );
};

export default RiceandNoodles;
