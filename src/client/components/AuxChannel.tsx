import React, { useState } from "react";
import { AuxChannelProps } from "../client/types";

const AuxChannel = ({
  metric,
  min,
  max,
  defaultValue,
  possValues,
  currMetrics,
  setMetrics
}: AuxChannelProps) => {
  const [auxVal, setAuxVal] = useState<string>(possValues[defaultValue - min]);
  
  const handleSliderInput = (e): void => {
    const val: string = e.target?.value;
    setAuxVal(possValues[parseInt(val) - min]);
  }
  const handleSliderChange = (e): void => {
    const val: string = e.target?.value;
    setMetrics({
      ...currMetrics,
      [metric]: parseInt(val)
    });
  }

  return (
    <div id={metric} className="aux-channel relative mb-6">
      <label htmlFor={metric + "-slider"}>{metric}: {auxVal}</label>
      <input
        id={metric + "-slider"}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        onInput={handleSliderInput}
        onChange={handleSliderChange}
        className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  )
};

export default AuxChannel;