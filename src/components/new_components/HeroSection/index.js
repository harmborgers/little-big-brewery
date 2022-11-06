import React from "react";
import "./style.scss";
import ContentButton from "../ContentButton";
import Video from "../../../videos/hero_bg_beer.mp4";

const HeroSection = () => {
  return (
    <div className="c-hero-section">
      <div className="c-hero-section__bg u-noselect">
        <video
          className="c-hero-section__bg-video"
          src={Video}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="c-hero-section__content">
        <h1 className="c-hero-section__header">
          The best beers this side of the Yarra
        </h1>
        <p className="c-hero-section__text">
          At least in our humble opinion, anyway
        </p>
        <div className="c-hero-section__btn-wrapper">
          {" "}
          <ContentButton
            text="Explore our range"
            additionalClasses={{ primary: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
