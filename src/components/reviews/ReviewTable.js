import React from "react";
import ReviewRow from "@/components/reviews/ReviewRow";

const ReviewTable = ({ filteredReviews, t }) => {
  return (
    <table className="reviewTable">
      <thead>
        <tr>
          <th className="rev-table rev-name">{t.client}</th>
          <th className="rev-table rev-name score-column">{t.score}</th>
          <th className="rev-table rev-name">{t.comment}</th>
        </tr>
      </thead>
      <tbody>
        {filteredReviews.slice(0, 5).map((item, index) => (
          <ReviewRow key={index} item={item} t={t} />
        ))}
      </tbody>
    </table>
  );
};

export default ReviewTable;
