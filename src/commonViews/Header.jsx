import React from "react";
import commonStyle from "../styles/commonviews.module.css";

function header() {
  return (
    <div className={commonStyle.headerContainer}>
      <div>
        <h1>THE BAND</h1>
        <h3>
          <i>We love music</i>
        </h3>
      </div>
    </div>
  );
}

export default header;
