const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
const homeRoute = require('./routes/home');
const postsRoute = require('./routes/posts');

// Routes Middleware
app.use('/', homeRoute)
app.use('/posts', postsRoute);


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB')
});

// How do we start listening to the server
app.listen(3000);