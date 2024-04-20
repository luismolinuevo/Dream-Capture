import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("tiny"))


app.listen(3002, () => {
    console.log("Connected to server")
})