import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { router } from './routes';
import dotenv from 'dotenv';
import { errorHandler } from './controllers/spotifyAuth';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT} 🌴`)
})