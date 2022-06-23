import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../Context/UseAuth";
import Home from "../Pages/Home/Home";
import "./Dashboard.css";
const DashBoard = () => {
  const { user, logOut, admin } = UseAuth();
  console.log(admin);
  return (
    <div className="row card-dash mt-5 ms-3">
      <div className="col-lg-3 col-md-3">
        <div className="d-flex" id="wrapper">
          {/* <!-- Sidebar --> */}
          <div className="bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
              <i className="fas fa-user-secret me-2"></i>Dashboard
            </div>
            <div className="list-group list-group-flush my-3">
              {admin ? (
                <div>
                  <Link to="/admin" className=" ankor mt-2">
                    <i class="fas fa-shopping-cart me-2"></i>Make Admin
                  </Link>
                  <br />
                  <br />
                  <Link to="/manageorder" className="ankor">
                    <i class="fas fa-shopping-cart me-2"></i>Manage Order
                  </Link>
                  <br />
                  <br />
                  <Link to="/manageproduct" className="ankor">
                    <i class="fas fa-shopping-cart me-2"></i>Manage Product
                  </Link>
                  <br />
                  <br />
                  <Link to="/addproduct" className="ankor">
                    <i class="fas fa-shopping-cart me-2"></i>Add Products
                  </Link>
                  <br />
                  <br />
                </div>
              ) : (
                <div>
                  <Link to="/pay" className="ankor">
                    <i class="fas fa-shopping-cart me-2"></i>Payment
                  </Link>
                  <br />
                  <br />
                  <Link to="/myorder" className="ankor">
                    <i class="fas fa-border-all me-2"></i>My Order
                  </Link>
                  <br />
                  <br />
                  <Link to="/review" className="ankor">
                    <i class="fas fa-star me-2"></i>Review
                  </Link>
                  <br />
                  <br />
                </div>
              )}

              {user.email ? (
                <Link className="ankor" onClick={logOut}>
                  {" "}
                  <i class="fas fa-sign-out-alt"></i> Sign out
                </Link>
              ) : (
                ""
              )}
              <hr />
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
