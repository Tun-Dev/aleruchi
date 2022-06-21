import React, { useEffect } from "react";
import "./styles.scss";
import {
  EyesOfTheBaboon,
  Soul,
  WindowsToTheSoul,
  Tradition,
  Rebirth1,
} from "assets";

const Data = [EyesOfTheBaboon, Soul, WindowsToTheSoul, Tradition, Rebirth1];

const LandingLoader = () => {
  //   useEffect(() => {
  //     function displayPics() {
  //       var show = Data[Math.floor(Math.random() * Data.length)];
  //       document.getElementById("image").src = show;
  //     }

  //     setInterval(displayPics, 700);
  //   });

  return (
    <>
      <div className="ll-container">
        <div className="inner-con">
          <img src="" alt="" id="image" />
        </div>
      </div>
    </>
  );
};

export { LandingLoader };
