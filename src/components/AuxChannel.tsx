import React from "react";
import { AuxChannelProps } from "../client/types";

const AuxChannel = ({
  metric,
  min,
  max,
  defaultValue,
}: AuxChannelProps) => {

  return (
    <div id={metric} className="aux-channel relative mb-6">
      <label htmlFor={metric + "-slider"}>{metric}</label>
      <input
        id={metric + "-slider"}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">0</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">1</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-3/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-4/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-5/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-6/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-7/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-8/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-9/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-10/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-11/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-12/13 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">3</span>
    </div>
  )
};

export default AuxChannel;