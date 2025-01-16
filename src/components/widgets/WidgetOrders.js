import React, { useState, useContext, useEffect } from "react";
import Widget from "@/components/Widget";
import Tile from "@/components/Tile";
import OknoOrders from "@/components/okna/OknoOrders";
import { LanguageContext } from "@/app/layout";

const WidgetOrders = (props) => {
  const { t } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    fetch(`/data/dashboard_${props.username}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then((data) => {
        const ordersWidget = data.dashboard.widgets.find(
          (widget) => widget.id === "orders"
        );
        if (ordersWidget) {
          setOrderData(ordersWidget.tiles);
        }
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, [props.username]);

  const openModal = (title) => {
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTitle("");
  };
  return (
    <div className="widgetOrders">
      <Widget title={t.orders}>
        <div className="orders">
          {orderData &&
            orderData.map((tile) => (
              <Tile
                key={tile.id}
                title={t[tile.id]}
                value={tile.value}
                width="110px"
                height="110px"
                onClick={() => openModal(tile.title)}
              />
            ))}
        </div>
      </Widget>
      {isModalOpen && <OknoOrders onClose={closeModal} title={selectedTitle} />}
    </div>
  );
};

export default WidgetOrders;
