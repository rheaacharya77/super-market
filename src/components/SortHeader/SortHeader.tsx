import React from 'react';
import {Form} from "react-bootstrap";

const SortHeader = () => {
  return (
    <div className="products-right-grid">
    <div className="products-right-grids">
      <div className="sorting">
        <Form.Select className="frm-field required sect">
          <option value="null">Default sorting</option>
          <option value="null">Sort by popularity</option>
          <option value="null">Sort by average rating</option>
          <option value="null">Sort by price</option>
        </Form.Select>
      </div>
      <div className="sorting-left">
        <Form.Select className="frm-field required sect">
          <option value="null">Item on page 9</option>
          <option value="null">Item on page 18</option>
          <option value="null">Item on page 32</option>
          <option value="null">All</option>
        </Form.Select>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
  )
}
export default SortHeader;