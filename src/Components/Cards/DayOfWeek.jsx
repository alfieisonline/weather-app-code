import React, { useEffect, useState } from "react";
import styles from "./DayOfWeekStyles.css";

function DayOfWeek({ Day, temp, img, date, text, windSpeed }) {
  if (!Day) {
    return;
  }

  return (
    <div className="DayOfWeekCard">
      <div className="DayOfWeekCardDayTitle">{Day}</div>
      <div className="DayOfWeekDate">
        {" "}
        {date.toLocaleString().split(",").splice(0, 1)}
      </div>
      <span style={{ fontSize: "12px" }}>
        {" "}
        wind: {windSpeed.toFixed(0)} mph
      </span>
      <div className="minMax">
        <span>
          Min: {temp.min.toFixed(0)}
          <span>&#176;</span>
        </span>{" "}
        <span>
          Max: {temp.max.toFixed(0)}
          <span>&#176;</span>
        </span>
      </div>
      <img src={`http://openweathermap.org/img/w/${img}.png`} alt="" />
      <div className="DayOfWeekCardTemperature">
        {temp.day.toFixed(0)} <span>&#176;</span>{" "}
        <span style={{ fontSize: "12px" }}> {text}</span>
      </div>
    </div>
  );
}

export default DayOfWeek;
