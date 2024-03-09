import React from "react";

const Display = ({ genre }) => {
  return (
    <div className="genre-div">
      <h1 className="text-8xl m-20">{genre}</h1>
    </div>
  );
}

export default Display;