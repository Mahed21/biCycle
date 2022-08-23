import React from "react";
import Rating from "react-rating";

import "./Allrating.css";
const AllRating = (props) => {
  const { email, review, comment } = props.ratings;
  return (
    <div>
      {
        <div className="rat-card mb-4 p-4 d-flex justify-content-center">
          <div>
            <h5 className="allrating ms-2">{email}</h5>
            <p className=" mt-3 ms-2">{comment}</p>

            <Rating
              className="rating mt-2 pt-4 ms-2"
              initialRating={review}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            ></Rating>
          </div>
        </div>
      }
    </div>
  );
};

export default AllRating;
