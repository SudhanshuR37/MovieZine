import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()

app.use(bodyParser.urlencoded({ limit="30mb", extended: true }))
app.use(bodyParser.json({ limit="30mb", extended: true }))

app.use(cors())

const CONNECTION_URL = "mongodb+srv://moviezine:moviezine1011@cluster0.x6yf4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3000

const { Schema } = mongoose;

const movieSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

