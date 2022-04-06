import React from 'react';
import {Link} from "react-router-dom";
const Pagination = ({ postsPerPage, totalPosts, paginate }:any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="numbering">
      <ul className="pagination paging">
        <li>
          <Link to="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <Link
                to="#"
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </Link>
            </li>
          );
        })}
        <li>
          <Link to="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;