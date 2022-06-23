import React, { useEffect, useState } from "react";

const AllServices = (props) => {
  const { name, img, description, cost, _id } = props.handle;
  const [del, setdel] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-woodland-81151.herokuapp.com/products")
      .then((res) => res.json())

      .then((data) => setdel(data));
  }, []);

  return (
    <div>
      <div className="card mb-3">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <i class="fas fa-audio-description service-icon"></i> {description}
          </p>
          <p className="card-text">
            <i class="fas fa-dollar-sign service-icon"></i> {cost}
          </p>
          <button
            className=" ms-2 mt-3 btn"
            onClick={() => props.handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
