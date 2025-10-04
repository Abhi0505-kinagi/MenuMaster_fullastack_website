import React from "react";
import "./TitleCard.css";

const TitleCard = () => {
  return (
    <div className="title-card">
      <div className="overlay">
        <h1 className="restaurant-name">🍔 Hotel Management System</h1>
        <p className="tagline">
          Delicious meals. Fast service. Happy customers.
        </p>
      </div>
    </div>
  );
};

export default TitleCard;
