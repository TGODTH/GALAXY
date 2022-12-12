import "./main.css";
import arrow_right from "../pic/arrow_right.svg";
import satellite_dish from "../pic/icons/satellite-dish.svg";
import planet_with_flag from "../pic/icons/planet-with-flag.svg";
import robot from "../pic/icons/robot.svg";
import Header from "./header";
import "./animation.css";
import Info from "./info";
import Card from "./card";
import colony from "../pic/colony.svg";
import solar_system from "../pic/icons/solar_system.svg";

const Main = () => {
  return (
    <main className="container">
      <Header
        title="UniverseChain<br/>Liquidity Lab"
        description="Swap, earn, and build on the leading decentralized moon exchange."
        side="text-center"
      />
      <a href="#" className="launch-app-container hover-color fade-in">
        <strong className="launch-app-text">LAUNCH APP</strong>
        <img
          className="arrow arrow-launch"
          src={arrow_right}
          alt="arrow point to right"
        ></img>
      </a>
      <Info />
      <img className="getMix" src={colony} alt="" />
      <div className="getMix-header">
        <h2 className="getMix">
          <img className="card-svg" src={solar_system} alt="" />
          Get mixin'
        </h2>
      </div>
      <div className="card-container">
        <Card
          link="#"
          pic={satellite_dish}
          title="Analyze"
          description="Science bgins with obervation. Dig into charts and data on assets and liquidity."
        />
        <Card
          link="#"
          pic={planet_with_flag}
          title="Govern"
          description="We all steer the ship together. Explore proposals and discuss upcoming experiments."
        />
        <Card
          link="#"
          pic={robot}
          title="Build"
          description="Roll up your sleeves. Build interchain-native apps and smart contracts."
        />
      </div>
    </main>
  );
};
export default Main;
