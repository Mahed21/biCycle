import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { name, img, description, cost, _id } = props.items;

  return (
    <div>
      <div className="card mb-3 pb-3">
        <img
          src={img}
          className="img-fluid rounded-start ps-4 pe-4"
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
            <button className="btn ">Place Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
