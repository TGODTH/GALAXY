import "./animation.css";
import { splitLine } from "./utilities";

const Header = (props) => {
  return (
    <header>
      <h1 className={props.side + " header-text fade-in-down"}>
        {splitLine(props.title)}
      </h1>
      <p className={props.side + " fade-in-up"}>
        {splitLine(props.description)}
        <br />
        <a
          className={"header-link "}
          href="https://grants.osmosis.zone/"
          rel="noreferrer"
          target="_blank"
        >
          {props.link}
        </a>
      </p>
    </header>
  );
};
export default Header;
