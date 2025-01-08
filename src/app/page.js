"use client";
import React, { useContext } from "react";
import { LanguageContext } from "./layout";
import Widget from "@/components/Widget";
import "./globals.css";

export default function HomePage() {
  const { t } = useContext(LanguageContext);

  return (
    <main className="dashboard">
      <div className="widgets">
        <div className="cssPortalGrid">
          <div className="div1">
            <Widget title={t.salesQuality}>
              <div className="widgetSales">
                <div className="scoreCategory">
                  <div className="score">
                    <p className="mid-heading quality-name score-name">
                      {t.score}
                    </p>
                    <p className="quality-val score-val">27/60</p>
                  </div>
                  <div className="category">
                    <p className="mid-heading quality-name category-name">
                      {t.category}
                    </p>
                    <p className="quality-val category-val">Weak</p>
                  </div>
                </div>

                <hr className="divider" />

                <h4 className="mid-heading">{t.worstAspects}:</h4>
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
            </Widget>
          </div>

          <div className="div5">
            <Widget title={t.orders}>
              <div className="orders">
                <div className="orders-square">
                  <p>
                    {t.unpaid}: <span className="orders-val">3</span>
                  </p>
                </div>
                <div className="orders-square">
                  <p>
                    {t.unshipped}: <span className="orders-val">5</span>
                  </p>
                </div>
                <div className="orders-square">
                  <p>
                    {t.returns}: <span className="orders-val">4</span>
                  </p>
                </div>
              </div>
            </Widget>
          </div>

          <div className="div2">
            <Widget title={t.ranking}>
              <div className="widgetRanking">
              <div className="dropdownFilter">
                  <label htmlFor="filter">{t.filter}</label>
                  <select id="filter">
                    <option>{t.all}</option>
                    <option>{t.positive}</option>
                    <option>{t.negative}</option>
                  </select>
                </div>
                <table className="reviewsTable">
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
                      <td className="rev-table rev-val">★★★★☆</td>
                      <td className="rev-table rev-val">
                        Lorem ipsum 
                      </td>
                    </tr>
                    <tr>
                      <td className="rev-table rev-val">Client B</td>
                      <td className="rev-table rev-val">★★☆☆☆</td>
                      <td className="rev-table rev-val">
                        Not satisfied 
                      </td>
                    </tr>
                    <tr>
                      <td className="rev-table rev-val">Client B</td>
                      <td className="rev-table rev-val">★★☆☆☆</td>
                      <td className="rev-table rev-val">
                        Not satisfied 
                      </td>
                    </tr>
                    <tr>
                      <td className="rev-table rev-val">Client B</td>
                      <td className="rev-table rev-val">★★☆☆☆</td>
                      <td className="rev-table rev-val">
                        Not satisfied 
                      </td>
                    </tr>
                    <tr>
                      <td className="rev-table rev-val">Client B</td>
                      <td className="rev-table rev-val">★★☆☆☆</td>
                      <td className="rev-table rev-val">
                        Not satisfied 
                      </td>
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
                  <label htmlFor="filter">{t.filter}</label>
                  <select id="filter">
                    <option>{t.all}</option>
                    <option>{t.positive}</option>
                    <option>{t.negative}</option>
                  </select>
                </div>
                <h4 className="tableName">{t.reviewsTable}</h4>
                <table className="reviewsTable">
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
                      <td className="rev-table rev-val">★★★★☆</td>
                      <td className="rev-table rev-val">
                        Lorem ipsum 
                      </td>
                    </tr>
                    <tr>
                      <td className="rev-table rev-val">Client B</td>
                      <td className="rev-table rev-val">★★☆☆☆</td>
                      <td className="rev-table rev-val">
                        Not satisfied 
                      </td>
                    </tr>
                    <tr>
                      <td className="rev-table rev-val">Client B</td>
                      <td className="rev-table rev-val">★★☆☆☆</td>
                      <td className="rev-table rev-val">
                        Not satisfied 
                      </td>
                    </tr>
                    <tr>
                      <td className="rev-table rev-val">Client B</td>
                      <td className="rev-table rev-val">★★☆☆☆</td>
                      <td className="rev-table rev-val">
                        Not satisfied 
                      </td>
                    </tr>
                    <tr>
                      <td className="rev-table rev-val">Client B</td>
                      <td className="rev-table rev-val">★★☆☆☆</td>
                      <td className="rev-table rev-val">
                        Not satisfied 
                      </td>
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
                  <img
                    src="/chart.png"
                    className="chart-image"
                    height="250"
                    alt="Logo"
                  />
                </div>
                <div className="chart-options">
                  <div>
                    Measure:{" "}
                    <div className="dropdownFilter">
                      <label htmlFor="filter">{t.filter}</label>
                      <select id="filter">
                        <option>{t.all}</option>
                        <option>{t.positive}</option>
                        <option>{t.negative}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    Time Range:{" "}
                    <div className="dropdownFilter">
                      <label htmlFor="filter">{t.filter}</label>
                      <select id="filter">
                        <option>{t.all}</option>
                        <option>{t.positive}</option>
                        <option>{t.negative}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    Presentation:{" "}
                    <div className="dropdownFilter">
                      <label htmlFor="filter">{t.filter}</label>
                      <select id="filter">
                        <option>{t.all}</option>
                        <option>{t.positive}</option>
                        <option>{t.negative}</option>
                      </select>
                    </div>
                  </div>
                  <label>
                    <input type="checkbox" /> {t.previousData}
                  </label>
                </div>
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </main>
  );
}
