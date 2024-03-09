import React from "react";

const VisualizerBarPixel = ({ color, height }) => {
  const calculatedColor: string = `hsl(${color}, 100%, ${70 - (height * 30)}%`;
  
  return (
    <div className="pixel" style={{
      backgroundColor: calculatedColor
    }}></div>
  );
}

export default VisualizerBarPixel;