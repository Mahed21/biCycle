import React from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import "./Login.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useState } from "react";
import login from "../../image/login.png";

const Login = () => {
  const [email, setEmail] = useState({});
  const [pass, setPass] = useState({});
  const { loginUser, googleSignIn, isLoading } = UseAuth();
  const location = useLocation();
  const history = useHistory();

  const handleGoogle = (e) => {
    googleSignIn(location, history);
  };
  const emailLogin = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const passLogin = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="login mt-5 mb-5">
      <div className="container login-form p-5">
        <div className="row row-cols-lg-2">
          <div>
            <img src={login} alt="" />
            <div className="mt-5">
              <NavLink className="h5" to="/registerd">
                Create an account
              </NavLink>
            </div>
          </div>
          <div>
            {" "}
            <h3 className="pt-5 text-center ">Login Form</h3>
            <form className=" row g-3 w-50 mx-auto">
              <div className="col-md-12 mb-3">
                <input
                  onBlur={emailLogin}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  onBlur={passLogin}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="col-12 mb-2">
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    loginUser(email, pass, location, history);
                  }}
                >
                  Sign in
                </button>
              </div>
              <div className="col-12">
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    handleGoogle();
                  }}
                >
                  login With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
