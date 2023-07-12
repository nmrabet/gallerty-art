import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import viewImg from "../assets/shared/icon-view-image.svg";
import left from "../assets/shared/icon-back-button.svg";
import right from "../assets/shared/icon-next-button.svg";

export default function Arts({
  name,
  artist,
  image,
  year,
  description,
  picture,
  source,
  imagesmall,
}: {
  name: string;
  artist: string;
  image: string;
  year: number;
  source: string;
  description: string;
  picture: string;
  imagesmall: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="art-slide">
        <div className="responsive">
          <div className="art-container">
            <img
              srcSet={`${`/gallery/${imagesmall}`} 320w, ${`/gallery/${imagesmall}`} 680w, ${`/gallery/${image}`} 960w, ${`/gallery/${image}`} 1980w`}
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
              slides={[{ src: `/gallery/${imagesmall}` }]}
            />
          </div>
          <div className="title-container">
            <h2 className="art-title">{name}</h2>
            <h4 className="art-artist">{artist}</h4>
          </div>
        </div>
        <img src={`/gallery/${picture}`} alt="" className="artist" />
        <div className="text-container">
          <p className="date">{year}</p>
          <p className="desc">{description}</p>
          <div className="link-container">
            <a href={source} className="link">
              GO TO SOURCE
            </a>
          </div>
        </div>
      </div>
      <div className="progress-bar"></div>
      <div className="el-footer">
        <div>
          <h4>{name}</h4>
          <h5>{artist}</h5>
        </div>
        <div className="player">
          <img src={left} alt="" />
          <img src={right} alt="" />
        </div>
      </div>
    </>
  );
}
