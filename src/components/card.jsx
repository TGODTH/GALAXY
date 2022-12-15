import React from "react";

const Card = (props, ref) => {
  return (
    <a
      ref={ref}
      href={props.link}
      rel="noreferrer"
      target="_blank"
      className="card"
      data-animatetype={props.animatetype}
    >
      <div className="card-header">
        <img className="card-svg" src={props.pic} alt="" />
        <h3>{props.title}</h3>
      </div>
      <p className="card text-left">{props.description}</p>
    </a>
  );
};
export default React.forwardRef(Card);
