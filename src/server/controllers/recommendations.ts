import { Express, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { generateRecommendationsURL, createRandomEmojiQuery } from '../utils/emojiDict';

dotenv.config();


export const generateRecommendations = (req: Request, res: Response, next: NextFunction): void => {
    const randomEmoji = createRandomEmojiQuery();
    const { genre, metrics } = req.body
    console.log({metrics})
    console.log({genre})
    const metricsTestObj = {
        danceability : .5,
        tempo: 120,
        loudness: -60,
        valence: .5,
        speechiness: .2,
      }
    const recommendationURL = generateRecommendationsURL(randomEmoji,metricsTestObj);
    // const recommendationURL = "https://api.spotify.com/v1/recommendations?seed_genres=classical%2Ccountry"
    // pull access token from token.json. To do - refactor to session storage
    const tokenData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../token.json'), 'utf8'));
    const accessToken = tokenData.access_token;

    axios.get(recommendationURL, { headers: { Authorization: 'Bearer ' + accessToken } })
        .then((response) => {
            const tracks = response.data.tracks;
            const sorted = tracks.sort((a: any, b: any) => b.popularity - a.popularity).filter((a: any) => a.preview_url)
            const recommendedTracks = []
            for (let i = 0; i < 3; i++) {
                recommendedTracks.push({
                    albumArt: sorted[i].album.images[1].url,
                    albumName: sorted[i].album.name,
                    artistName: sorted[i].artists[0].name,
                    trackName: sorted[i].name,
                    trackID: sorted[i].id,
                    trackURI: sorted[i].uri,
                    previewURL: sorted[i].preview_url
                });
            }
            res.locals.recommendedTracks = recommendedTracks;
            next()
        }).catch((error) => {
            console.log({ error })
        })


}
