import React from "react";
import VisualizerBar from "./VisualizerBar";

const Display = ({ genre, metrics }) => {
  
  return (
    <div id="display-div">
      <div id="genre-display" className=" text-7xl">
        Genre: {genre}
      </div>
      <div id="visualizer">
        <VisualizerBar color={0} metric="acousticness" metrics={metrics}/>
        <VisualizerBar color={13} metric="danceability" metrics={metrics}/>
        <VisualizerBar color={33} metric="energy" metrics={metrics}/>
        <VisualizerBar color={52} metric="instrumentalness" metrics={metrics}/>
        <VisualizerBar color={92} metric="liveness" metrics={metrics}/>
        <VisualizerBar color={170} metric="speechiness" metrics={metrics}/>
        <VisualizerBar color={231} metric="valence" metrics={metrics}/>
        <VisualizerBar color={266} metric="loudness" metrics={metrics}/>
        <VisualizerBar color={290} metric="tempo" metrics={metrics}/>
      </div>
    </div>
  );
}

export default Display;