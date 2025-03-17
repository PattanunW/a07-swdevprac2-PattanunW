"use client";

import Link from "next/link";

// Mock data stored in a Map
const mockVenues = new Map([
  ["001", { name: "The Bloom Pavilion", img: "/img/thebloompavilion.jpg" }],
  ["002", { name: "Spark Space", img: "/img/sparkspace.jpg" }],
  ["003", { name: "The Grand Table", img: "/img/thegrandtable.jpg" }],
]);

export default function VenueDetailPage({ params }: { params: { vid: string } }) {
  const { vid } = params; // Get the vid from the dynamic route params

  const venue = mockVenues.get(vid);

  if (!venue) {
    return <p className="text-center text-red-500">Venue not found.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{venue.name}</h1>
      <img src={venue.img} alt={venue.name} className="mt-4 w-full h-60 object-cover rounded-lg shadow-md" />
      
      <div className="mt-6">
  <Link href="/venue">
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      🔙 Back to Venues
    </button>
  </Link>
</div>

    </div>
  );
}
