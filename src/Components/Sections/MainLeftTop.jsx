import React from "react";

function MainLeftTop({weatherObject, location}) {
  return (
    <div className="PageContainerTopDesc">
      <span className="PageContainerTopDescHeader">Today in {location}</span>
      <span>{weatherObject?.daily[0].weather[0].description}</span>
      <span>
        Temperatures at a minimun of{" "}
        {weatherObject?.daily[0].temp.min.toFixed(0)} and a maximum of{" "}
        {weatherObject?.daily[0].temp.max.toFixed(0)}
      </span>
      <span>Wind Speeds of {weatherObject?.daily[0].wind_speed} mph</span>
    </div>
  );
}

export default MainLeftTop;
