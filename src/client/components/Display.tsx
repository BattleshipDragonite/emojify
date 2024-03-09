import React from "react";
import VisualizerBar from "./VisualizerBar";

const Display = ({ genre, metrics }) => {
  
  return (
    <div id="display-div">
      <div id="genre-display" className=" text-7xl">
        Genre: {genre}
      </div>
      <div id="visualizer">
        <VisualizerBar id="aco-viz" metrics={metrics}/>
      </div>
    </div>
  );
}

export default Display;