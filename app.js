// import express
const express = require('express');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create an express app
const app = express();

// add middleware to enable CORS
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));

// add middleware to parse JSON
app.use(express.json());

// add middleware to parse cookies
app.use(cookieParser());

// define the root route
app.use('/api/v1/auth', authRouter);

// export the app
module.exports = app;