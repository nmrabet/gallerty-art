import React from "react";
import Layout from "./Layout";
import Card from "./Card";
import useSWR from "swr";

export default function Main() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/data.json", fetcher);

  if (error) return <div>Failed to fetch data.</div>;
  if (isLoading) return <div>Loading...</div>;

  const cards = data.map((painting: any) => {
    return (
      <Card
        id={painting.id}
        name={painting.name}
        image={painting.images.gallery}
        artist={painting.artist.name}
      />
    );
  });
  return <Layout>{cards}</Layout>;
}
