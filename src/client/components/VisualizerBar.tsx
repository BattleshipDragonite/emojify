import React, { useState, useEffect } from "react";
import { metricsOptionObj } from "../../server/utils/emojiDict";

const VisualizerBar = ({ id, metrics}) => {
  const [bar, setBar] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const height: number = Math.round(metrics.acousticness / metricsOptionObj.acousticness.max * 10) / 10;
    const color: string = `hsl(0, 100%, ${70 - (height * 30)}%`;
    console.log(height);
    const divs: JSX.Element[] = [];
    for (let i = 1; i < height * 10; i++) {
      divs.push(<div className="pixel" style={{
        backgroundColor: color
      }}></div>)
    }
    setBar(divs)
  }, [metrics])

  return (
    <div className="viz-bars" id={id}>
      {bar}
    </div>
  );
}

export default VisualizerBar;