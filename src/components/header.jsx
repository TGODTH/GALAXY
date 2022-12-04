import "./header.css";
import arrow_right from "../pic/arrow_right.svg";

const Header = () => {
  return (
    <header className="container">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      
      <h1>
        Galaxychain
        <br />
        Liquidity Lab
      </h1>
      <p>Swap, earn, and build on the leading decentralized moon exchange.</p>
      <a href="#" className="launch-app-container link-hover">
        <strong className="launch-app-text">LAUNCH APP</strong>
        <img className="arrow" src={arrow_right}></img>
      </a>
    </header>
  );
};
export default Header;
