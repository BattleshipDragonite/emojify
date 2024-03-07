import express from 'express';
import path from 'path';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import cors from 'cors';
import querystring from 'querystring';
import { createPlaylistURL, createPlaylist, addTracks } from './controllers/playlist';
import { createCredentialsObject, createAuthURL } from './controllers/spotifyAuth';
import { generateRecommendationsURL, createRandomEmojiQuery } from './utils/emojiDict';
import { routes } from './routes';

const PORT = 3000;
// TODO - Move to .env


// MIDDLEWARE
const app = express();
app.use(cookieParser())
app.use(cors())
app.use("/api", routes);


// CLIENT CREDENTIALS
// TODO - Move to .env
const clientID = "b2fcfd2add0a4d45ad8574d554a8c7ee";
const clientSecret = "ec3e9e39fee74c259bc940acef108da3";
const spotifyAuthURL = "https://accounts.spotify.com/authorize?";
const spotifyTokenURL = "https://accounts.spotify.com/api/token";
const redirectURI = `http://localhost:${PORT}/callback`;
const stateKey = "spotify_auth_state";


// TYPES
type AuthOptions = {

}

// SEND Request to spotify
app.get("/login", createCredentialsObject, createAuthURL, (req, res) => {
  res.redirect(res.locals.authURL)
})

// Receive Access token from spotify
app.get('/callback', async (req, res) => {
  const { code, queryState } = req.query;
  const { cookieState } = req.cookies[stateKey]

  if (cookieState !== queryState) {
    //TODO SEND TO ERROR HANDLER
    res.redirect('/#' + querystring.stringify({
      error: 'state does not match'
    }))
  } else {
    const authOptions = {
      code: code,
      redirect_uri: redirectURI,
      grant_type: 'authorization_code',
    }
    const config = {
      headers: {
        "content-type": 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new (Buffer.from as any)(clientID + ':' + clientSecret).toString('base64'))
      }
    };
    res.clearCookie(stateKey);
    axios.post(spotifyTokenURL, authOptions, config)
      .then((response) => {

        fs.writeFile(path.join(__dirname, '../../token.json'), JSON.stringify(response.data), err => {
          if (err) { console.log(err) }
        })
        return res.status(200).json(response.data)
      }).catch((error) => {
        console.log({ error })
      })
  }
})

// refresh Spotify token
app.get('/refresh_token', async (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../token.json'), 'utf8'));
  const refresh_token = data.refresh_token;
  // console.log(refresh_token) //looks good
  const authOptions = {
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    }
  };
  const config = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new (Buffer.from as any)(clientID + ':' + clientSecret).toString('base64'))
    },
  }
  axios.post(spotifyTokenURL, authOptions, config)
    .then((response) => {
      fs.writeFile(path.join(__dirname, '../../token.json'), JSON.stringify(response.data), err => {
        if (err) { console.log(err) }
      })
      return res.status(200).json(response.data)
    }).catch((error) => {
      console.log({ error })
    })
})

// fetches recommendations from Spotify and returns top 3 
app.get('/recommendations', async (req, res) => {
  const randomEmoji = createRandomEmojiQuery();
  const recommendationURL = generateRecommendationsURL(randomEmoji);

  const tokenData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../token.json'), 'utf8'));
  const accessToken = tokenData.access_token;
  console.log(recommendationURL)
  axios.get(recommendationURL, { headers: { Authorization: 'Bearer ' + accessToken } })
    .then((response) => {
      fs.writeFile(path.join(__dirname, '../../recommendations.json'), JSON.stringify(response.data), err => {
        if (err) { console.log(err) }
      })
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
      return res.status(200).json(recommendedTracks)
    }).catch((error) => {
      console.log({ error })
    })
})

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