"use client";
import React, { useContext } from "react";
import { LanguageContext } from "@/app/layout";
import WidgetSales from "@/components/widgets/WidgetSales";
import WidgetOrders from "@/components/widgets/WidgetOrders";
import WidgetRanking from "@/components/widgets/WidgetRanking";
import WidgetReviews from "@/components/widgets/WidgetReviews";
import WidgetChart from "@/components/widgets/WidgetChart";
import WidgetAdvice from "@/components/widgets/WidgetAdvice";
import Header from "@/components/Header";

import "../globals.css";

export default function HomePage() {
  const { currentAccount } = useContext(LanguageContext);
  return (
    <div>
      <Header />
      <div className="dashboard widgets siatkaGrid">
        <WidgetSales username={currentAccount.toLowerCase()} />
        <WidgetOrders username={currentAccount.toLowerCase()} />
        <WidgetRanking username={currentAccount.toLowerCase()} />
        <WidgetReviews username={currentAccount.toLowerCase()} />
        <WidgetChart username={currentAccount.toLowerCase()} />
        <WidgetAdvice username={currentAccount.toLowerCase()} />
      </div>
    </div>
  );
}
