import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ClientOrder = (props) => {
  const { name, email, address, phone, _id } = props.client;
  const [usersManage, setUsersManage] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-woodland-81151.herokuapp.com/client")
      .then((res) => res.json())

      .then((data) => setUsersManage(data));
  }, []);

  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                <i class="fas fa-envelope-square"></i> {email}
              </p>
              <p className="card-text">
                <i class="fas fa-phone-volume"></i> {phone}
              </p>
              <p className="card-text">
                <i class="fas fa-address-card"></i> {address}
              </p>
              <button
                className="mt-3 btn"
                onClick={() => props.deleteHandle(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientOrder;
