import React from "react";
import Layout from "./Layout";
import data from "../data.json";
import Card from "./Card";

export default function Main() {
  const cards = data.map((painting) => {
    return (
      <Card
        key={painting.name}
        name={painting.name}
        image={painting.images.gallery}
        artist={painting.artist.name}
      />
    );
  });
  return <Layout>{cards}</Layout>;
}
