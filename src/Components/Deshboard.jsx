import React, { Component } from "react";
import Header from "../commonViews/Header";
import Footer from "../commonViews/Footer";
import { Link as RouteLink } from "react-router-dom";
import Chart from "./Chart";
import DashboardStyle from "../styles/dashboard.module.css";
import BarChart from "./BarChart";
import Doughnut from "./DoughnutChart";
import Table from "./Table";

function deshboard() {
  return (
    <div>
      <Header />
      <h3 className={DashboardStyle.heading}>
        Here are the different charts showing our bookings per month in 2020 &
        2019
      </h3>
      <div className={DashboardStyle.chartContainer}>
        <div className={DashboardStyle.chartItemContainer}>
          <Chart />
        </div>
        <div className={DashboardStyle.chartItemContainer}>
          <BarChart />
        </div>
        <div className={DashboardStyle.chartItemContainer}>
          <Doughnut />
        </div>
      </div>
      <div className={DashboardStyle.chartItemContainer}>
        <Table />
      </div>
      <RouteLink className={DashboardStyle.homeBtn} to="/">
        {"Home"}
      </RouteLink>
      <Footer />
    </div>
  );
}

export default deshboard;
