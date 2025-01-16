import React, { useContext, useState, useEffect } from "react";
import Widget from "@/components/Widget";
import OknoReviews from "@/components/okna/OknoReviews";
import { LanguageContext } from "@/app/layout";
import ReviewTable from "@/components/reviews/ReviewTable";
import ReviewFilter from "@/components/reviews/ReviewFilter";

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
          <ReviewFilter
            filterMethod={filterMethod}
            handleFilter={handleFilter}
            t={t}
          />
          <div className="scrollable">
            <ReviewTable filteredReviews={filteredReviews} t={t} />
          </div>
        </div>
      </Widget>
      {isModalOpen && <OknoReviews onClose={closeModal} title={t.reviews} />}
    </div>
  );
};

export default WidgetReviews;
