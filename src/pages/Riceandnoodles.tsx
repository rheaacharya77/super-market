import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Category from "../components/Category/Category";
const RiceandNoodles = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="Rice and Noodles" />
      <Category categoryid={3} />
    </>
  );
};

export default RiceandNoodles;
