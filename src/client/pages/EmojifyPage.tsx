import React, {useState} from 'react'
import MetricsMixer from '../../components/MetricsMixer'
import {genresMap} from '../../server/utils/emojiDict.ts'
import { Modal, Button } from 'flowbite-react'
import { Metrics } from '../types.ts'
import NavBar from "../../components/NavBar.tsx";

const EmojifyPage = () => {
  const [genre, setGenre] = useState("🎼");
  const [openSongsModal, setOpenSongsModal] = useState(false);
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
    const [metrics, setMetrics] = useState<Metrics>({
        acousticness: 0,
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

  const songs = [
    {
        title: 'Song Title1', 
        artist: 'Artist1', 
    }, 
    {
        title: 'Song Title2', 
        artist: 'Artist2', 
    },
    {
        title: 'Song Title3', 
        artist: 'Artist3', 
    },
  ]

  const [songIndex, setSongIndex] = useState(0)

  const nextSong = () => {
    if (songIndex != songs.length - 1) {
        setSongIndex(songIndex + 1)
    }
    else {
        setSongIndex(0)
    }
  }

  const searchFunction = () => {
    // input params here
    // input fetch request to spotify API with params as body

    setSongIndex(0);
    setOpenSongsModal(true);
  }

  const playlistFunction = () => {
    setOpenPlaylistModal(true)
  }

  const genres = Object.keys(genresMap);

  return (
    <>
    <NavBar />
    <div id="user-interface">
      <div className="genre-div">
        <h1 className="text-8xl m-20">{genre}</h1>
      </div>
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
      <MetricsMixer currMetrics={metrics} setMetrics={setMetrics} />
      <div className="flex flex-col items-middle justify-center">
          <Button onClick={() => searchFunction()} color='purple'>Find Songs 🎧</Button>

      <Button onClick={() => playlistFunction()} className='m-3' gradientDuoTone="purpleToPink">View Playlist 🎶</Button>
      </div>

      <Modal show={openSongsModal} onClose={() => setOpenSongsModal(false)}>
        <Modal.Header>Selected Songs</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col justify-center items-center">
            <img src="" alt="Album art" />
            <audio src="" controls />

            <div className="space-y-6">
              <h2 className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {songs[songIndex].title}
              </h2>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {songs[songIndex].artist}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
            <Button color="purple" onClick={() => setOpenSongsModal(false)}> Add song</Button>
            <Button color="red" onClick={() => nextSong()}>Next Song</Button>
        </Modal.Footer>
      </Modal>


      <Modal show={openPlaylistModal} onClose={() => setOpenPlaylistModal(false)}>
        <Modal.Header>Playlist</Modal.Header>
        <Modal.Body>
          {/* Add a playlist component here */}
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
            <Button color="purple" onClick={() => setOpenPlaylistModal(false)}> Add Playlist to Spotify</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default EmojifyPage;
