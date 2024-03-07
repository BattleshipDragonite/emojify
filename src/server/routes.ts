import express from 'express';
import { createPlaylistURL, createPlaylist, addTracks } from './controllers/playlist';
import { generateRecommendations } from './controllers/recommendations'
import { createCredentialsObject, createAuthURL, getToken, getNewToken } from './controllers/spotifyAuth';

export const router = express.Router();

// SEND Request to spotify
router.get("/login", createCredentialsObject, createAuthURL, (req, res) => {
    return res.redirect(res.locals.authURL)
})

// callback used by Spotify for OAuth process
router.get('/callback', getToken, async (req, res) => {
    return res.status(200).json(res.locals.userData)
})

// refresh Spotify token
router.get('/refreshToken', getNewToken, async (req, res) => {
    return res.status(200).json(res.locals.newToken)
})

// get recommended tracks
router.get('/recommendations', generateRecommendations, async (req, res) => {
    return res.status(200).json(res.locals.recommendedTracks)
})

// create and save completed playlist to Spotify
router.get('/generatePlaylist', createPlaylistURL, createPlaylist, addTracks, async (req, res) => {
    return res.status(200).json(res.locals.final)
})