const express = require('express')
const app = express()
const port = 8800

const authRoute = require('./routes/auth')

const mongoose = require('mongoose')

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json());
app.use('/server/auth', authRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})