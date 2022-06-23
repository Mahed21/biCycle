import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Home.css";
import img from "../../image/img1.jpg";
import img1 from "../../image/img2.jpg";
import img2 from "../../image/img-3.jpg";

import AllRating from "../../AllRating/AllRating";
const Home = () => {
  const [item, setItem] = useState([]);
  const [rating, setRating] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-woodland-81151.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  useEffect(() => {
    fetch("https://afternoon-woodland-81151.herokuapp.com/rivew")
      .then((res) => res.json())
      .then((data) => setRating(data));
  }, []);
  return (
    <div>
      {/* banner */}
      <div className="banner mb-5 d-flex align-items-center">
        <div className="banner-text  pt-5">
          <h3 className="text-center">Most Popular bicycle shop</h3>
          <h5 className="text-center mt-3">
            “Life is like riding a bicycle. To keep your balance you must keep
            moving” Albert Einstein (1879 – 1955), physicist who developed the
            general theory of relativity
          </h5>
          <span className="d-flex justify-content-center mt-4">
            <button className="btn p-3">Explore more</button>
          </span>
        </div>
      </div>

      {/* services */}
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-1">
          {item.slice(0, 6).map((items) => (
            <Product items={items} key={items._id}></Product>
          ))}
        </div>
      </div>

      {/* rating */}
      <div className="container mt-5">
        <h3 className="text-center mb-5">Users Review</h3>
        <div className="row row-cols-lg-2 row-cols-1">
          {rating.map((ratings) => (
            <AllRating ratings={ratings} key={rating._id}></AllRating>
          ))}
        </div>
      </div>

      {/* additional part */}
      <div className="container mt-3 additional mb-5">
        <h3 className="text-center heading pt-3 pb-3">
          Why choose MAC BiCycle blast
        </h3>
        <div className="row">
          <div className="col-lg-5 col-12">
            <h4>Best Brand</h4>
            <p>We always supply best bycycle brand</p>
            <hr />

            <h4>Lower Price</h4>
            <p>
              Price is not as musch as it is most cheapest blast than any oter
              other company
            </p>
            <hr />
            <h4>Services</h4>
            <p>It will serve with los lasting we offer 3 yeras geranti </p>
            <h4>Safety</h4>
            <p>we have a good history since two years for safety </p>
          </div>
          <div className="col-lg-7 col-12">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img2} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
