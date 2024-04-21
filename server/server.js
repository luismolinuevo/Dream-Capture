import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import { apiRouter } from "./routes/index.js";

const DB_URL = process.env.DB_URL;
dotenv.config();

const app = express();

mongoose.set("strictQuery", false);
mongoose.set("bufferCommands", false);

mongoose.connect(DB_URL);
mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api", apiRouter);

app.listen(3002, () => {
  console.log("Connected to server");
});
