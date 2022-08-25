import React from "react";

function ExtensionTaskModal(props) {





  return (
    <div className="ExtensionTaskModal" onClick={() => props.close()}>
        {props.location} on {props.informationObject?.daily[props.index].date.toLocaleString()}
      <span>
        Day time temperature:{" "}
        {props.informationObject?.daily[props.index].temp.day.toFixed(0)}{" "}
        <span>&#176;</span>{" "}
      </span>
      <span>
        Evening temperature:{" "}
        {props.informationObject?.daily[props.index].temp.eve.toFixed(0)}{" "}
        <span>&#176;</span>{" "}
      </span>
      <span>
        Max temperature: {props.informationObject?.daily[props.index].temp.max.toFixed(0)}{" "}
        <span>&#176;</span>{" "}
      </span>
      <span>
        Minimum temperature:{" "}
        {props.informationObject?.daily[props.index].temp.min.toFixed(0)}{" "}
        <span>&#176;</span>{" "}
      </span>
      <span>
        Morning temperature:{" "}
        {props.informationObject?.daily[props.index].temp.morn.toFixed(0)}{" "}
        <span>&#176;</span>{" "}
      </span>
      <span>
        Night time temperature:{" "}
        {props.informationObject?.daily[props.index].temp.night.toFixed(0)}{" "}
        <span>&#176;</span>{" "}
      </span>
    </div>
  );
}

export default ExtensionTaskModal;
