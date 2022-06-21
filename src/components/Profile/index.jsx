import React from "react";
import "./styles.scss";
import { NavBar } from "components/General Component";
import { User } from "assets";

const Profile = () => {
  return (
    <>
      <div className="profilecon">
        <NavBar navTitle="Profile" />
        <div className="innercon">
          <div className="left">
            <img src={User} alt="" />
          </div>
          <div className="right">
            <h1>Aleruchi Kinika</h1>
            <h5>
              Aleruchi Kinika is a Writer, Nigerian portrait, documentary and
              conceptual photographer. She was propelled into photography and
              writing by her love for the ability to save time and capture
              beauty where peoples’ eyes evade. She ventured into photography in
              2019 and has not lot looked back since. Aleruchi’s work is
              inspired by her love for storytelling, the wild imagination that
              run in her head and her need to express that.{" "}
            </h5>

            <h5>
              Her Affinity for photography and storytelling has pushed to an
              amazing level of dexterity such that her images places her
              audience in her stories. Her love incorporation of surrealism into
              her conceptual photographs leaves the mouth of the viewers gaping
              as the revel in it brilliance. Her images tell diverse stories and
              evoke different emotions and this is credit to her brilliant
              composition and use of the perfect hues and tones.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export { Profile };
