import React from "react";
import RankingRow from "@/components/ranking/RankingRow";

const RankingTable = ({ sortedData, sortMethod, t }) => {
  return (
    <table className="rankingTable">
      <thead>
        <tr>
          <th className="rank-table rank-name">{t.photo}</th>
          <th className="rank-table rank-name">{t.name}</th>
          <th className="rank-table rank-name">{t.soldItems}</th>
          <th className="rank-table rank-name">
            {sortMethod === "mostFreqPurchased" ? t.turnover : t.viewsCount}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.slice(0, 5).map((item, index) => (
          <RankingRow key={index} item={item} sortMethod={sortMethod} t={t} />
        ))}
      </tbody>
    </table>
  );
};

export default RankingTable;
