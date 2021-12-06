import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ limit="30mb", extended: true }))
app.use(bodyParser.json({ limit="30mb", extended: true }))

app.use(cors())