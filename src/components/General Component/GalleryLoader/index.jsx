import React, { useEffect } from "react";
import { Cursor } from "../Cursor";
import "./styles.scss";

const GalleryLoader = () => {
  useEffect(() => {
    let cursorPick = document.querySelector(".cursor");
    const cursor = new Cursor(cursorPick);
  });

  return (
    <>
      <div className="cursor">
        <div className="cursor__inner"></div>
      </div>
      <div className="galcon">
        <div className="innercon">
          <h4>
            “There Is One Thing The Photo Must Contain – The humanity of The
            Moment”
          </h4>
          <h5>– Robert Frank</h5>
        </div>
      </div>
    </>
  );
};

export { GalleryLoader };
