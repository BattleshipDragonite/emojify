import React from "react";
import { EmojiKBDRowProps } from "../../types";

const EmojiKBDRow = ({
  start,
  end,
  genres,
  setGenre
}: EmojiKBDRowProps) => {
  const palette: string[] = [
    '#FFADAD',
    '#FFD6A5',
    '#FDFFB6',
    '#CAFFBF',
    '#9BF6FF',
    '#A0C4FF',
    '#BDB2FF',
    '#FFC6FF',
    '#FFFFFC'
  ];

  return (
    <div className="flex">
      {genres.slice(start, end).map((ele, i) => {
        return (
          <div className="keys" onClick={() => setGenre(ele)} style={{backgroundColor: palette[i % palette.length]}} >
            <h1>{ele}</h1>
          </div>
        );
      })}
    </div>
  )
}

export default EmojiKBDRow;