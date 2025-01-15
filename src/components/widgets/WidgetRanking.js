import React, { useContext, useState, useEffect } from "react";
import Widget from "@/components/Widget";
import OknoRanking from "@/components/okna/OknoRanking";
import { LanguageContext } from "@/app/layout";

const WidgetRanking = (props) => {
  const { t } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="widgetRanking">
      <Widget title={t.ranking} onClick={openModal}>
        <div className="widget-ranking">
          <div className="dropdownFilter">
            <label htmlFor="filter">{t.sortOffers}:</label>
            <select
              id="filter"
              value={sortMethod}
              onChange={(e) => setSortMethod(e.target.value)}
            >
              <option value="mostFreqPurchased">
                {t.sortMostFreqPurchased}
              </option>
              <option value="leastFreqPurchased">
                {t.sortLeastFreqPurchased}
              </option>
            </select>
          </div>
          <div className="scrollable">
            <table className="rankingTable">
              <thead>
                <tr>
                  <th className="rank-table rank-name">{t.photo}</th>
                  <th className="rank-table rank-name">{t.name}</th>
                  <th className="rank-table rank-name">{t.soldItems}</th>
                  <th className="rank-table rank-name">
                    {sortMethod === "mostFreqPurchased"
                      ? t.turnover
                      : t.viewsCount}
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedData.slice(0, 5).map((item, index) => (
                  <tr key={index}>
                    <td className="rank-table rank-val">
                      <img
                        src={`/${item.photo}`}
                        alt={item.name}
                        style={{
                          width: "2em",
                          height: "2em",
                          verticalAlign: "middle",
                        }}
                      />
                    </td>
                    <td className="rank-table rank-val">{item.name}</td>
                    <td className="rank-table rank-val">{item.soldItems}</td>
                    <td className="rank-table rank-val">
                      {sortMethod === "mostFreqPurchased"
                        ? item.turnover
                        : item.viewsCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Widget>
      {isModalOpen && <OknoRanking onClose={closeModal} title={t.ranking} />}
    </div>
  );
};

export default WidgetRanking;
