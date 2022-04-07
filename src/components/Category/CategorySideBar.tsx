import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import '../../assets/style/Category.css';

const CategoriesSideBar = () => {
  return (
    <>
    
        <div className="categories">
          <h2>Categories</h2>
          <ul className="cate">
            <li>
              <Link to="/signatures">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Signatures
              </Link>
            </li>
            <ul>
              <li>
              <Link to="/signatures">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Pizza
              </Link>
              </li>
              <li>
              <Link to="/signatures">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Aloo Saadheko
              </Link>
              </li>
              <li>
              <Link to="/signatures">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Curly Fries
              </Link>
              </li>
              <li>
              <Link to="/signatures">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Special Fried Rices
              </Link>
              </li>
              <li>
              <Link to="/signatures">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Chicken Wings
              </Link>
              </li>
            </ul>
            <li>
              <Link to="/snacks">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Snacks
              </Link>
            </li>
            <ul>
            <li>
              <Link to="/snacks">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Cheesy Momo
              </Link>
            </li>
            </ul>
            <li>
              <Link to="/dallemomos">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Dalle Momos
              </Link>
            </li>
            <ul>
            <li>
              <Link to="/dallemomos">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Chicken C Momo
              </Link>
            </li>
            <li>
              <Link to="/dallemomos">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Steamed Momos
              </Link>
            </li>
            <li>
              <Link to="/dallemomos">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Dalle Jhol Momos
              </Link>
            </li>
            <li>
              <Link to="/dallemomos">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Deep Fried Momos
              </Link>
            </li>
            <li>
              <Link to="/dallemomos">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Chicken C Momo
              </Link>
            </li>
            <li>
              <Link to="/dallemomos">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Pan Fried Momos
              </Link>
            </li>
           </ul>
            <li>
              <Link to="/riceandnoodles">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Rice and Noodles
              </Link>
            </li>
            <ul>
            <li>
              <Link to="/riceandnoodles">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Chicken Chopsuey
              </Link>
            </li>
            <li>
              <Link to="/riceandnoodles">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Pork Chopsuey
              </Link>
            </li>
            <li>
              <Link to="/riceandnoodles">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Veg Chopsuey
              </Link>
            </li>
            <li>
              <Link to="/riceandnoodles">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Thukpa with Fried Momos
              </Link>
            </li>
            <li>
              <Link to="/riceandnoodles">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Mix Chopsuey
              </Link>
            </li>
            </ul>
            <li>
              <Link to="/frozenitems">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Frozen Items
              </Link>
            </li>
            <ul>
            <li>
              <Link to="/frozenitems">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Ice Cream
              </Link>
            </li>
            </ul>
            <li>
              <Link to="/signature">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Signature
              </Link>
            </li>
            <ul>
            <li>
              <Link to="/signature">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Curly Fries
              </Link>
            </li>
            </ul>
            <ul>
            <li>
              <Link to="/signature">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Chicken Choila Chowmin
              </Link>
            </li>
            </ul>
            <ul>
            <li>
              <Link to="/signature">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Chicken Dalle Bowl
              </Link>
            </li>
            </ul>
            <ul>
            <li>
              <Link to="/signature">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Veg Dalle Bowl
              </Link>
            </li>
            </ul>
            <ul>
            <li>
              <Link to="/signature">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Mushroom Choila Chowmin
              </Link>
            </li>
            </ul>
            <ul>
            <li>
              <Link to="/signature">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Mushroom Choila Fried Rice
              </Link>
            </li>
            </ul>
            <ul>
            <li>
              <Link to="/signature">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Chicken Choila Fried Rice
              </Link>
            </li>
            </ul>
          </ul>
        </div>
   
    </>
  );
};

export default CategoriesSideBar;

