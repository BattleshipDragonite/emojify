import React, { useState } from "react";
import { Metrics } from "../client/types";

const MetricsMixer = () => {
  const [metrics, setMetrics] = useState<Metrics>({
    acousticness: 1,
    danceability: 1,
    energy: 1,
    instrumentalness: 1,
    liveness: 1,
    loudness: 1,
    mode: 1,
    speechiness: 1,
    tempo: 1,
    valence: 1
  })

  return (
    <div id="mixer">
      <div id="acousticness" className="channel">
        <label htmlFor="acousticness-slider">🏞️</label>
        <input
          id="acousticness-slider"
          type="range"
          min="0"
          max="1"
          defaultValue="0"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="acousticness-slider">🏙️</label>
      </div>
      <div id="danceability" className="channel">
        <label htmlFor="danceability-slider">🥳</label>
        <input
          id="danceability-slider"
          type="range"
          min="0"
          max="1"
          defaultValue="0.1"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="danceability-slider">😐</label>
      </div>
      <div id="energy" className="channel">
        <label htmlFor="energy-slider">🔋</label>
        <input
          id="energy-slider"
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="energy-slider">🪫</label>
      </div>
      <div id="instrumentalness" className="channel">
        <label htmlFor="instrumentalness-slider">🎺</label>
        <input
          id="instrumentalness-slider"
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="instrumentalness-slider">🎙️</label>
      </div>
      <div id="mode" className="channel">
        <label htmlFor="mode-slider">🦸‍♂️</label>
        <input
          id="mode-slider"
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="mode-slider">🦹‍♀️</label>
      </div>
      <div id="liveness" className="channel">
        <label htmlFor="liveness-slider">🎫</label>
        <input
          id="liveness-slider"
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="liveness-slider">🎧</label>
      </div>
      <div id="speechiness" className="channel">
        <label htmlFor="speechiness-slider">🗣️</label>
        <input
          id="speechiness-slider"
          type="range"
          min="0"
          max="1"
          defaultValue="0.33"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="speechiness-slider">🎶</label>
      </div>
      <div id="valence" className="channel">
        <label htmlFor="valence-slider">🥹</label>
        <input
          id="valence-slider"
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="valence-slider">🥺</label>
      </div>
      <div id="loudness" className="channel">
        <label htmlFor="loudness-slider">💥</label>
        <input
          id="loudness-slider"
          type="range"
          min="-60"
          max="0"
          defaultValue="-25"
          step="1"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="loudness-slider">🦗</label>
      </div>
      <div id="tempo" className="channel">
        <label htmlFor="tempo-slider">🚀</label>
        <input
          id="tempo-slider"
          type="range"
          min="0"
          max="240"
          defaultValue="120"
          step="1"
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label htmlFor="tempo-slider">🐌</label>
      </div>
    </div>
  )
}

export default MetricsMixer;