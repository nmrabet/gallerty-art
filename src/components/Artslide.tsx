import React from "react";
import Layout from "./Layout";
import data from "../data.json";
import Arts from "./Arts";

export default function Artslide() {
  const slides = data.map((art) => {
    return (
      <Arts
        key={art.name}
        name={art.name}
        year={art.year}
        description={art.description}
        source={art.source}
        artist={art.artist.name}
        picture={art.artist.image}
        image={art.images.hero.large}
        imagesmall={art.images.hero.small}
      />
    );
  });

  return <Layout>{slides}</Layout>;
}
