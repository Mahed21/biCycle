import React, { useRef } from "react";
import "./AddProduct.css";

const AddProducts = () => {
  const nameRef = useRef();
  const imgRef = useRef();
  const priceRef = useRef();
  const desRef = useRef();

  const handleAddServices = (e) => {
    const name = nameRef.current.value;
    const img = imgRef.current.value;
    const cost = priceRef.current.value;
    const description = desRef.current.value;

    const newUser = { name, img, cost, description };

    fetch("https://afternoon-woodland-81151.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("services is successfully added");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <form className="mt-3 mb-3" onSubmit={handleAddServices}>
          <h4 className="mt-5 mb-5">Add New Bicycle</h4>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Bicycle Name
            </label>
            <input
              type="text"
              ref={nameRef}
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Image url
            </label>
            <input
              type="text"
              ref={imgRef}
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Duration
            </label>
            <input
              type="text"
              ref={desRef}
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Cost
            </label>
            <input
              type="text"
              ref={priceRef}
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
