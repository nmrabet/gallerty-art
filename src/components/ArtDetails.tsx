import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import viewImg from "../assets/shared/icon-view-image.svg";
import left from "../assets/shared/icon-back-button.svg";
import right from "../assets/shared/icon-next-button.svg";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import data from "../data";

export default function ArtDetails() {
  const [open, setOpen] = React.useState(false);

  const { id } = useParams();
  const result = data.find((el) => el.id === Number(id));

  return (
    <Layout>
      <div className="art-slide">
        <div className="responsive">
          <div className="art-container">
            <img
              srcSet={`${`/gallery/${result?.images.hero.small}`} 320w, ${`/gallery/${result?.images.hero.small}`} 680w, ${`/gallery/${result?.images.hero.large}`} 960w, ${`/gallery/${result?.images.hero.large}`} 1980w`}
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
              slides={[{ src: `/gallery/${result?.images.gallery}` }]}
            />
          </div>
          <div className="title-container">
            <h2 className="art-title">{result?.name}</h2>
            <h4 className="art-artist">{result?.artist.name}</h4>
          </div>
        </div>
        <img
          src={`/gallery/${result?.artist.image}`}
          alt=""
          className="artist"
        />
        <div className="text-container">
          <p className="date">{result?.year}</p>
          <p className="desc">{result?.description}</p>
          <div className="link-container">
            <a href={result?.source} className="link">
              GO TO SOURCE
            </a>
          </div>
        </div>
      </div>
      <div className="progress-bar"></div>
      <div className="result?-footer">
        <div>
          <h4>{result?.name}</h4>
          <h5>{result?.artist.name}</h5>
        </div>
        <div className="player">
          <img src={left} alt="" />
          <img src={right} alt="" />
        </div>
      </div>
    </Layout>
  );
}
