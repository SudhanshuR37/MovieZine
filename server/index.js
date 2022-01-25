const express = require('express')
const app = express()
const port = 8800

const mongoose = require('mongoose')
const { Schema } = mongoose;

// const blogSchema = new Schema({
//     title: String,
//     author: String,
//     body: String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//         votes: Number,
//         favs: Number
//     }
// });

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})