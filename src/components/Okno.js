import React from "react";
import "../styles/modal_styles.css";

const Okno = ({ onClose, title, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Okno;
