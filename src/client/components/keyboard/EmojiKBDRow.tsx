import React from "react";

type EmojiKBDRowProps = {
  start: number,
  end?: number,
  genres: string[],
  setGenre: (arg: string) => void
}

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