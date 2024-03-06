import express from 'express';
import path from 'path';
import fs from 'fs';
import querystring from 'querystring';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import cors from 'cors';
import crypto from 'crypto';
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
type AuthCredentials = {
  response_type: string,
  client_id: string,
  scope: string,
  redirect_uri: string,
  state: string
}
type AuthOptions = {

}


// Generate Random String
const generateRandomString = (length: number): string => {
  return crypto.randomBytes(60).toString('hex').slice(0, length)
}

// TODO - Move to server/controllers/spotifyAuth.ts
const createCredentialsObject = (): AuthCredentials => {
  const randomString = generateRandomString(16)
  const credentialsObject = {
    response_type: "code",
    client_id: clientID,
    scope: 'user-read-private user-read-email playlist-modify-public',
    redirect_uri: redirectURI,
    state: randomString
  }
  return credentialsObject;
}



// SEND Request to spotify
app.get("/login", (req, res) => {
  const credentialsObject = createCredentialsObject();
  const state = credentialsObject.state;

  const credentialsString = querystring.stringify(credentialsObject);
  const authURL = `${spotifyAuthURL + credentialsString}`;

  res.cookie(stateKey, state);
  res.redirect(authURL)
})

// Receive Access token from spotify
app.get('/callback', async (req, res) => {
  const { code, queryState } = req.query;
  const { cookieState } = req.cookies[stateKey]

  if (cookieState !== queryState) {
    //TODO SEND TO ERROR HANDLER    
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
        // console.log(response.data)

        fs.writeFile(path.join(__dirname, '../../token.json'), JSON.stringify(response.data), err => {
          if (err) { console.log(err) }
        })
        return res.status(200).json(response.data)
      }).catch((error) => {
        console.log({ error })
      })
  }
})

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

app.get('/recommendations', async (req, res) => {
  const randomEmoji = createRandomEmojiQuery();
  const recommendationURL = generateRecommendationsURL(randomEmoji);

  // console.log(recommendationURL);

  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../token.json'), 'utf8'));
  const accessToken = data.access_token;
  axios.get(recommendationURL, { headers: { Authorization: 'Bearer ' + accessToken } })
    .then((response) => {
      fs.writeFile(path.join(__dirname, '../../recommendations.json'), JSON.stringify(response.data), err => {
        if (err) { console.log(err) }
      })
      const tracks = response.data.tracks;
      const sorted = tracks.sort((a: any, b: any) => b.popularity - a.popularity).filter((a: any) => a.preview_url)
      //const result = words.filter((word) => word.length > 6);
      return res.status(200).json(response.data)
    }).catch((error) => {
      console.log({ error })
    })
  // return res.status(200).send(randomEmoji);
})





// ERROR HANDLER
app.use("*", (req, res) => {
  console.log('error')
})


app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT} 🌴`)
})