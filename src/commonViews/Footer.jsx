import React from "react";
import commonStyle from "../styles/commonviews.module.css";

function footer() {
  return (
    <div className={commonStyle.footerContainer}>
      <div>
        <h1>YOUR DATES</h1>
        <h3>
          <i>Remember to book your tickets!</i>
        </h3>
      </div>
    </div>
  );
}

export default footer;
