import React from "react";

interface CardProps {
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (rating: number) => void;
}

const Card: React.FC<CardProps> = ({ venueName, imgSrc, rating, onRatingChange }) => {
  return (
    <div>
      <img src={imgSrc} alt={venueName} width="200" height="150" />
      <h3>{venueName}</h3>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => onRatingChange(star)}
            style={{
              cursor: "pointer",
              color: star <= rating ? "gold" : "gray",
              fontSize: "20px",
            }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
