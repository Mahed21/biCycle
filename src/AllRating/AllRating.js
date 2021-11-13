import React from 'react';
import Rating from 'react-rating';
import './Allrating.css'
const AllRating = (props) => {
    const {email,review}=props.ratings;
    return (
        <div className="rat mb-4">
            <h3 className="allrating ms-2">{email}</h3>
            <Rating className="rating mt-2"
                initialRating={review}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star">
            </Rating>


        </div>
    );
};

export default AllRating;