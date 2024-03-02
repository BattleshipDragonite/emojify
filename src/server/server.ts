import express from 'express';
import path from 'path';
import querystring from 'querystring';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import cors from 'cors';
import crypto from 'crypto';

const PORT = 3000;
// TODO - Move to .env


// MIDDLEWARE
const app = express();
app.use(cookieParser())
app.use(cors())



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
  response_type : string,
  client_id: string,
  scope: string,
  redirect_uri: string,
  state: string
}
type AuthOptions = {

}


// Generate Random String
const generateRandomString = (length:number):string => {
  return crypto.randomBytes(60).toString('hex').slice(0,length)
}

// TODO - Move to server/controllers/spotifyAuth.ts
const createCredentialsObject = ():AuthCredentials => {
  const randomString = generateRandomString(16)
  const credentialsObject = {
    response_type : "code",
    client_id: clientID,
    scope: 'user-read-private user-read-email',
    redirect_uri: redirectURI,
    state: randomString
  }
  return credentialsObject; 
}



// SEND Request to spotify
app.get("/login",(req,res)=>{
  const credentialsObject = createCredentialsObject();
  const state = credentialsObject.state;

  const credentialsString = querystring.stringify(credentialsObject);
  const authURL = `${spotifyAuthURL + credentialsString}`;

  res.cookie(stateKey, state );
  res.redirect(authURL)
})

app.get('/callback',(req,res)=>{
  const {code, queryState} = req.query;
  const {cookieState} = req.cookies[stateKey]
  
  if (cookieState !== queryState) {
    //TODO SEND TO ERROR HANDLER    
  } else {

    const authOptions = {

      form: {
        code: code,
        redirect_uri: redirectURI,
        grant_type: 'authorization_code',
      },
      headers: {
        "content-type" : 'application/x-www-form-urlencoded',
        'Authorization' : `Basic ` + (Buffer.from(`${clientID}:${clientSecret}`).toString('base64'))
      },
      json : true
    }

    // var authOptions = {
    //   url: 'https://accounts.spotify.com/api/token',
    //   form: {
    //     code: code,
    //     redirect_uri: redirect_uri,
    //     grant_type: 'authorization_code'
    //   },
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     Authorization: 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    //   },
    //   json: true
    // };
    axios.post(spotifyTokenURL,authOptions)
    .then((response)=>{
      console.log(response.data)
    }).catch((error)=>{
      console.log({error})
    })

    res.clearCookie(stateKey);

  }

  res.send('OK')
})

// ERROR HANDLER
app.use("*", (req,res)=>{
  console.log('error')
})


app.listen(PORT, ()=>{
  console.log(`Server running on PORT:${PORT} 🌴`)
})