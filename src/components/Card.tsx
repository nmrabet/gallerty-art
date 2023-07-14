import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  artist,
  image,
}: {
  id: number;
  name: string;
  artist: string;
  image: string;
}) {
  return (
    <div className="card">
      <Link to={`/${id}`}>
        <img src={`/gallery/${image}`} alt="" className="gallery-img" />
        <h2 className="card-title">{name}</h2>
        <p className="card-subtitle">{artist}</p>
      </Link>
    </div>
  );
}
