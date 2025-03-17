"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const images = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

const Banner: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const navigateToVenue = () => {
    router.push("/venue");
  };

  return (
    <div
      className="relative w-full h-64 cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <img
        src={images[currentImageIndex]}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          navigateToVenue();
        }}
        className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600"
      >
        Select Venue
      </button>
    </div>
  );
};

export default Banner;
