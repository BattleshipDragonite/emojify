import React from "react";

const PlaylistSong = ({ title, artist, albumArt, preview, trackURI, playlistDraft, setPlaylistDraft }) => {

  return (
    <div>
      <img src={albumArt} alt="" />
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <audio src={preview} controls/>
    </div>
  );
}

export default PlaylistSong;