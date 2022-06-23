import React, { useState } from "react";
import "./MakeAdmin.css";

const MakeAdmin = (e) => {
  const [email, setEmail] = useState("");

  const handleAdmin = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://afternoon-woodland-81151.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <div className="makeadmin  d-flex justify-content-center align-items-center ">
      <div>
        <h4 className="mb-3">Make Admin</h4>
        <form className="" onSubmit={handleSubmit} id="click">
          <div className="mb-3">
            <input
              onBlur={handleAdmin}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Give new admin email"
              required
            />
          </div>
          <input type="submit" value="Make Admin" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
