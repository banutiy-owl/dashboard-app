import React from "react";
import "../styles/widget.css";

const Widget = ({ title, children, onClick }) => {
  return (
    <div className="widget">
      <h2 className="widget-title" onClick={onClick}>
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Widget;
