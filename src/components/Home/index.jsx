import React, { useEffect, useRef } from "react";
import { Cursor } from "components/General Component";
import { ikaBG } from "assets";
import "./styles.scss";

const Home = () => {
  // let cursorRef = useRef(null);
  useEffect(() => {
    let cursorPick = document.querySelector(".cursor");
    const cursor = new Cursor(cursorPick);

    document.querySelectorAll("li").forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });

    // let links = document.querySelectorAll("li");
    // links.forEach((link) => {
    //   link.addEventListener("mouseenter", () => cursor.enter());
    //   link.addEventListener("mouseleave", () => cursor.leave());
    // });
  });

  return (
    <>
      <div className="cursor">
        <div className="cursor__inner"></div>
      </div>
      <div className="HomeContainer">
        <div className="innercon">
          <div className="name">
            <h1>
              Aleruchi Kin<span>ika</span>
            </h1>
            <img src={ikaBG} alt="" />
          </div>
          <div className="title">
            <h4>Photographer</h4>
            <h4>Writer</h4>
            <h4>Mother to Boris</h4>
          </div>
          <div className="writeup">
            <h5>
              Stories told through the eyes of the lens a selection of pictures
              around the world
            </h5>
          </div>
          <div className="links">
            <li className="link">PROFILE</li>
            <li className="link">GALLERY</li>
            <li>ARTICLES</li>
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
