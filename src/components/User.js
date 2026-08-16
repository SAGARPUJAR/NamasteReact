import { useState } from "react";

const Card = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="card">
      <h2>count : {count}</h2>
      <h2>count2 : {count2}</h2>
      <img
        className="card-img"
        src="https://via.placeholder.com/280x180"
        alt="Restaurant"
      />

      <div className="card-content">
        <h2 className="card-title">{name}</h2>

        <p className="card-rating">⭐ 4.3</p>

        <p className="card-description">
          Delicious pizza, burgers and Italian food.
        </p>

        <p className="card-price">₹200 for two</p>
      </div>
    </div>
  );
};

export default Card;
