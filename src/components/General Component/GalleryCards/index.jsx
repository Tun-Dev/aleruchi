import React from "react";
import "./styles.scss";
import { Tradition } from "assets";

const GalleryCards = ({ title, image }) => {
  return (
    <>
      <div className="gallerycards">
        <div className="inner">
          <img src={image} alt="" />
          <h5>{title}</h5>
        </div>
      </div>
    </>
  );
};

export { GalleryCards };
