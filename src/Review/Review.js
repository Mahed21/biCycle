import React, { useRef } from "react";
import UseAuth from "../Context/UseAuth";
import "./Rivew.css";

const Review = () => {
  const revRef = useRef();
  const emailRef = useRef();
  const comRef = useRef();
  const { user } = UseAuth();
  const submitRivew = (e) => {
    e.preventDefault();
    const review = revRef.current.value;
    const email = emailRef.current.value;
    const comment = comRef.current.value;
    const newUser = { review, email, comment };
    fetch("https://afternoon-woodland-81151.herokuapp.com/rivew", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thank you for choose us your data is Successfully Collected");
          e.target.reset();
        }
      });
  };

  return (
    <div className="review d-flex justify-content-center align-items-center">
      <div>
        <form className="mt-3 mb-3" onSubmit={submitRivew} id="click">
          <div className="mb-3">
            <h4>Review</h4>
            <input
              type="text"
              ref={revRef}
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder="give any digit from 1 to 5"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              comment
            </label>
            <br />
            <textarea
              id="w3review"
              ref={comRef}
              name="w3review"
              rows="4"
              cols="50"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={user.email}
              ref={emailRef}
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder=""
              required
            />
          </div>

          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Review;
