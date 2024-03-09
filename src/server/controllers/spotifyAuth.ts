import { Express, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import querystring from 'querystring';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

type AuthCredentials = {
    response_type: string,
    client_id: string,
    scope: string,
    redirect_uri: string,
    state: string
}

const generateRandomString = (length: number): string => {
    return crypto.randomBytes(60).toString('hex').slice(0, length)
}

// create credentials object for Spotify OAuth process
export const createCredentialsObject = (req: Request, res: Response, next: NextFunction): void => {
    const randomString = generateRandomString(16)
    const redirectURI = `http://localhost:${process.env.PORT}/callback`
    const credentialsObject = {
        response_type: "code",
        client_id: String(process.env.clientID),
        scope: String(process.env.scope),
        redirect_uri: String(redirectURI),
        state: randomString
    }
    res.locals.credentialsObject = credentialsObject;
    next()
}

// create authorization URL for Spotify OAuth process
export const createAuthURL = (req: Request, res: Response, next: NextFunction): void => {
    const credentials = res.locals.credentialsObject
    const state = credentials.state;
    const credentialsString = querystring.stringify(credentials);
    const authURL = `${process.env.spotifyAuthURL + credentialsString}`;
    res.locals.authURL = authURL;
    res.cookie(process.env.stateKey, state);
    return next()
}

// gets access and refresh token as part of OAuth process
export const getToken = (req: Request, res: Response, next: NextFunction): void => {
    const { code, queryState } = req.query;
    const { cookieState } = req.cookies[process.env.stateKey]
    const redirectURI = `http://localhost:${process.env.PORT}/callback`
    if (cookieState !== queryState) {
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
                'Authorization': 'Basic ' + (new (Buffer.from as any)(process.env.clientID + ':' + process.env.clientSecret).toString('base64'))
            }
        };
        res.clearCookie(process.env.stateKey);
        axios.post(process.env.spotifyTokenURL, authOptions, config)
            .then((response) => {
                fs.writeFile(path.join(__dirname, '../../../token.json'), JSON.stringify(response.data), err => {
                    if (err) { console.log(err) }
                })
                res.locals.userData = response.data;
                next()
            }).catch((error) => {
                console.log({ error })
            })
    }
}

// refreshes Spotify OAuth token
export const getNewToken = (req: Request, res: Response, next: NextFunction): void => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../token.json'), 'utf8'));
    const refresh_token = data.refresh_token;
    const form = {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
    };
    const config = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new (Buffer.from as any)(process.env.clientID + ':' + process.env.clientSecret).toString('base64'))
        },
    }
    axios.post(process.env.spotifyTokenURL, form, config)
        .then((response) => {
            const newToken = response.data;
            newToken.refresh_token = refresh_token;
            fs.writeFile(path.join(__dirname, '../../../token.json'), JSON.stringify(newToken), err => {
                if (err) { console.log(err) }
            })
            res.locals.newToken = newToken;
            next()
        }).catch((error) => {
            console.log({ error })
        })
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};