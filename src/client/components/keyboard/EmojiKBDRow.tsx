import React from "react";
import { EmojiKBDRowProps } from "../../types";

const EmojiKBDRow = ({
  start,
  end,
  genres,
  setGenre
}: EmojiKBDRowProps) => {
  return (
    <div className="flex">
      {genres.slice(start, end).map((ele) => {
        return (
          <div className="keys" onClick={() => setGenre(ele)}>
            <h1>{ele}</h1>
          </div>
        );
      })}
    </div>
  )
}

export default EmojiKBDRow;