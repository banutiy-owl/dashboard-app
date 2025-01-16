import React from "react";

const RankingSort = ({ sortMethod, setSortMethod, t }) => {
  return (
    <div className="dropdownFilter">
      <label className="filter filter-ranking" htmlFor="filter">{t.sortOffers}:</label>
      <select
        id="filter"
        value={sortMethod}
        onChange={(e) => setSortMethod(e.target.value)}
      >
        <option value="mostFreqPurchased">{t.sortMostFreqPurchased}</option>
        <option value="leastFreqPurchased">{t.sortLeastFreqPurchased}</option>
      </select>
    </div>
  );
};

export default RankingSort;
