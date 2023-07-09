import React from "react";
import viewImg from "../assets/shared/icon-view-image.svg";
import left from "../assets/shared/icon-back-button.svg";
import right from "../assets/shared/icon-next-button.svg";
import Layout from "./Layout";

export default function Artslide() {
  return (
    <Layout>
      <div className="art-slide">
        <div className="responsive">
          <div className="art-container">
            <img
              srcSet={`${"/public/gallery/starry-night/hero-small.jpg"} 320w, ${"/public/gallery/starry-night/hero-small.jpg"} 680w, ${"/public/gallery/starry-night/hero-large.jpg"} 960w, ${"/public/gallery/starry-night/hero-large.jpg"} 1980w`}
              alt="painting"
              className="art-img"
            />
            <button className="art-btn">
              <img src={viewImg} alt="" />
              <p>VIEW IMAGE</p>
            </button>
          </div>
          <div className="title-container">
            <h2 className="art-title">Starry Night</h2>
            <h4 className="art-artist">Vincent Van Gogh</h4>
          </div>
        </div>
        <img
          src="/public/gallery/starry-night/artist.jpg"
          alt=""
          className="artist"
        />
        <div className="text-container">
          <p className="date">1889</p>
          <p className="desc">
            Although The Starry Night was painted during the day in Van Gogh's
            ground-floor studio, it would be inaccurate to state that the
            picture was painted from memory. The view has been identified as the
            one from his bedroom window, facing east, a view which Van Gogh
            painted variations of no fewer than twenty-one times, including The
            Starry Night. "Through the iron-barred window," he wrote to his
            brother, Theo, around 23 May 1889, "I can see an enclosed square of
            wheat ... above which, in the morning, I watch the sun rise in all
            its glory."
          </p>
          <div className="link-container">
            <a href="#" className="link">
              GO TO SOURCE
            </a>
          </div>
        </div>
      </div>
      <div className="progress-bar"></div>
      <div className="el-footer">
        <div>
          <h4>Starry Night</h4>
          <h5>Vincent Van Gogh</h5>
        </div>
        <div className="player">
          <img src={left} alt="" />
          <img src={right} alt="" />
        </div>
      </div>
    </Layout>
  );
}
