import React, { useState, useEffect } from "react";
import {
  Home,
  Profile,
  Contact,
  Article,
  Gallery,
  Cursor,
  NavBar2,
} from "components";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap/dist/gsap";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/profile", name: "Profile", Component: Profile },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/articles", name: "Article", Component: Article },
  { path: "/gallery", name: "Gallery", Component: Gallery },
];

function App() {
  const [transitionState, setTransitionState] = useState(false);

  useEffect(() => {
    // let cursorPick = document.querySelector(".cursor");
    // const cursor = new Cursor(cursorPick);
    // document.querySelectorAll("a").forEach((link) => {
    //   link.addEventListener("mouseenter", () => cursor.enter());
    //   link.addEventListener("mouseleave", () => cursor.leave());
    // });
    // document.querySelectorAll("button").forEach((link) => {
    //   link.addEventListener("mouseenter", () => cursor.enter());
    //   link.addEventListener("mouseleave", () => cursor.leave());
    // });
    // document.querySelectorAll("img").forEach((link) => {
    //   link.addEventListener("mouseenter", () => cursor.enter());
    //   link.addEventListener("mouseleave", () => cursor.leave());
    // });
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

  // const onEnter = (node) => {
  //   gsap.from(
  //     [node.children[0].firstElementChild, node.children[0].lastElementChild],
  //     0.6,
  //     {
  //       y: 30,
  //       delay: 0.6,
  //       ease: "power3.InOut",
  //       opacity: 0,
  //       stagger: {
  //         amount: 0.6,
  //       },
  //     }
  //   );
  // };

  // const onExit = (node) => {
  //   gsap.to(
  //     [node.children[0].firstElementChild, node.children[0].lastElementChild],
  //     0.6,
  //     {
  //       y: -30,
  //       ease: "power3.InOut",
  //       stagger: {
  //         amount: 0.2,
  //       },
  //     }
  //   );
  // };
  return (
    <>
      <>
        {/* <NavBar /> */}
        {/* <Contact /> */}
        {/* <Profile /> */}
        {/* <LandingLoader /> */}
        {/* <GalleryLoader /> */}
        {/* <Home /> */}
      </>
      <>
        <BrowserRouter>
          {/* <div className="cursor">
            <div className="cursor__inner"></div>
          </div> */}
          {/* <NavBar2 /> */}
          <Routes>
            {/* {routes.map(({ path, Components }) => (
              <Route key={path} path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={1200}
                    classNames="page"
                    // onExit={onExit}
                    // onEntering={onEnter}
                    // unmountOnExit
                  >
                    <div className="page">
                      <Components />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))} */}
            {routes.map(({ path, Component }) => {
              const PageComponent = (
                <CSSTransition
                  in={transitionState}
                  timeout={1200}
                  classNames="page"
                  // onExit={onExit}
                  // onEntering={onEnter}
                  // unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              );
              return (
                <Route key={path} path={path} element={PageComponent} exact />
              );
            })}
            {/* <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Article />} />
            <Route path="/gallery" element={<Gallery />} /> */}
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
