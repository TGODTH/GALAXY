import React from "react";
import arrow_right from "../pic/arrow_right.svg";
import { splitLine } from "./utilities";

const InfoCard = (props, ref) => {
  return (
    <>
      <a
        ref={ref}
        href={props.link}
        rel="noreferrer"
        target="_blank"
        className="infoCard invisible"
        data-animatetype={props.animatetype}
      >
        <h1 className="h1-info">{props.data}</h1>
        <div className="infoLink">
          <strong>{splitLine(props.title)}</strong>
          <img
            className="arrow"
            src={arrow_right}
            alt="arrow point to right"
          ></img>
        </div>
      </a>
    </>
  );
};
export default React.forwardRef(InfoCard);
