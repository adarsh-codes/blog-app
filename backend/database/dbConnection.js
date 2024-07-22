import mongoose from "mongoose";
import path from "path";
import dotenv from 'dotenv'
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const dbConnection = () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
 dotenv.config({ path: path.resolve(__dirname, './.env') });
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_BLOGGING_APP",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};
