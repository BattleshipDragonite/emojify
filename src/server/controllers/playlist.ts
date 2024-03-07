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
            res.locals.playlistURL = `https://api.spotify.com/v1/users/${response.data.id}/playlists`;
            console.log("testing playlist controller")
            console.log(res.locals.playlistURL)
            next();
        })
}

// https://api.spotify.com/v1/playlists/{playlist_id}/tracks   save it to res.locals.addTr
// fetches ID of created playlist in order to add new tracks
export const getPlaylistID = (req: Request, res: Response, next: NextFunction): void => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../token.json'), 'utf8'));
    const currentPlaylistEndpoint = process.env.currentPlaylistEndpoint;
    axios.get(currentPlaylistEndpoint, { headers: { Authorization: 'Bearer ' + data.access_token } })
        .then((response) => {
            // console.log(response.data.items[0].id);
            const playlist_id = response.data.items[0].id;
            //I GOT IT!!!!!!!!!!!
            res.locals.addTracksURL = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
        })
}