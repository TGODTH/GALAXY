import "./main.css";
import arrow_right from "../pic/arrow_right.svg";
import Header from "./header";

const Main = () => {
  return (
    <>
      <main className="container">
        <Header
          title="Galaxychain<br/>Liquidity Lab"
          description="Swap, earn, and build on the leading decentralized moon exchange."
          side="text-center"
        />

        <a href="#" className="launch-app-container link-hover">
          <strong className="launch-app-text">LAUNCH APP</strong>
          <img
            className="arrow"
            src={arrow_right}
            alt="arrow point to right"
          ></img>
        </a>
      </main>
    </>
  );
};
export default Main;
