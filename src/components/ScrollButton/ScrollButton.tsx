 import React, { useState } from "react";

import "../../assets/style/ScrollButton.css";
import arrow from "../../assets/images/arrow.png";

const ScrollButton = () => {
  const [showTop, setShowTop] = useState(false);

  const ShowArrow = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 320) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  };
  window.addEventListener("scroll", ShowArrow);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-up-button">
      <img
        src={arrow}
        alt=""
        onClick={goToTop}
        style={{ display: showTop ? "inline" : "none" }}
      />
    </div>
  );
};

export default ScrollButton;
