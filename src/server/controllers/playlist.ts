import { Express, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

// fetches user ID for Spotify create playlist endpoint
export const createPlaylistURL = (req: Request, res: Response, next: NextFunction): void => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../token.json'), 'utf8'));
    axios.get(process.env.spotifyProfileURL, { headers: { Authorization: 'Bearer ' + data.access_token } })
        .then((response) => {
            res.locals.playlistID = response.data.id;
            res.locals.playlistURL = `https://api.spotify.com/v1/users/${response.data.id}/playlists`;
            next();
        })
}

// creates Spotify playlist and saves playlist ID for adding to playlist
export const createPlaylist = (req: Request, res: Response, next: NextFunction): void => {
    const playlistURL = res.locals.playlistURL;
    const tokenData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../token.json'), 'utf8'));
    const accessToken = tokenData.access_token;

    const {name, description, tracks} = req.body;
    res.locals.tracks = tracks;
    
    const data = {
        "name": `${name}`,
        "description": `${name}`,
        "public": true
    };
    const config = {
        headers: {
            'content-type': 'Content-Type: application/json',
            'Authorization': 'Bearer ' + accessToken,
        },
    }
    axios.post(playlistURL, data, config)
        .then((response) => {
            const playlistID = response.data.id;
            res.locals.addTracksURL = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`
            next()
        }).catch((error) => {
            console.log({ error })
        })
}

// adds tracks to playlist
export const addTracks = (req: Request, res: Response, next: NextFunction): void => {
    const addTrackURL = res.locals.addTracksURL;
    const tokenData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../token.json'), 'utf8'));
    const accessToken = tokenData.access_token;

    const tracks = {
        "uris": res.locals.tracks,
        "position": 0
    };
    const config = {
        headers: {
            'content-type': 'Content-Type: application/json',
            'Authorization': 'Bearer ' + accessToken,
        },
    }
    axios.post(addTrackURL, tracks, config)
        .then((response) => {
            const data = response.data;
            res.locals.final = data;
            next()
        }).catch((error) => {
            console.log({ error })
        })
}