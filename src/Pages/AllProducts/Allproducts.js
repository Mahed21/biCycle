import React from "react";
import { Link } from "react-router-dom";
import "./AllProducts.css";

const Allproducts = (props) => {
  const { name, img, description, cost, _id } = props.allItems;
  return (
    <div>
      <div className="card mb-3 pb-3">
        <img
          src={img}
          className="img-fluid rounded-start ps-5 pe-5"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <i class="fas fa-audio-description service-icon"></i> {description}
          </p>
          <p className="card-text">
            <i class="fas fa-dollar-sign service-icon"></i> {cost}
          </p>
          <Link to={`/purchase/${_id}`}>
            <button className="btn p-2">Place Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
