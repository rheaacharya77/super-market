import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../assets/style/ShopByCategories.css";

const CategoryCard = ({ categories }: any) => {
  return (
    <>
      <div className="category-item">
        <div className="row align-items-center">
          <img
            src={categories.icon}
            alt="category"
            className="img-fluid category-img"
            width="445"
          />
          <div className="description">
            <h4 className="category-title">{categories.title}</h4>
            <span className="productCount">
              {categories.productCount} products
            </span>
            <br />
            <Link
              to={`/${categories.title.toLowerCase().replace(/ /, "")}`}
              className="category-link"
            >
              Shop now
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                color="#fe9126"
                className="category-arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
