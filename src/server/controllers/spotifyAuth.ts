import { Express, Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();
// console.log(process.env)

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

export function createCredentialsObject(req: Request, res: Response, next: NextFunction): void {
    const randomString = generateRandomString(16)
    const credentialsObject = {
        response_type: "code",
        client_id: String(process.env.clientID),
        scope: String(process.env.scope),
        redirect_uri: String(process.env.redirectURI),
        state: randomString
    }
    res.locals.credentialsObject = credentialsObject;
    return next()
}