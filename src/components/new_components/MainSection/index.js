import React from "react";
import "./style.scss";
import cx from "classnames";
import _ from "lodash";
import ContentButton from "../ContentButton";

const MainSection = (data) => {
  return (
    <div
      className={cx("c-main-section", {
        "c-main-section--dark": data.darkSection,
      })}
      id={data.id}
    >
      <div
        className={cx("c-main-section__wrapper", {
          "c-main-section__wrapper--image-first": data.imgFirst,
        })}
      >
        <div className="c-main-section__col-1">
          <div className="c-main-section__content">
            <h1 className="c-main-section__title">{data.title}</h1>
            <h3 className="c-main-section__subtitle">{data.subtitle}</h3>
            <h5 className="c-main-section__details">{data.details}</h5>
            <p className="c-main-section__text">{data.text}</p>
          </div>
          <ContentButton text={data.buttonText} />
        </div>
        <div className="c-main-section__col-2">
          <div className="c-main-section__image-wrapper">
            <img
              className="c-main-section__image"
              src={data.img}
              alt={data.imgAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
