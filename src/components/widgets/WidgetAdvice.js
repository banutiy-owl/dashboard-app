import React, { useState, useEffect, useContext } from "react";
import Widget from "@/components/Widget";
import { LanguageContext } from "@/app/layout";

const WidgetAdvice = (props) => {
  const { t } = useContext(LanguageContext);
  const [randomAdvice, setRandomAdvice] = useState(null);

  useEffect(() => {
    fetch(`/data/dashboard_${props.username}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then((data) => {
        const adviceWidget = data.dashboard.widgets.find(
          (widget) => widget.id === "advice"
        );
        if (adviceWidget) {
          const randomIndex = Math.floor(
            Math.random() * adviceWidget.advices.length
          );
          setRandomAdvice(adviceWidget.advices[randomIndex]);
        }
      })
      .catch((error) => {
        console.error("Error fetching advice data:", error);
      });
  }, [props.username]);

  return (
    <div className="widgetAdvice">
      <Widget title={t.widgetAdvice}>
        {randomAdvice && <p>{randomAdvice.text}</p>}
      </Widget>
    </div>
  );
};

export default WidgetAdvice;
