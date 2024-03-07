import express from 'express';
import path from 'path';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import cors from 'cors';
import querystring from 'querystring';
import { createPlaylistURL, createPlaylist, addTracks } from './controllers/playlist';
import { generateRecommendations } from './controllers/recommendations'
import { createCredentialsObject, createAuthURL, getToken, getNewToken } from './controllers/spotifyAuth';
import { generateRecommendationsURL, createRandomEmojiQuery } from './utils/emojiDict';
import { routes } from './routes';

const PORT = 3000;
// TODO - Move to .env


// MIDDLEWARE
const app = express();
app.use(cookieParser())
app.use(cors())
app.use("/api", routes);

// SEND Request to spotify
app.get("/login", createCredentialsObject, createAuthURL, (req, res) => {
  res.redirect(res.locals.authURL)
})

// callback used by Spotify for OAuth process
app.get('/callback', getToken, async (req, res) => {
  return res.status(200).json(res.locals.userData)
})

// refresh Spotify token
app.get('/refreshToken', getNewToken, async (req, res) => {
  return res.status(200).json(res.locals.newToken)
})

// get recommended tracks
app.get('/recommendations', generateRecommendations, async (req, res) => {
  return res.status(200).json(res.locals.recommendedTracks)
})

// create and save completed playlist to Spotify
app.get('/generatePlaylist', createPlaylistURL, createPlaylist, addTracks, async (req, res) => {
  return res.status(200).json(res.locals.final)
})

// ERROR HANDLER
app.use("*", (req, res) => {
  console.log('error')
})

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT} 🌴`)
})