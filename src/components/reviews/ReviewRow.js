import React from "react";
import Stars from "@/components/Stars";

const ReviewRow = ({ item, t }) => {
  return (
    <tr>
      <td className="rev-table rev-val">{item.client}</td>
      <td className="rev-table rev-val">
        <Stars score={item.score} />
      </td>
      <td className="rev-table rev-val">{item.comment}</td>
    </tr>
  );
};

export default ReviewRow;
