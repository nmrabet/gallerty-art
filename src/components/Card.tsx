import React from "react";

export default function Card({
  name,
  artist,
  image,
}: {
  name: string;
  artist: string;
  image: string;
}) {
  return (
    <div className="card">
      <img src={`/gallery/${image}`} alt="" className="gallery-img" />
      <h2 className="card-title">{name}</h2>
      <p className="card-subtitle">{artist}</p>
    </div>
  );
}
