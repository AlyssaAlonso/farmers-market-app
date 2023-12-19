import React from "react";
import { Link } from "react-router-dom";

export default function VendorCard({ vendor }) {
  const randomNumber = Math.floor(Math.random() * 1000); // Generating a random number

  return (
    <div className="card-container">
      <div
        className="card-image"
        style={{
          background: `url('https://source.unsplash.com/collection/202618/320x180?sig=${
            Date.now() + randomNumber
          }')`,
        }}
      ></div>
      <div className="card-content">
        <h2>{vendor.name}</h2>
        <p>{vendor.description}</p>

        <div className="card-links">
          <Link
            to={{
              pathname: `/vendors/${vendor._id}`,
              state: { vendorData: vendor },
            }}
          >
            View Offerings
          </Link>
        </div>
      </div>
    </div>
  );
}
