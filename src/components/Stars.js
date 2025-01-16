import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ score }) => {
  return (
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          style={{
            color: index < score ? "#eda011" : "#b3b3b3",
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
