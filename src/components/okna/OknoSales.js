import React from "react";
import "../../styles/modal_styles.css";
import Okno from "@/components/Okno";

const OknoSales = ({ onClose, title }) => {
  return (
    <div className="oknoSales">
      <Okno title={title} onClose={onClose}>
        <p>Sales details will be displayed here.</p>
      </Okno>
    </div>
  );
};

export default OknoSales;
