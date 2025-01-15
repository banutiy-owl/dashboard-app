import React from "react";
import "../../styles/modal_styles.css";
import Okno from "@/components/Okno";

const OknoOrders = ({ onClose, title }) => {
  return (
    <div className="oknoOrders">
      <Okno title={title} onClose={onClose}>
        <p>Order details will be displayed here.</p>
      </Okno>
    </div>
  );
};

export default OknoOrders;
