import React from "react";
import { Link } from "react-router-dom";
import "./VendorCard.css";

export default function VendorCard({ vendor }) {
  const randomNumber = Math.floor(Math.random() * 1000); // Generating a random number

  return (
    <Link
      to={{
        pathname: `/vendors/${vendor._id}`,
        state: { vendorData: vendor },
      }}
      className="vendor-link"
    >
      <div className="vendor-card">
        <div
          className="vendor-card-image"
          style={{
            background: `url('https://source.unsplash.com/collection/202618/180x180?sig=${
              Date.now() + randomNumber
            }')`,
          }}
        ></div>
        <div className="vendor-card-content">
          <h4>{vendor.name}</h4>
        </div>
      </div>
    </Link>
  );
}
