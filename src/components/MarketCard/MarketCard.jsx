import React from "react";

export default function MarketCard({ market }) {
  const randomNumber = Math.floor(Math.random() * 1000); // Generating a random number

  return (
    <div class="market-card">
      <div
        class="card-image"
        style={{
          background: `url('https://source.unsplash.com/collection/353005/1600x900?sig=${
            Date.now() + randomNumber
          }') no-repeat center center`,
          WebkitBackgroundSize: "cover",
        }}
      ></div>
      <div class="card-content">
        <h2>{market.name}</h2>
        <p>{market.address}</p>
        <p>{market.dayOfWeek}</p>
        <p>{market.startDate}</p>
        <p>{market.endDate}</p>
      </div>
    </div>
  );
}
