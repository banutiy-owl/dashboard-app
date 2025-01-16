import React from "react";

const RankingRow = ({ item, sortMethod, t }) => {
  return (
    <tr>
      <td className="rank-table rank-val">
        <img
          src={`/${item.photo}`}
          alt={item.name}
          style={{
            width: "3em",
            height: "3em",
            verticalAlign: "middle",
          }}
        />
      </td>
      <td className="rank-table rank-val">{item.name}</td>
      <td className="rank-table rank-val">{item.soldItems}</td>
      <td className="rank-table rank-val">
        {sortMethod === "mostFreqPurchased" ? item.turnover : item.viewsCount}
      </td>
    </tr>
  );
};

export default RankingRow;
