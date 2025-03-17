"use client";

import { useReducer } from "react";
import Card from "@/components/Card";

// Define types for state and actions
type RatingState = Map<string, number>;

type RatingAction =
  | { type: "SET_RATING"; venueName: string; rating: number }
  | { type: "REMOVE_VENUE"; venueName: string };

function ratingReducer(state: RatingState, action: RatingAction): RatingState {
  switch (action.type) {
    case "SET_RATING":
      return new Map(state).set(action.venueName, action.rating);
    case "REMOVE_VENUE":
      const newState = new Map(state);
      newState.delete(action.venueName); // Remove venue from Map
      return newState;
    default:
      return state;
  }
}

const CardPanel: React.FC = () => {
  const initialRatings: RatingState = new Map([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);

  const [ratings, dispatch] = useReducer(ratingReducer, initialRatings);

  const handleRatingChange = (venueName: string, rating: number) => {
    dispatch({ type: "SET_RATING", venueName, rating });
  };

  const handleRemoveVenue = (venueName: string) => {
    dispatch({ type: "REMOVE_VENUE", venueName });
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* Display all the cards with uniform styling */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
          paddingRight: "20px",
        }}
      >
        {Array.from(initialRatings.keys()).map((venueName) => {
          // Construct the image path correctly
          const imgPath = `/img/${venueName.toLowerCase().replace(/\s+/g, "")}.jpg`;
          console.log("Image path:", imgPath); // Log the image path for debugging

          return (
            <Card
              key={venueName}
              venueName={venueName}
              imgSrc={imgPath}
              rating={ratings.get(venueName) ?? 0}
              onRatingChange={handleRatingChange}
            />
          );
        })}
      </div>

      {/* Show venue list with ratings */}
      <div style={{ marginTop: "30px" }}>
        <h3>Venue List with Ratings</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Array.from(ratings.entries()).map(([venueName, rating]) => (
            <li
              key={venueName}
              data-testid={venueName}
              style={{
                fontSize: "18px",
                margin: "5px 0",
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
              onClick={() => handleRemoveVenue(venueName)}
            >
              {venueName}: ⭐ {rating} stars
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardPanel;
