import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import viewImg from "../assets/shared/icon-view-image.svg";
import left from "../assets/shared/icon-back-button.svg";
import right from "../assets/shared/icon-next-button.svg";
import Layout from "./Layout";
import useSWR from "swr";
import { useParams } from "react-router-dom";

export default function ArtDetails() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const params = useParams();
  console.log(params.id);

  const [open, setOpen] = React.useState(false);
  const { data, error, isLoading } = useSWR("/data.json", fetcher);

  if (error) return <div>Failed to fetch data.</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data)

  return (
    <Layout>
      <div className="art-slide">
        <div className="responsive">
          <div className="art-container">
            <img
              srcSet={`${`/gallery/${data.images.hero.small}`} 320w, ${`/gallery/${data.images.hero.small}`} 680w, ${`/gallery/${data.images.hero.large}`} 960w, ${`/gallery/${data.images.hero.large}`} 1980w`}
              alt="painting"
              className="art-img"
            />
            <button className="art-btn" onClick={() => setOpen(true)}>
              <img src={viewImg} alt="" />
              <p>VIEW IMAGE</p>
            </button>
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={[{ src: `/gallery/${data.gallery}` }]}
            />
          </div>
          <div className="title-container">
            <h2 className="art-title">{data.name}</h2>
            <h4 className="art-artist">{data.artist}</h4>
          </div>
        </div>
        <img src={`/gallery/${data.artist.image}`} alt="" className="artist" />
        <div className="text-container">
          <p className="date">{data.year}</p>
          <p className="desc">{data.description}</p>
          <div className="link-container">
            <a href={data.source} className="link">
              GO TO SOURCE
            </a>
          </div>
        </div>
      </div>
      <div className="progress-bar"></div>
      <div className="el-footer">
        <div>
          <h4>{data.name}</h4>
          <h5>{data.artist}</h5>
        </div>
        <div className="player">
          <img src={left} alt="" />
          <img src={right} alt="" />
        </div>
      </div>
    </Layout>
  );
}
