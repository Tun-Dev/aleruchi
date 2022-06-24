import React, { useEffect, useRef } from "react";
import "./styles.scss";
import { NavBar, Cursor, GalleryCards } from "components/General Component";
import useWindowSize from "utils/hooks";
import { Data } from "./data";

const Gallery = () => {
  const gallery = useRef();
  const scrollContainer = useRef();

  const size = useWindowSize();

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    let cursorPick = document.querySelector(".cursor");
    const cursor = new Cursor(cursorPick);

    document.querySelectorAll("button").forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });
    document.querySelectorAll("img").forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });

    requestAnimationFrame(() => skewScrolling());
  });

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollContainer.current.style.transform = `skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <div className="cursor"></div>
      <div ref={gallery} className="gallerycon">
        <NavBar navTitle="Gallery" />
        <div ref={scrollContainer} className="inner">
          {Data.map((d, index) => (
            <GalleryCards key={index} image={d.image} title={d.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Gallery };
