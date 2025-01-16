import React, { useContext, useState, useEffect } from "react";
import Widget from "@/components/Widget";
import { LanguageContext } from "@/app/layout";
import RankingTable from "@/components/ranking/RankingTable";
import RankingSort from "@/components/ranking/RankingSort";

const WidgetRanking = (props) => {
  const { t } = useContext(LanguageContext);
  const [rankingData, setRankingData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortMethod, setSortMethod] = useState("mostFreqPurchased");

  useEffect(() => {
    fetch(`/data/dashboard_${props.username}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then((data) => {
        const rankingWidget = data.dashboard.widgets.find(
          (widget) => widget.id === "ranking"
        );
        if (rankingWidget) {
          setRankingData(rankingWidget.products);
        }
      })
      .catch((error) => {
        console.error("Error fetching ranking data:", error);
      });
  }, [props.username]);

  useEffect(() => {
    if (rankingData.length > 0) {
      const sorted = [...rankingData].sort((a, b) => {
        if (sortMethod === "mostFreqPurchased")
          return b.soldItems - a.soldItems;
        if (sortMethod === "leastFreqPurchased")
          return a.soldItems - b.soldItems;
        return 0;
      });
      setSortedData(sorted);
    }
  }, [sortMethod, rankingData]);

  return (
    <div className="widgetRanking">
      <Widget title={t.ranking}>
        <RankingSort
          sortMethod={sortMethod}
          setSortMethod={setSortMethod}
          t={t}
        />
        <div className="ranking-scrollable">
          <RankingTable sortedData={sortedData} sortMethod={sortMethod} t={t} />
        </div>
      </Widget>
    </div>
  );
};

export default WidgetRanking;
