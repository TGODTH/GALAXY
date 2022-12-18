import "./main.css";
import arrow_right from "../pic/arrow_right.svg";
import Header from "./header";
import "./animation.css";
import Info from "./info";
import GetMix from "./getMix";

const Main = () => {
  return (
    <>
      <Header
        title="UniverseChain<br/>Liquidity Lab"
        description="Swap, earn, and build on the leading decentralized moon exchange."
        side="text-center"
      />
      <a href="https://app.osmosis.zone/" className="launch-app-container hover-color fade-in">
        <strong className="launch-app-text">LAUNCH APP</strong>
        <img
          className="arrow arrow-launch"
          src={arrow_right}
          alt="arrow point to right"
        ></img>
      </a>
      <Info />
      <GetMix />
    </>
  );
};
export default Main;
