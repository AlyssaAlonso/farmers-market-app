import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="card-container">
      <div
        className="card-image"
        style={{
          background: `url(${item.image})`,
        }}
      ></div>
      <div className="card-content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>

        <div className="card-links">
          <Link
            to={{
              pathname: `/items/${item._id}`,
              state: { itemData: item },
            }}
          >
            View Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}
