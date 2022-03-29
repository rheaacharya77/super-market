import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import '../../assets/style/ShopByCategories.css';

const CategoryCard = ({ categories }:{categories:any}) => {
  return (
    <>
      <div className="category-item">
        <div className="row align-items-center">
        <img src={categories.icon} alt="category" className="img-fluid category-img" width="445" />
          <div className="description">
            <h4 className="category-title">{categories.title}</h4>
            <span className="productCount">{categories.productCount} products</span>
            <br />
              Shop now
              <FontAwesomeIcon icon={faArrowCircleRight} color="#ffcc00" className="category-arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;