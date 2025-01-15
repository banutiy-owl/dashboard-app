"use client";
import React, { useContext } from "react";
import WidgetSales from "@/components/widgets/WidgetSales";
import WidgetOrders from "@/components/widgets/WidgetOrders";
import WidgetRanking from "@/components/widgets/WidgetRanking";
import WidgetReviews from "@/components/widgets/WidgetReviews";
import WidgetChart from "@/components/widgets/WidgetChart";
import WidgetAdvice from "@/components/widgets/WidgetAdvice";
import Header from "@/components/Header";

import "../globals.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="dashboard widgets siatkaGrid">
        <WidgetSales />
        <WidgetOrders username="weronika"/>
        <WidgetRanking username="weronika"/>
        <WidgetReviews username="weronika"/>
        <WidgetChart username="weronika"/>
        <WidgetAdvice/>
      </div>
    </div>
  );
}
