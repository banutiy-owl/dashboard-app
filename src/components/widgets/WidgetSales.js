import React, { useContext, useState, useEffect } from "react";
import Widget from "@/components/Widget";
import Tile from "@/components/Tile";
import OknoSales from "@/components/okna/OknoSales";
import { LanguageContext } from "@/app/layout";

const WidgetSales = (props) => {
  const { t } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [salesData, setSalesData] = useState([]);
  const [worstAspects, setWorstAspects] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch(`/data/dashboard_${props.username}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then((data) => {
        const salesWidget = data.dashboard.widgets.find(
          (widget) => widget.id === "sales"
        );
        if (salesWidget) {
          setSalesData(salesWidget.aspects);
        }
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
      });
  }, [props.username]);

  useEffect(() => {
    if (salesData.length > 0) {
      const sortedAspects = [...salesData].sort(
        (a, b) => a.value / a.weight - b.value / b.weight
      );
      console.log(sortedAspects);
      setWorstAspects(sortedAspects.slice(0, 3));
      console.log(worstAspects);
    }
  }, [salesData]);

  return (
    <div className="widgetSales">
      <Widget title={t.salesQuality} onClick={openModal}>
        <div className="widget-sales">
          <div className="tiles-sales-section">
            <div className="score">
              <Tile
                title={t.score}
                value={`${salesData.reduce(
                  (total, item) => total + (item.value || 0),
                  0
                )}/${salesData.reduce(
                  (total, item) => total + (item.weight || 0),
                  0
                )}`}
                width="110px"
                height="80px"
              />
            </div>
            <div className="category">
              <Tile
                title={t.category}
                value={
                  salesData.reduce(
                    (total, item) => total + (item.value || 0),
                    0
                  ) < 30
                    ? t.weak
                    : salesData.reduce(
                        (total, item) => total + (item.value || 0),
                        0
                      ) >= 30 &&
                      salesData.reduce(
                        (total, item) => total + (item.value || 0),
                        0
                      ) < 40
                    ? t.average
                    : salesData.reduce(
                        (total, item) => total + (item.value || 0),
                        0
                      ) >= 40 &&
                      salesData.reduce(
                        (total, item) => total + (item.value || 0),
                        0
                      ) < 50
                    ? t.good
                    : salesData.reduce(
                        (total, item) => total + (item.value || 0),
                        0
                      ) >= 50 &&
                      salesData.reduce(
                        (total, item) => total + (item.value || 0),
                        0
                      ) < 55
                    ? t.veryGood
                    : t.excellent
                }
                width="110px"
                height="80px"
              />
            </div>
          </div>
          <div className="sales-table">
            <h4 className="mid-heading sales-heading">{t.worstAspects}:</h4>
            <table className="invisibleTable">
              <tbody>
                {worstAspects.map((aspect, index) => (
                  <tr key={index}>
                    <td>{t[aspect.id]}</td>
                    <td>
                      {aspect.value}/{aspect.weight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Widget>
      {isModalOpen && <OknoSales onClose={closeModal} title={t.salesQuality} />}
    </div>
  );
};

export default WidgetSales;
