import React from "react";
import EmojiKBDRow from "./EmojiKBDRow.tsx";
import { genresMap } from "../../../server/utils/emojiDict.ts";


const EmojiKeyboard = ({ setGenre }) => {
  const genres: string[] = Object.keys(genresMap);

  return (
    <div className="keyboard">
      <EmojiKBDRow start={0} end={20} genres={genres} setGenre={setGenre} />
      <EmojiKBDRow start={20} end={36} genres={genres} setGenre={setGenre} />      
      <EmojiKBDRow start={36} end={55} genres={genres} setGenre={setGenre} />
      <EmojiKBDRow start={55} end={75} genres={genres} setGenre={setGenre} />
      <EmojiKBDRow start={75} end={90} genres={genres} setGenre={setGenre} />
      <EmojiKBDRow start={90} genres={genres} setGenre={setGenre} />
    </div>
  )
}

export default EmojiKeyboard;