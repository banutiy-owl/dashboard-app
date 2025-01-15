import React from "react";
import "../../styles/modal_styles.css";
import Okno from "@/components/Okno";

const OknoRanking = ({ onClose, title }) => {
  return (
    <div className="oknoRanking">
      <Okno title={title} onClose={onClose}>
        <p>Ranking details will be displayed here.</p>
      </Okno>
    </div>
  );
};

export default OknoRanking;
