import React from "react";

const AuxChannel = ({
  metric,
  min,
  max,
  defaultValue,
}) => {

  return (
    <div id={metric} className="aux-channel">
      <label htmlFor={metric + "-slider"}>{metric}</label>
      <input
        id={metric + "-slider"}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  )
};

export default AuxChannel;