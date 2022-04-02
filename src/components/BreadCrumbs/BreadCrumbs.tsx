import React from "react";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"

const BreadCrumbs = ({previous,current}:any) => {
  return (
    <>
      <div className="breadcrumbs">
        <Container>
        <ol className="breadcrumb breadcrumb1">
          <li className=" breadcrumb-item">
            <Link to="/">
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faHome} />
              </span>
              {previous}
            </Link>
          </li>
          <li className=" breadcrumb-item active ">{current}</li>
        </ol>
        </Container>
      </div>
    </>
  );
};
export default BreadCrumbs;
