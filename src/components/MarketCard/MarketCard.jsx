import React from "react";

export default function MarketCard({ market }) {
  const randomNumber = Math.floor(Math.random() * 1000); // Generating a random number

  const startDateString = market.startDate;
  const startDate = new Date(startDateString);
  const startTime = startDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  const formattedStartDate = startDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const endDateString = market.endDate;
  const endDate = new Date(endDateString);
  const endTime = endDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  const formattedEndDate = endDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="market-card">
      <div
        className="card-image"
        style={{
          background: `url('https://source.unsplash.com/collection/202618/320x180?sig=${
            Date.now() + randomNumber
          }')`,
        }}
      ></div>
      <div className="card-content">
        <h2>{market.name}</h2>
        <p>{market.address}</p>
        <p>
          {market.dayOfWeek}, {startTime} - {endTime}
        </p>

        <p>
          {formattedStartDate} - {formattedEndDate}
        </p>

        <div className="card-links">
          <a href={`/markets/${market.name}`}>View Offerings</a>
        </div>
      </div>
    </div>
  );
}
