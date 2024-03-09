import React from "react";

const PlaylistSong = ({ title, artist, albumArt, preview, trackURI, playlistDraft, setPlaylistDraft }) => {

  return (
    <div className="p-5">
      <img src={albumArt} alt="" />
      <h1 className="font-bold">{title}</h1>
      <h2 >{artist}</h2>
      <audio src={preview} controls/>
      <hr style={{margin: '20px 0px 20px 0px'}} />
    </div>
  );
}

export default PlaylistSong;