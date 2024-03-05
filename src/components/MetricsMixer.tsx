import React from "react";

const MetricsMixer = () => {

  return (
    <div id="mixer">
      <div id="danceability" className="channel">
        <label htmlFor="default-range">🥳</label>
        <input
          id="default-range"
          type="range"
          min="0"
          max="1"
          defaultValue="0.1"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="default-range">😐</label>
      </div>
      <div id="energy" className="channel">
        <label htmlFor="default-range">🔋</label>
        <input
          id="default-range"
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="default-range">🪫</label>
      </div>
      <div id="instrumentalness" className="channel">
        <label htmlFor="default-range">🎺</label>
        <input
          id="default-range"
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="default-range">🎙️</label>
      </div>
      <div id="mode" className="channel">
        <label htmlFor="default-range">🦸‍♂️</label>
        <input
          id="default-range"
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="default-range">🦹‍♀️</label>
      </div>
      <div id="liveness" className="channel">
        <label htmlFor="default-range">🤸‍♀️</label>
        <input
          id="default-range"
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="default-range">🧟‍♂️</label>
      </div>
      <div id="speechiness" className="channel">
        <label htmlFor="default-range">🗣️</label>
        <input
          id="default-range"
          type="range"
          min="0"
          max="1"
          defaultValue="0.33"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="default-range">🎶</label>
      </div>
      <div id="valence" className="channel">
        <label htmlFor="default-range">🥹</label>
        <input
          id="default-range"
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="default-range">🥺</label>
      </div>
      <div id="loudness" className="channel">
        <label htmlFor="default-range">💥</label>
        <input
          id="default-range"
          type="range"
          min="-60"
          max="0"
          defaultValue="-25"
          step="1"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="default-range">🦗</label>
      </div>
      <div id="tempo" className="channel">
        <label htmlFor="default-range">🚀</label>
        <input
          id="default-range"
          type="range"
          min="0"
          max="240"
          defaultValue="120"
          step="1"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="default-range">🐌</label>
      </div>
    </div>

  )
}

export default MetricsMixer;