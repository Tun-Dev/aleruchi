import React, { useEffect } from "react";
import { ArticleCards, Cursor, NavBar } from "components/General Component";
import { data } from "./data";
import "./styles.scss";

const Article = () => {
  // let cursorRef = useRef(null);
  useEffect(() => {
    let cursorPick = document.querySelector(".cursor");
    const cursor = new Cursor(cursorPick);

    document.querySelectorAll("button").forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });
  });
  return (
    <>
      <div className="cursor"></div>
      <div className="Articlecon">
        {/* <NavBar navTitle="Articles" /> */}
        <div className="inner">
          {data.length > 0 &&
            data.map((word, index) => (
              <ArticleCards
                key={index}
                header={word.header}
                summary={word.summary}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export { Article };
