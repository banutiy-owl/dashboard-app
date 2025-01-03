import React from "react";
import "../styles/widget.css";

const Widget = ({ title, children }) => {
  return (
    <div className="widget">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Widget;
