import React from "react";
import "../../styles/modal_styles.css";
import Okno from "@/components/Okno";

const OknoReviews = ({ onClose, title }) => {
  return (
    <div className="oknoReviews">
      <Okno title={title} onClose={onClose}>
        <p>Reviews details will be displayed here.</p>
      </Okno>
    </div>
  );
};

export default OknoReviews;
