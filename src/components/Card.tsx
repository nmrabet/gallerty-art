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
    <div>
      <img src={`/gallery/${image}`} alt="" />
      <h2>{name}</h2>
      <p>{artist}</p>
    </div>
  );
}
