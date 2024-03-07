import React, { useState, useRef } from "react";
import { MetricChannelProps } from "../client/types";

const MetricChannel = ({
  metric,
  min,
  max,
  defaultValue,
  step,
  minEmoji,
  maxEmoji
}: MetricChannelProps) => {
  const [sliderVal, setSliderVal] = useState(step >= 1 ? defaultValue : defaultValue.toFixed(2));

  const handleSliderChange = (e): void => {
    const val: string = e.target?.value;
    setSliderVal(step >= 1 ? val : parseFloat(val).toFixed(2));
  }

  return (
    <div id={metric} className="metric-channel">
      <span>{sliderVal}</span>
      <label htmlFor={metric + "-slider"}>{maxEmoji}</label>
      <input
        id={metric + "-slider"}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
        className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onInput={handleSliderChange}
      />
      <label htmlFor={metric + "-slider"}>{minEmoji}</label>
    </div>
  )
};

export default MetricChannel;