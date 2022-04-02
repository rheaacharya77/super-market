import React from "react";
import FaqContainer from "../components/Faq/FaqContainer";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

const Faq = () => {
  return (
    <>
     <BreadCrumbs previous="Home" current="FAQ" />
      <FaqContainer />
    </>
  );
};
export default Faq;
