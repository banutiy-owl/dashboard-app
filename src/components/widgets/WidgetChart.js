import React, { useContext, useState } from "react";
import Widget from "@/components/Widget";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import OknoChart from "@/components/okna/OknoChart";
import { LanguageContext } from "@/app/layout";

const WidgetChart = (props) => {
  const { t } = useContext(LanguageContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="widgetChart" >
      <Widget title={t.salesChart} onClick={openModal}>
        <div className="chart-container">
          <div className="chart">
            <BarChart />
          </div>
          <div className="chart-options">
            <div className="dropdownFilter">
              <label htmlFor="filter">{t.chartMeasure}:</label>
              <select id="filter">
                <option>{t.soldItems}</option>
                <option>{t.turnover}</option>
              </select>
            </div>
            <div className="dropdownFilter">
              <label htmlFor="filter">{t.chartTimePeriod}:</label>
              <select id="filter">
                <option>{t.today}</option>
                <option>{t.week}</option>
                <option>{t.month}</option>
              </select>
            </div>
            <div className="dropdownFilter">
              <label htmlFor="filter">{t.chartPresentationMethod}:</label>
              <select id="filter">
                <option>{t.barChart}</option>
                <option>{t.lineChart}</option>
              </select>
            </div>
            <label className="checkbox-label">
              <input type="checkbox" /> {t.previousData}
              <span className="checkbox-container"></span>
            </label>
          </div>
        </div>
      </Widget>
      {isModalOpen && <OknoChart onClose={closeModal} title={t.salesChart}/>}
    </div>
  );
};

export default WidgetChart;
