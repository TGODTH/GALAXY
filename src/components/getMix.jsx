import satellite_dish from "../pic/icons/satellite-dish.svg";
import planet_with_flag from "../pic/icons/planet-with-flag.svg";
import robot from "../pic/icons/robot.svg";
import Card from "./card";
import colony from "../pic/colony.svg";
import solar_system from "../pic/icons/solar_system.svg";
import { useEffect, useRef } from "react";
import { observer } from "./utilities";
import { v4 as uuidv4 } from "uuid";

const GetMix = () => {
  const observe_ref = useRef([]);
  const cards_data = [
    {
      link: "https://info.osmosis.zone/",
      pic: satellite_dish,
      title: "Analyze",
      description:
        "Science bgins with obervation. Dig into charts and data on assets and liquidity.",
    },
    {
      link: "https://gov.osmosis.zone/",
      pic: planet_with_flag,
      title: "Govern",
      description:
        "We all steer the ship together. Explore proposals and discuss upcoming experiments.",
    },
    {
      link: "https://docs.osmosis.zone/",
      pic: robot,
      title: "Build",
      description:
        "Roll up your sleeves. Build interchain-native apps and smart contracts.",
    },
  ];
  useEffect(() => {
    observe_ref.current.forEach((card) => {
      observer.observe(card);
      card.classList.add("invisible");
    });
  }, []);
  return (
    <div className="getMix-container flex-col">
      {/* <img className="getMix" src={colony} alt="Cover picture of get mix container" /> */}
      <h2 className="getMix flex">
        <img className="card-svg" src={solar_system} alt="" />
        Get mixin'
      </h2>
      <div className="card-container">
        {cards_data.map((element, index) => {
          return (
            <Card
              key={uuidv4()}
              ref={(el) => (observe_ref.current[index] = el)}
              animatetype="fade-in-up"
              link={element.link}
              pic={element.pic}
              title={element.title}
              description={element.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GetMix;
