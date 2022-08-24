import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row row-cols-lg-4">
          <div className="mt-4">
            <div>
              <h3 className="mb-3">Adress</h3>
              <h5>
                {" "}
                <i class="fa-solid fa-location-dot me-2 fa"></i>Zindabazr,
                Sylhet
              </h5>
              <h5 className="ms-4">Bangladesh</h5>
              <h5 className="mt-4">
                <i class="fa-solid fa-mobile me-2 fa"></i>+088017597582
              </h5>
              <h5 className="mt-4">
                <i class="fa-solid fa-envelope-open-text me-2 fa"></i>
                mahed255261@gmail.com
              </h5>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <h3 className="mb-3">Pages</h3>
              <h5>Home</h5>
              <h5>About</h5>
              <h5>Explorer</h5>
              <h5>Contact Us</h5>
              <h5>My Order</h5>
              <h5>Rivew</h5>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <h3 className="mb-3">Admin</h3>
              <h5>Home</h5>
              <h5>About</h5>
              <h5>Explorer</h5>
              <h5>My Order</h5>
              <h5>Manage Order</h5>
              <h5>Change Admin</h5>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <h3 className="mb-3">NewSleter</h3>
              <input
                placeholder="Enter your Email"
                type="email"
                className="footer-input mt-3"
              />
              <div className="color-icon d-flex pt-5">
                <i className="fab fa-facebook f"></i>
                <i className="fab fa-google g"></i>
                <i className="fab fa-twitter t"></i>
                <i className="fab fa-youtube y"></i>
                <i className="fab fa-instagram-square insta"></i>
                <i class="fab fa-instagram f"></i>
                <i class="far fa-thumbs-up t"></i>
              </div>
            </div>
          </div>
        </div>
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
      <h6 className="text-center">Mac Shop establish in 2020</h6>
    </div>
  );
};

export default Footer;
