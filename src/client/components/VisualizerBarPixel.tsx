import React from "react";

const VisualizerBarPixel = ({ height }) => {
  const color: string = `hsl(0, 100%, ${70 - (height * 30)}%`;
  
  return (
    <div className="pixel" style={{
      backgroundColor: color
    }}></div>
  );
}

export default VisualizerBarPixel;