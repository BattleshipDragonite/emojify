import React, { useState } from "react";
import MetricsMixer from "../components/mixer/MetricsMixer.tsx";
import AuxMixer from "../components/mixer/AuxMixer.tsx";
import EmojiKeyboard from "../components/keyboard/EmojiKeyboard.tsx";
import Display from "../components/Display.tsx";
import { Modal, Button } from "flowbite-react";
import { Metrics, Track } from "../types.ts";
import NavBar from "../components/NavBar.tsx";
import Background from "../assets/28011782_7301421.svg";
import PlaylistSong from "../components/PlaylistSong.tsx";

const EmojifyPage = () => {
  const [genre, setGenre] = useState<string>("🎼");
  const [playlistName, setPlaylistName] = useState<string>("")
  const [openSongsModal, setOpenSongsModal] = useState(false);
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
  const [metrics, setMetrics] = useState<Metrics>({
    acousticness: 0.1,
    danceability: 0.5,
    energy: 0.6,
    instrumentalness: 0.5,
    liveness: 0.2,
    speechiness: 0.33,
    valence: 0.5,
    loudness: -25,
    tempo: 120,
    key: null,
    mode: null,
    time_signature: null
  });

  const [songs, setSongs] = useState<Track[]>([])
  const [songIndex, setSongIndex] = useState<number>(0)
  const [playlistDraft, setPlaylistDraft] = useState<Track[]>([])

  const nextSong = () => {
    if (songIndex != songs.length - 1) setSongIndex(songIndex + 1)
    else setSongIndex(0)
  }

  const searchFunction = async () => {
    // input params here
    // input fetch request to spotify API with params as body
    const recommendationObj = {
      genre: genre,
      metrics: metrics
    }
    try {
      const response = await fetch('/recommendations', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recommendationObj)
      })
      const result = await response.json();
      console.log("Success", result)
      setSongIndex(0);
      setSongs(result);
      setOpenSongsModal(true);
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const playlistFunction = () => {
    setOpenPlaylistModal(true)
  }

  const savePlaylistFunction = async (): Promise<void> => {
    const trackURIs: string[] = [];
    for (const song of playlistDraft) {
      trackURIs.push(song.trackURI);
    }
    const playlistObj = {
      name: `${playlistName}`,
      description: "Playlist generated by Emojify",
      tracks: trackURIs
    }
    try {
      const response = await fetch('/generatePlaylist', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playlistObj)
      })
      const result = await response.json();
      console.log("Success", result)
      setOpenPlaylistModal(false)
    } catch (error) {
      console.error("Error:", error)
    }}

  const addToPlaylist = (song: Track) => {
    setPlaylistDraft([...playlistDraft, song]);
    setPlaylistName(playlistName + genre)
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          minHeight: "100%",
          backgroundAttachment: "fixed",
        }}
      >
        <NavBar />
        <div id="main" className="flex flex-col items-center">
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col mr-50 ml-50">
              <Button
                onClick={() => playlistFunction()}
                className="m-3"
                gradientDuoTone="purpleToPink"
              >
                View Playlist 🎶
              </Button>
              <Button
                className="mb-10"
                onClick={() => searchFunction()}
                color="purple"
              >
                Find Songs 🎧
              </Button>
            </div>
          </div>
          <div id="buttons-display">
            <EmojiKeyboard setGenre={setGenre}/>
            <Display genre={genre} metrics={metrics} />
          </div>
          <div id="user-interface">
            <MetricsMixer currMetrics={metrics} setMetrics={setMetrics} />
            <AuxMixer currMetrics={metrics} setMetrics={setMetrics} />
          </div>
        </div>
        {/* <div className="flex flex-col items-middle justify-center">
          <Button onClick={() => searchFunction()} color='purple'>Find Songs 🎧</Button>
          <Button onClick={() => playlistFunction()} className='m-3' gradientDuoTone="purpleToPink">View Playlist 🎶</Button>
        </div> */}

        <Modal show={openSongsModal} onClose={() => setOpenSongsModal(false)}>
          <Modal.Header>Selected Songs</Modal.Header>
          <Modal.Body>
            <div className="flex flex-col justify-center items-center">
              <img src={songs[songIndex]?.albumArt} alt="Album art" />
              <audio src={songs[songIndex]?.previewURL} controls />

              <div className="space-y-6">
                <h2 className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {songs[songIndex]?.trackName}
                </h2>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {songs[songIndex]?.artistName}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
              <Button color="purple" onClick={() => addToPlaylist(songs[songIndex])}>Add song</Button>
              <Button color="red" onClick={() => nextSong()}>Next Song</Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={openPlaylistModal}
          onClose={() => setOpenPlaylistModal(false)}
        >
          <Modal.Header>Playlist</Modal.Header>
          <Modal.Body>
            <div>
              {playlistDraft.map((ele, key) => {
                  return (
                    <PlaylistSong
                      title={ele.trackName}
                      artist={ele.artistName}
                      albumArt={ele.albumArtSmall}
                      preview={ele.previewURL}
                      trackURI={ele.trackURI}
                      setPlaylistDraft={setPlaylistDraft}
                      playlistDraft={playlistDraft}
                    />
                  )
                }
              )}
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button color="purple" onClick={() => savePlaylistFunction()}>
              Add Playlist to Spotify
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default EmojifyPage;
