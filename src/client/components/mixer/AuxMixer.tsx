import React from "react";
import AuxChannel from "./AuxChannel";

const AuxMixer = ({ currMetrics, setMetrics }) => {

  return (
      <div id="auxiliary">
        <AuxChannel 
          metric="key"
          min={-1}
          max={11}
          defaultValue={0}
          possValues={[
            'n/a',
            'C',
            'C#/D♭',
            'D',
            'D#/E♭',
            'E',
            'F',
            'F#/G♭',
            'G',
            'G#/A♭',
            'A',
            'A#/B♭',
            'B'
          ]}
          currMetrics={currMetrics}
          setMetrics={setMetrics}
        />
        <AuxChannel 
          metric="mode"
          min={0}
          max={1}
          defaultValue={1}
          possValues={['minor', 'major']}
          currMetrics={currMetrics}
          setMetrics={setMetrics}
        />
        <AuxChannel 
          metric="time_signature"
          min={3}
          max={7}
          defaultValue={4}
          possValues={['3/4', '4/4', '5/4', '6/4', '7/4']}
          currMetrics={currMetrics}
          setMetrics={setMetrics}
        />
      </div>
    );
  }

  export default AuxMixer;