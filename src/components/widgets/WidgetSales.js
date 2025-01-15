import React, { useContext, useState } from "react";
import Widget from "@/components/Widget";
import Tile from "@/components/Tile";
import OknoSales from "@/components/okna/OknoSales";
import { LanguageContext } from "@/app/layout";

const WidgetSales = (props) => {
  const { t } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  return (
    <div className="widgetSales">
      <Widget title={t.salesQuality} onClick={openModal}> 
        <div className="widget-sales" >
          <div className="tiles-sales-section">
            <div className="score">
              <Tile title={t.score} value="27/60" width="110px" height="80px" />
            </div>
            <div className="category">
              <Tile
                title={t.category}
                value="Słaby"
                width="110px"
                height="80px"
              />
            </div>
          </div>
          <div className="sales-table">
            <h4 className="mid-heading sales-heading">{t.worstAspects}:</h4>
            <table className="invisibleTable">
              <tbody>
                <tr>
                  <td>{t.shipping}</td>
                  <td>2/10</td>
                </tr>
                <tr>
                  <td>{t.price}</td>
                  <td>4/15</td>
                </tr>
                <tr>
                  <td>{t.productQuality}</td>
                  <td>4/10</td>
                </tr>
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
