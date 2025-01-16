import React, { useContext, useState } from "react";
import Widget from "@/components/Widget";
import Chart from "@/components/Chart";
import OknoChart from "@/components/okna/OknoChart";
import { LanguageContext } from "@/app/layout";

const WidgetChart = (props) => {
  const { t } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chartType, setChartType] = useState("bar");
  const [showLastData, setShowLastData] = useState(false);
  const [salesMeasure, setSalesMeasure] = useState("soldItems");
  const [timePeriod, setTimePeriod] = useState("week");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChange = () => {
    setShowLastData((prev) => !prev);
  };

  const handleSalesMeasureChange = (e) => {
    setSalesMeasure(e.target.value);
  };

  const handleTimePeriodChange = (e) => {
    setTimePeriod(e.target.value);
  };

  return (
    <div className="widgetChart">
      <Widget title={t.salesChart} onClick={openModal}>
        <div className="chart-container">
          <div className="chart">
            <Chart
              chartType={chartType}
              showLastData={showLastData}
              salesMeasure={salesMeasure}
              timePeriod={timePeriod}
              t={t}
            />
          </div>
          <div className="chart-options">
            <div className="dropdownFilter chart-dropdown">
              <label htmlFor="measure">{t.chartMeasure}:</label>
              <select
                id="measure"
                value={salesMeasure}
                onChange={handleSalesMeasureChange}
              >
                <option value="soldItems">{t.soldItems}</option>
                <option value="turnover">{t.turnover}</option>
              </select>
            </div>
            <div className="dropdownFilter chart-dropdown">
              <label htmlFor="timePeriod">{t.chartTimePeriod}:</label>
              <select
                id="timePeriod"
                value={timePeriod}
                onChange={handleTimePeriodChange}
              >
                <option value="day">{t.today}</option>
                <option value="week">{t.week}</option>
                <option value="month">{t.month}</option>
              </select>
            </div>
            <div className="dropdownFilter chart-dropdown">
              <label htmlFor="chartType">{t.chartPresentationMethod}:</label>
              <select
                id="chartType"
                value={chartType}
                onChange={(e) => setChartType(e.target.value)}
              >
                <option value="bar">{t.barChart}</option>
                <option value="line">{t.lineChart}</option>
              </select>
            </div>
            <div className="checkbox-label">
              <label>
                <input type="checkbox" onChange={handleCheckboxChange} />
                {t.previousData}
                <span className="checkbox-container"></span>
              </label>
            </div>
          </div>
        </div>
      </Widget>
      {isModalOpen && <OknoChart onClose={closeModal} title={t.salesChart} />}
    </div>
  );
};

export default WidgetChart;
