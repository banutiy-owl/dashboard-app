import React, { useContext } from "react";
import Widget from "@/components/Widget";
import { LanguageContext } from "@/app/layout";

const WidgetAdvice = (props) => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="widgetAdvice">
            <Widget title={t.widgetAdvice}>
              <p>
                Wykorzystaj promocje i rabaty, aby przyciągnąć nowych klientów i
                zwiększyć sprzedaż.
              </p>
            </Widget>
          </div>
  );
};

export default WidgetAdvice;
