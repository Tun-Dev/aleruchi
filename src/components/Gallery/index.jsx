import React, { useEffect } from "react";
import "./styles.scss";
import { NavBar, Cursor, GalleryCards } from "components/General Component";
import { Data } from "./data";

const Gallery = () => {
  useEffect(() => {
    let cursorPick = document.querySelector(".cursor");
    const cursor = new Cursor(cursorPick);

    document.querySelectorAll("button").forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });
    document.querySelectorAll("li").forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });
  });

  return (
    <>
      <div className="cursor"></div>
      <div className="gallerycon">
        <NavBar navTitle="Gallery" />
        <div className="inner">
          {Data.map((d, index) => (
            <GalleryCards key={index} image={d.image} title={d.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Gallery };
