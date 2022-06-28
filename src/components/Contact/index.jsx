import React, { useEffect } from "react";
import { IG, Twitter } from "assets";
import { Cursor } from "components/General Component";
import { NavBar, NavBar2 } from "components/General Component";
import "./styles.scss";

const Contact = () => {
  useEffect(() => {
    let cursorPick = document.querySelector(".cursor");
    const cursor = new Cursor(cursorPick);

    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });

    // document.getElementById("hamburger").forEach((link) => {
    //   link.addEventListener("mouseenter", () => cursor.enter());
    //   link.addEventListener("mouseleave", () => cursor.leave());
    // });

    // let nav = document.getElementById("hamburger");

    // nav.addEventListener("mouseenter", () => cursor.enter());
    // nav.addEventListener("mouseleave", () => cursor.leave());

    // let links = document.querySelectorAll("li");
    // links.forEach((link) => {
    //   link.addEventListener("mouseenter", () => cursor.enter());
    //   link.addEventListener("mouseleave", () => cursor.leave());
    // });
  });

  return (
    <>
      <div className="cursor"></div>
      <div className="contactcon">
        {/* <NavBar /> */}
        <NavBar2 link1="Kinika" link2="Gallery" link3="Articles" />
        <div className="innercon">
          <div className="top">
            <h1>Contact:</h1>
            <a href="mailto:Alexiekhin@gmail.com">
              <p>Alexiekhin@gmail.com</p>
            </a>
          </div>
          <div className="bottom">
            <div className="botcon">
              <h2>Aleruchi Kinika Photography</h2>
              <div>
                <a>
                  <img src={Twitter} alt="" />
                </a>
                <a>
                  <img src={IG} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Contact };
