import React from "react";

const Tile = ({ title, value, width, height }) => {
  return (
    <div className="orders-square" style={{ width: width, height: height }}>
      <span>
        <span className="mid-heading tile-heading">{title}</span>{" "}
        <div className="tile-value">
          <span className="orders-val">{value}</span>
        </div>
      </span>
    </div>
  );
};

export default Tile;
