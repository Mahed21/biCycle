import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Home.css";
import banner from "../../image/banner.png";

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
      <div className="banner mb-5 d-flex align-items-end pb-3 justify-content-center ps-5 pe-5">
        <div className="banner-text  pt-5 pb-5">
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
      <div className="about pt-5 pb-5">
        <div className="container  pt-5 pb-5">
          <div className="row row-cols-lg-2">
            <div>
              <h4>About Us</h4>
              <h2>Welcome to RoadPedal</h2>
              <h5 className="mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </h5>
              <br />
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </h5>
              <button className="mt-3 pt-1 pb-1 ps-5 pe-5">Read More</button>
            </div>
            <img src={banner} alt="" />
          </div>
        </div>
      </div>

      <div className="container box-parent mb-4">
        <div className="row row-cols-lg-3">
          <div>
            <div className="box ps-5 pe-5 pt-3 pb-3">
              <h4>Special Item</h4>
            </div>
          </div>
          <div>
            <div className="box ps-5 pe-5 pt-3 pb-3">
              <h4>Just Arrived </h4>
            </div>
          </div>
          <div>
            <div className="box ps-5 pe-5 pt-3 pb-3">
              <h4>Top Selling </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
