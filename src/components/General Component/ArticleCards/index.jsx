import React from "react";
import { ArrowRight } from "assets";
import "./styles.scss";

const ArticleCards = ({ header, summary }) => {
  return (
    <>
      <div className="ArticleCard">
        <div className="inner">
          <div className="top">
            <h1>{header}</h1>
            <p>{summary}</p>
          </div>
          <div className="bottom">
            <button>
              <h5>Read More</h5>
              <img src={ArrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ArticleCards };
