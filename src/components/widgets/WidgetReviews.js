import React, { useContext, useState } from "react";
import Widget from "@/components/Widget";
import Stars from "@/components/Stars";
import OknoReviews from "@/components/okna/OknoReviews";
import { LanguageContext } from "@/app/layout";

const WidgetReviews = (props) => {
  const { t } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="widgetReviews">
      <Widget title={t.reviews} onClick={openModal}>
        <div className="widget-reviews">
          <div className="dropdownFilter">
            <label htmlFor="filter">{t.filterReviews}:</label>
            <select
              id="filter"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <option>{t.all}</option>
              <option>{t.filterPositive}</option>
              <option>{t.filterNegative}</option>
            </select>
          </div>
          <div className="scrollable">
            <table className="reviewTable">
              <thead>
                <tr>
                  <th className="rev-table rev-name">{t.client}</th>
                  <th className="rev-table rev-name">{t.score}</th>
                  <th className="rev-table rev-name">{t.comment}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="rev-table rev-val">Client A</td>
                  <td className="rev-table rev-val">
                    {" "}
                    <Stars />
                  </td>
                  <td className="rev-table rev-val">Lorem ipsum</td>
                </tr>
                <tr>
                  <td className="rev-table rev-val">Client B</td>
                  <td className="rev-table rev-val">
                    {" "}
                    <Stars />
                  </td>
                  <td className="rev-table rev-val">Lorem ipsum</td>
                </tr>
                <tr>
                  <td className="rev-table rev-val">Client C</td>
                  <td className="rev-table rev-val">
                    {" "}
                    <Stars />
                  </td>
                  <td className="rev-table rev-val">Lorem ipsum</td>
                </tr>
                <tr>
                  <td className="rev-table rev-val">Client D</td>
                  <td className="rev-table rev-val">
                    {" "}
                    <Stars />
                  </td>
                  <td className="rev-table rev-val">Lorem ipsum</td>
                </tr>
                <tr>
                  <td className="rev-table rev-val">Client E</td>
                  <td className="rev-table rev-val">
                    {" "}
                    <Stars />
                  </td>
                  <td className="rev-table rev-val">Lorem ipsum</td>
                </tr>
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
