"use client";

import { Card as MuiCard, CardContent, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

interface CardProps {
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (venueName: string, rating: number) => void;
}

export default function Card({ venueName, imgSrc, rating, onRatingChange }: CardProps) {
  return (
    <MuiCard sx={{ maxWidth: 345, padding: 2, textAlign: "center" }}>
      <img src={imgSrc} alt={venueName} style={{ width: "100%", borderRadius: 8 }} />
      <CardContent>
        <Typography variant="h6">{venueName}</Typography>
        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={(_, newValue) => onRatingChange(venueName, newValue ?? 0)}
        />
      </CardContent>
    </MuiCard>
  );
}
