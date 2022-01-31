const express = require('express')
const app = express()
const port = 8800

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const moviesRoute = require('./routes/movies')
const listsRoute = require('./routes/lists')

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
app.use('/server/users', usersRoute);
app.use('/server/movies', moviesRoute);
app.use('/server/lists', listsRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})