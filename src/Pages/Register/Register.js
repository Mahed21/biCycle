import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import { useHistory } from "react-router-dom";

import login from "../../image/login.png";

const Register = () => {
  const { signInEmail, error, isloading } = UseAuth();
  const [email, setEmail] = useState({});
  const [pass, setPass] = useState({});
  const history = useHistory();

  const handleRegistration = (e) => {
    e.preventDefault();
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const HandlePassword = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="mt-5">
      <div className="container login-form p-5 mb-5">
        <div className="row row-cols-lg-2">
          <img src={login} alt="" />
          <div>
            {/* <h3 className="ms-5 mt-5 reg-form">Registration Form</h3> */}
            {!isloading && (
              <form
                className="row g-3 w-50 mx-auto form-design"
                onSubmit={handleRegistration}
              >
                <h3>Registration Form</h3>
                <div className="col-md-12 mb-3">
                  <input
                    type="name"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Full Name"
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    placeholder="Email"
                    onBlur={handleEmail}
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    placeholder="Password"
                    onBlur={HandlePassword}
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>

                <div>{error}</div>

                <div className="col-12  mb-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      signInEmail(email, pass, history);
                    }}
                    type="submit"
                    className="btn"
                  >
                    Registerd
                  </button>

                  <NavLink to="/login" className="ms-3 writing">
                    Already Registerd?
                  </NavLink>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
