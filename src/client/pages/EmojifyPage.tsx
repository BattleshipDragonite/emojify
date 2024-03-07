import React, { useState } from "react";
import MetricsMixer from "../../components/MetricsMixer";
import { genresMap } from "../../server/utils/emojiDict.ts";
import { Modal, Button } from "flowbite-react";
import { Carousel } from "flowbite-react";

const EmojifyPage = () => {
  const [genre, setGenre] = useState("🎼");
  const [openModal, setOpenModal] = useState(false);

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

  const genres = Object.keys(genresMap);

  return (
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
      <MetricsMixer />
      <button
        onClick={() => setOpenModal(true)}
        type="submit"
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        Search
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
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
            <Button color="purple" onClick={() => setOpenModal(false)}> Add song</Button>
            <Button color="red" onClick={() => nextSong()}>Next Song</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmojifyPage;
