import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CategoriesSideBar = () => {
  return (
    <>
      <div col-md-3 className="products-left">
        <div className="categories">
          <h2>Categories</h2>
          <ul className="cate">
            <li>
              <Link to="/signatures">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Signatures
              </Link>
            </li>
            <li>
              <Link to="/snacks">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Snacks
              </Link>
            </li>
            <li>
              <Link to="/dallemomos">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Dalle Momos
              </Link>
            </li>
            <li>
              <Link to="/riceandnoodles">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Rice and Noodles
              </Link>
            </li>
            <li>
              <Link to="/frozenitems">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Frozen Items
              </Link>
            </li>
            <li>
              <Link to="/momo">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Momo
              </Link>
            </li>
            <li>
              <Link to="/signature">
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                Signature
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesSideBar;

// import React, { useState,useEffect } from 'react';
// import { Col} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
// const apiKey =
//     'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
// const warehouseId = '1';

// const CategoriesSideBar = () => {
//     const [categories, setCategories] = useState<any[]>([]);

//     const  getCategories = async() => {
//         const response = await fetch(
//             `${baseURL}/api/v4/category`,
//             {
//                 method: 'GET',
//                 headers: {
//                     'Warehouse-Id': warehouseId,
//                     'Api-key': apiKey,
//                 },
//             },
//         );
//         const newData = await response.json();
//         setCategories(newData.data);
//         console.log(newData.data);
//     }
//     useEffect(() => {
//         getCategories();
//       },[]);

//     return (
//         <Col md={3} className="products-left">
//         <div className="categories">
//             <h2>Categories</h2>
//             <ul className="cat">

//                        {categories.map((category) => {
//                             return (
//                                 <li>
//                                 <Link to={'/' +  category.title.toLowerCase()}>
//                                     <FontAwesomeIcon
//                                         icon={faArrowRight}
//                                         className="faArrowRight"
//                                     />
//                                     {category.title}
//                                 </Link>
//                             </li>
//                             );
//                         })
//                 }
//             </ul>
//                  </div>
//                  </Col>

//     );
// };

// export default CategoriesSideBar;
