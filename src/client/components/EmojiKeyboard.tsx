import React from "react";
import { genresMap } from "../../server/utils/emojiDict.ts";


const EmojiKeyboard = () => {
  const genres = Object.keys(genresMap);

  return (
    <div className="keyboard">
      <div className="flex">
        {genres.slice(0, 20).map((ele) => {
          return (
            <>
              <div className="keys" onClick={() => setGenre(ele)}>
                <h1>{ele}</h1>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex">
        {genres.slice(20, 36).map((ele) => {
          return (
            <>
              <div className="keys" onClick={() => setGenre(ele)}>
                <h1>{ele}</h1>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex">
        {genres.slice(36, 55).map((ele) => {
          return (
            <>
              <div className="keys" onClick={() => setGenre(ele)}>
                <h1>{ele}</h1>
              </div>
            </>
          );
        })}
      </div>

      <div className="flex">
        {genres.slice(55, 75).map((ele) => {
          return (
            <>
              <div className="keys" onClick={() => setGenre(ele)}>
                <h1>{ele}</h1>
              </div>
            </>
          );
        })}
      </div>

      <div className="flex">
        {genres.slice(75, 90).map((ele) => {
          return (
            <>
              <div className="keys" onClick={() => setGenre(ele)}>
                <h1>{ele}</h1>
              </div>
            </>
          );
        })}
      </div>

      <div className="flex">
        {genres.slice(90).map((ele) => {
          return (
            <>
              <div className="keys" onClick={() => setGenre(ele)}>
                <h1>{ele}</h1>
              </div>
            </>
          );
        })}
      </div>
    </div>
  )
}

export default EmojiKeyboard;