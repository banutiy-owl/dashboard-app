import React from "react";

const Tile = (props) => {
  return (
    <div
      className="orders-square"
      style={{ width: props.width, height: props.height }}
      onClick={props.onClick}
    >
      <span>
        <span className="mid-heading tile-heading">{props.title}</span>{" "}
        <div className="tile-value">
          <span className="orders-val">{props.value}</span>
        </div>
      </span>
    </div>
  );
};

export default Tile;
