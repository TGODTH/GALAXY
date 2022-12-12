import arrow_right from "../pic/arrow_right.svg";
import { splitLine } from "./utilities";

const InfoCard = (props) => {
  return (
    <>
      <h1 className="h1-info">{props.data}</h1>
      <div className="infoLink">
        <strong>{splitLine(props.title)}</strong>
        <img
          className="arrow"
          src={arrow_right}
          alt="arrow point to right"
        ></img>
      </div>
    </>
  );
};
export default InfoCard;
