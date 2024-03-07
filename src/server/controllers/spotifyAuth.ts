import { Express, Request, Response, NextFunction } from 'express';
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