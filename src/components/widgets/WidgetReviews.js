import React, { useContext, useState, useEffect } from "react";
import Widget from "@/components/Widget";
import Stars from "@/components/Stars";
import OknoReviews from "@/components/okna/OknoReviews";
import { LanguageContext } from "@/app/layout";

const WidgetReviews = (props) => {
  const { t } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [filterMethod, setFilterMethod] = useState("all");

  useEffect(() => {
    fetch(`/data/dashboard_${props.username}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then((data) => {
        const reviewsWidget = data.dashboard.widgets.find(
          (widget) => widget.id === "reviews"
        );
        if (reviewsWidget) {
          setReviewsData(reviewsWidget.reviewTable);
          setFilteredReviews(reviewsWidget.reviewTable);
        }
      })
      .catch((error) => {
        console.error("Error fetching reviews data:", error);
      });
  }, [props.username]);

  useEffect(() => {
    handleFilter(filterMethod);
  }, [filterMethod]);

  const handleFilter = (method) => {
    setFilterMethod(method);
    let filtered = [];
    if (method === "filterPositive") {
      filtered = reviewsData.filter((review) => review.score >= 3);
    } else if (method === "filterNegative") {
      filtered = reviewsData.filter((review) => review.score < 3);
    } else {
      filtered = reviewsData;
    }
    setFilteredReviews(filtered);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="widgetReviews">
      <Widget title={t.reviews} onClick={openModal}>
        <div className="widget-reviews">
          <div className="dropdownFilter">
            <label htmlFor="filter">{t.filterReviews}:</label>
            <select
              id="filter"
              onChange={(e) => {
                handleFilter(e.target.value);
              }}
            >
              <option value="all">{t.all}</option>
              <option value="filterPositive">{t.filterPositive}</option>
              <option value="filterNegative">{t.filterNegative}</option>
            </select>
          </div>
          <div className="scrollable">
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
                  <tr key={index}>
                    <td className="rev-table rev-val">{item.client}</td>
                    <td className="rev-table rev-val">
                      <Stars score={item.score} />
                    </td>
                    <td className="rev-table rev-val">{item.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Widget>
      {isModalOpen && <OknoReviews onClose={closeModal} title={t.reviews} />}
    </div>
  );
};

export default WidgetReviews;
