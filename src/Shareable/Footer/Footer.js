import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" footer">
      <div className="color-icon d-flex justify-content-center pt-5">
        <i className="fab fa-facebook f"></i>
        <i className="fab fa-google g"></i>
        <i className="fab fa-twitter t"></i>
        <i className="fab fa-youtube y"></i>
        <i className="fab fa-instagram-square insta"></i>
      </div>
      <div className="text d-flex justify-content-center mt-4">
        <h5>Text</h5>
        <h5 className="ms-4">About</h5>
        <h5 className="ms-4">Home</h5>
        <h5 className="ms-4">Contact Us</h5>
        <h5 className="ms-4">Detail</h5>
      </div>
      <hr />
      <div className="list-icon d-flex justify-content-center pt-5 pb-5">
        <i className="fab fa-facebook "></i>
        <i className="fab fa-google "></i>
        <i className="fab fa-twitter "></i>
        <i className="fab fa-youtube "></i>
        <i className="fab fa-instagram-square"></i>
        <i class="fab fa-instagram"></i>
        <i class="far fa-thumbs-up"></i>
      </div>
      <small>Mac Shop establish in 2020</small>
    </div>
  );
};

export default Footer;
