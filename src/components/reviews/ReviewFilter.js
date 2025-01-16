import React from "react";

const ReviewFilter = ({ filterMethod, handleFilter, t }) => {
  return (
    <div className="dropdownFilter">
      <label htmlFor="filter">{t.filterReviews}:</label>
      <select
        id="filter"
        value={filterMethod}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="all">{t.all}</option>
        <option value="filterPositive">{t.filterPositive}</option>
        <option value="filterNegative">{t.filterNegative}</option>
      </select>
    </div>
  );
};

export default ReviewFilter;
