import React, { useState } from "react";
import MetricChannel from "./MetricChannel";
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
      <MetricChannel 
        metric="acousticness"
        min={0}
        max={1}
        defaultValue={0}
        step={0.01}
        maxEmoji="🏞️"
        minEmoji="🏙️"
      />
      <MetricChannel 
        metric="danceability"
        min={0}
        max={1}
        defaultValue={0.5}
        step={0.01}
        maxEmoji="🥳"
        minEmoji="😐"
      />
      <MetricChannel 
        metric="energy"
        min={0}
        max={1}
        defaultValue={0.6}
        step={0.01}
        maxEmoji="🔋"
        minEmoji="🪫"
      />
      <MetricChannel 
        metric="instrumentalness"
        min={0}
        max={1}
        defaultValue={0.5}
        step={0.01}
        maxEmoji="🎺"
        minEmoji="🎙️"
      />
      <MetricChannel 
        metric="mode"
        min={0}
        max={1}
        defaultValue={0.5}
        step={0.01}
        maxEmoji="🦸‍♂️"
        minEmoji="🦹‍♀️"
      />
      <MetricChannel 
        metric="liveness"
        min={0}
        max={1}
        defaultValue={0.2}
        step={0.01}
        maxEmoji="🎫"
        minEmoji="🎧"
      />
      <MetricChannel 
        metric="speechiness"
        min={0}
        max={1}
        defaultValue={0.33}
        step={0.01}
        maxEmoji="🗣️"
        minEmoji="🎶"
      />
      <MetricChannel 
        metric="valence"
        min={0}
        max={1}
        defaultValue={0.5}
        step={0.01}
        maxEmoji="🥹"
        minEmoji="🥺"
      />
      <MetricChannel 
        metric="loudness"
        min={-60}
        max={0}
        defaultValue={-25}
        step={1}
        maxEmoji="💥"
        minEmoji="🦗"
      />
      <MetricChannel 
        metric="tempo"
        min={0}
        max={240}
        defaultValue={120}
        step={1}
        maxEmoji="🚀"
        minEmoji="🐌"
      />
    </div>
  )
}

export default MetricsMixer;