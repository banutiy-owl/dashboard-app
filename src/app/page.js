"use client";
import React, { useContext } from "react";
import { LanguageContext } from "./layout";
import Widget from "@/components/Widget";
import Tile from "@/components/Tile";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import Stars from "@/components/Stars";
import "./globals.css";

export default function HomePage() {
  const { t } = useContext(LanguageContext);

  return (
    <main className="dashboard">
      <div className="widgets">
        <div className="cssPortalGrid">
          <div className="div1">
            <Widget title={t.salesQuality}>
              <div className="widget-sales">
                <div className="tiles-sales-section">
                  <div className="score">
                    <Tile
                      title={t.score}
                      value="27/60"
                      width="110px"
                      height="80px"
                    />
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
          </div>

          <div className="div5">
            <Widget title={t.orders}>
              <div className="orders">
                <Tile title={t.unpaid} value="3" width="110px" height="110px" />
                <Tile
                  title={t.unshipped}
                  value="5"
                  width="110px"
                  height="110px"
                />
                <Tile
                  title={t.returns}
                  value="4"
                  width="110px"
                  height="110px"
                />
              </div>
            </Widget>
          </div>

          <div className="div2">
            <Widget title={t.ranking}>
              <div className="widgetRanking">
                <div className="dropdownFilter">
                  <label htmlFor="filter">{t.sortOffers}:</label>
                  <select id="filter">
                    <option>{t.sortMostFreqPurchased}</option>
                    <option>{t.sortLeastFreqPurchased}</option>
                  </select>
                </div>
                <table className="rankingTable">
                  <thead>
                    <tr>
                      <th className="rank-table rank-name">{t.photo}</th>
                      <th className="rank-table rank-name">{t.name}</th>
                      <th className="rank-table rank-name">{t.soldItems}</th>
                      <th className="rank-table rank-name">{t.turnover}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="rank-table rank-val">
                        <img
                          src={"/black_image.jpg"}
                          alt={"Product photo"}
                          style={{
                            width: "2em",
                            height: "2em",
                            verticalAlign: "middle",
                          }}
                        />
                      </td>
                      <td className="rank-table rank-val">Produkt A</td>
                      <td className="rank-table rank-val">60</td>
                      <td className="rank-table rank-val">100</td>
                    </tr>
                    <tr>
                      <td className="rank-table rank-val">
                        <img
                          src={"/black_image.jpg"}
                          alt={"Product photo"}
                          style={{
                            width: "2em",
                            height: "2em",
                            verticalAlign: "middle",
                          }}
                        />
                      </td>
                      <td className="rank-table rank-val">Produkt A</td>
                      <td className="rank-table rank-val">60</td>
                      <td className="rank-table rank-val">100</td>
                    </tr>
                    <tr>
                      <td className="rank-table rank-val">
                        <img
                          src={"/black_image.jpg"}
                          alt={"Product photo"}
                          style={{
                            width: "2em",
                            height: "2em",
                            verticalAlign: "middle",
                          }}
                        />
                      </td>
                      <td className="rank-table rank-val">Produkt A</td>
                      <td className="rank-table rank-val">60</td>
                      <td className="rank-table rank-val">100</td>
                    </tr>
                    <tr>
                      <td className="rank-table rank-val">
                        <img
                          src={"/black_image.jpg"}
                          alt={"Product photo"}
                          style={{
                            width: "2em",
                            height: "2em",
                            verticalAlign: "middle",
                          }}
                        />
                      </td>
                      <td className="rank-table rank-val">Produkt A</td>
                      <td className="rank-table rank-val">60</td>
                      <td className="rank-table rank-val">100</td>
                    </tr>
                    <tr>
                      <td className="rank-table rank-val">
                        <img
                          src={"/black_image.jpg"}
                          alt={"Product photo"}
                          style={{
                            width: "2em",
                            height: "2em",
                            verticalAlign: "middle",
                          }}
                        />
                      </td>
                      <td className="rank-table rank-val">Produkt A</td>
                      <td className="rank-table rank-val">60</td>
                      <td className="rank-table rank-val">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Widget>
          </div>
          <div className="div3">
            <Widget title={t.reviews}>
              <div className="widgetReviews">
                <div className="dropdownFilter">
                  <label htmlFor="filter">{t.filterReviews}:</label>
                  <select id="filter">
                    <option>{t.all}</option>
                    <option>{t.filterPositive}</option>
                    <option>{t.filterNegative}</option>
                  </select>
                </div>
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
            </Widget>
          </div>
          <div className="div4">
            <Widget title={t.salesChart}>
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
          </div>
          <div className="div6">
            <Widget title={t.widgetAdvice}>
              <p>
                Wykorzystaj promocje i rabaty, aby przyciągnąć nowych klientów i
                zwiększyć sprzedaż.
              </p>
            </Widget>
          </div>
        </div>
      </div>
    </main>
  );
}
