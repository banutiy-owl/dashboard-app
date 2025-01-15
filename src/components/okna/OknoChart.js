import React from "react";
import "../../styles/modal_styles.css";
import Okno from "@/components/Okno";

const OknoChart = ({ onClose, title }) => {
  return (
    <div className="oknoChart">
      <Okno title={title} onClose={onClose}>
        <p>Chart details will be displayed here.</p>
      </Okno>
    </div>
  );
};

export default OknoChart;
