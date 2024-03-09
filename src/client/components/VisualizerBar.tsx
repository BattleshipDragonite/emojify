import React, { useState, useEffect } from "react";
import VisualizerBarPixel from "./VisualizerBarPixel";
import { metricsOptionObj } from "../../server/utils/emojiDict";

const VisualizerBar = ({ color, metric, metrics}) => {
  const [bar, setBar] = useState<JSX.Element[]>([]);
  useEffect(() => {
    // height must account for metrics that can have negative values (i.e. loudness)
    const height: number = Math.round(
      Math.abs(metrics[metric]) / (metricsOptionObj[metric].max - metricsOptionObj[metric].min) * 10
    ) / 10;
    // const color: string = `hsl(0, 100%, ${70 - (height * 30)}%`;
    console.log(height);
    const divs: JSX.Element[] = [];
    for (let i = 0; i < height * 10; i++) {
      // divs.push(<div className="pixel" style={{
      //   backgroundColor: color
      // }}></div>)
      divs.push(<VisualizerBarPixel color={color} height={height}/>)
    }
    setBar(divs)
  }, [metrics])

  return (
    <div className="viz-bars">
      {bar}
    </div>
  );
}

export default VisualizerBar;