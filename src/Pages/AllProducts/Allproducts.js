import React from 'react';
import { Link } from 'react-router-dom';

const Allproducts = (props) => {
    const {name,img,description,cost,_id}= props.allItems
    return (
        <div>
             <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><i class="fas fa-audio-description service-icon"></i> {description}</p>
                    <p className="card-text"><i class="fas fa-dollar-sign service-icon"></i> {cost}</p>
                    <Link to={`/purchase/${_id}`}>

                    <button className="sign-btn">Place Order</button>
                    </Link>
                    
                </div>
                </div>
              </div>
           </div>
        </div>
    );
};

export default Allproducts;