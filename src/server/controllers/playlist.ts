import { Express, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

export const getUserID = (req: Request, res: Response, next: NextFunction): void => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../token.json'), 'utf8'));
    console.log(process.env.spotifyProfileURL)
    console.log("Access token:" + data.access_token)
    axios.get(process.env.spotifyProfileURL, { headers: { Authorization: 'Bearer ' + data.access_token } })
        .then((response) => {
            console.log(response.data)
            res.locals.userID = response.data.id;
        })
    return next();
}
