import React from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import "./Header.css";
import logo from "../../image/logo.png";

const Header = () => {
  const { user, logOut } = UseAuth();

  return (
    <div className="myNavbar">
      <div className="container pt-2 pb-2 ">
        <nav className="navbar navbar-expand-lg nav-back">
          <div className="container-fluid">
            <NavLink to="#" class="navbar-brand" href="#">
              <img src={logo} alt="" />
            </NavLink>
            <button
              className="navbar-toggler togg-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pb-2 pt-2">
                <li className="nav-item">
                  <NavLink to="/home" className="ankor ms-3 Bold text">
                    <i class="fas fa-home"></i> Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/explore" className="ankor ms-3 Bold text">
                    <i class="fas fa-taxi"></i>Explorer
                  </NavLink>
                </li>
                <li className="nav-item">
                  {user.email ? (
                    <NavLink
                      className="ankor ms-3"
                      to="/login"
                      onClick={logOut}
                    >
                      <i class="fas fa-sign-out-alt"></i>Logout
                    </NavLink>
                  ) : (
                    <NavLink className="ankor ms-3" to="/login">
                      <i class="fas fa-sign-out-alt"></i> Login
                    </NavLink>
                  )}
                  {user.email ? (
                    <NavLink className="ankor ms-3" to="/dashboard">
                      <i className="fas fa-user-secret me-2"></i> DashBoard
                    </NavLink>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
