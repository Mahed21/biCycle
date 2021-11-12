import React from 'react';
import Rating from 'react-rating';
import './Allrating.css'
const AllRating = (props) => {
    const {email,review}=props.ratings;
    return (
        <div >
            <h3 className="allrating">{email}</h3>
            <Rating className="rating mt-2"
                initialRating={review}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star">
            </Rating>


        </div>
    );
};

export default AllRating;