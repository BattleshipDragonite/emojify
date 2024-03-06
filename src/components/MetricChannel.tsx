import React from "react";
import { ChannelProps } from "../client/types";

const MetricChannel = ({
  metric,
  min,
  max,
  defaultValue,
  step,
  minEmoji,
  maxEmoji
}: ChannelProps) => {

  return (
    <div id={metric} className="channel">
      <label htmlFor={metric + "-slider"}>{maxEmoji}</label>
      <input
        id={metric + "-slider"}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
        className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <label htmlFor={metric + "-slider"}>{minEmoji}</label>
    </div>
  )
};

export default MetricChannel;