import React from 'react';
import Rating from 'react-rating';
import './Allrating.css'
const AllRating = (props) => {
    const {email,review,comment}=props.ratings;
    return (

           <div className="col rat mb-4 ">
               <div className="rat-card">
             <Rating className="rating mt-2 pt-4 ms-2"
                initialRating={review}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star">
            </Rating>
            <br/>
            <small className="allrating ms-2">{email}</small>
                <p className="pb-5 mt-3 ms-2">{comment}</p>
                </div>
           


        </div>
    );
};

export default AllRating;