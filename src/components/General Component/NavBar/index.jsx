import React, { useEffect, useState, useRef } from "react";
import "./styles.scss";
import gsap from "gsap/dist/gsap";
import { Link } from "react-router-dom";
// import { Expo } from "gsap/dist/gsap";

const NavBar = ({ navTitle }) => {
  const [active, setActive] = useState(false);
  let bar1 = useRef(null);
  let bar2 = useRef(null);
  let fullpageMenu = useRef(null);
  let fullpageMenuInner = useRef(null);
  let menuBg = useRef(null);

  let word,
    word2,
    word3,
    word4,
    word5,
    word6 = useRef(null);

  useEffect(() => {
    var menuToggle = document.getElementById("menuToggle");

    var menubar = gsap.timeline({ paused: true });

    menubar.to(
      bar1,
      0.5,
      {
        attr: { d: "M8, 2 L2,8" },
        x: 1,
        ease: "Power2.easeInOut",
      },
      "start"
    );
    menubar.to(
      bar2,
      0.5,
      {
        attr: { d: "M8, 8 L2,2" },
        x: 1,
        ease: "Power4.easeInOut",
      },
      "start"
    );
    menubar.reverse();

    var navtl = gsap.timeline({ paused: true });

    navtl.to(fullpageMenu, {
      duration: 1,
      // display: "block",
      height: "100vh",
      opacity: 1,
      ease: "Power4.easeInOut",
    });
    navtl.to(fullpageMenuInner, {
      duration: 0.5,
      display: "flex",
      // height: "100vh",
      // opacity: 1,
      ease: "Power4.easeInOut",
    });
    navtl.to([word, word2, word3, word4, word5, word6], {
      y: "0%",
      duration: 0.7,
      // skewX: 10,
      stagger: {
        each: 0.2,
      },
    });

    navtl.reverse();

    menuToggle.addEventListener("click", () => {
      menubar.reversed(!menubar.reversed());
      navtl.reversed(!navtl.reversed());
    });
  });

  return (
    <>
      <>
        <header className="navcontainer2">
          <div className="wrapper2">
            <div className="navtitle">
              <h4>{navTitle}</h4>
            </div>
            <button className="menu-toggle" id="menuToggle">
              <svg
                viewBox="0 0 12 10"
                className="hamburger"
                height="40px"
                width="40px"
              >
                <path d="M10, 2 L2, 2" ref={(el) => (bar1 = el)}></path>
                <path d="M10, 8 L2, 8" ref={(el) => (bar2 = el)}></path>
              </svg>
            </button>
          </div>
        </header>
        <div className="fullpage-menu" ref={(el) => (fullpageMenu = el)}>
          <div
            className="fullpage-menu-inner"
            ref={(el) => (fullpageMenuInner = el)}
          >
            {/* <div className="menu-bg" ref={(el) => (menuBg = el)}></div> */}
            <nav>
              <ul className="main-menu">
                <li>
                  <Link to="/" ref={(el) => (word = el)}>
                    <span data-clip="Home">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile" ref={(el) => (word2 = el)}>
                    <span data-clip="Kinika">Kinika</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile" ref={(el) => (word3 = el)}>
                    <span data-clip="Gallery">Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/articles" ref={(el) => (word4 = el)}>
                    <span data-clip="Article">Article</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" ref={(el) => (word5 = el)}>
                    <span data-clip="Contact">Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="title">
              <div className="titleinner">
                <h5 ref={(el) => (word6 = el)}>Aleruchi Kinika Photography</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export { NavBar };
