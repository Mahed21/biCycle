import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../Context/UseAuth';
import Home from '../Pages/Home/Home';
import './Dashboard.css';
const DashBoard = () => {
    const {user,logOut}= UseAuth();
    return (
        <div className="row card-dash">
            <div className="col-lg-3 col-md-3">
                <div className="d-flex" id="wrapper">
            {/* <!-- Sidebar --> */}
            <div className="bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                        className="fas fa-user-secret me-2"></i>Dashboard</div>
                <div className="list-group list-group-flush my-3">

                   
                    <Link to="/pay" className="list-group-item list-group-item-action mt-2"><i class="fas fa-shopping-cart me-2"></i>Payment</Link>

                    <Link to="/myorder" className="list-group-item list-group-item-action mt-2"><i class="fas fa-border-all me-2"></i>My Order</Link>

                    <Link to="/review" className="list-group-item list-group-item-action mt-2"><i class="fas fa-star me-2"></i>Review</Link>
                    

                    { user.email?<button className="log-out list-group-item list-group-item-action mt-2"  onClick={logOut} > <i class="fas fa-sign-out-alt"></i> Sign out</button>:''
                      }
                      <hr/>
                    
                </div>
            </div>
         </div>

            </div>
            <div className="col-lg-9">
                <Home></Home>

            </div>

        </div>
    );
};

export default DashBoard;