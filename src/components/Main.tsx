import Layout from "./Layout";
import Card from "./Card";
import data from "../data";

export default function Main() {
  const cards = data.map((painting: any) => {
    return (
      <Card
        key={painting.id}
        id={painting.id}
        name={painting.name}
        image={painting.images.gallery}
        artist={painting.artist.name}
      />
    );
  });
  return <Layout>{cards}</Layout>;
}
