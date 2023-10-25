const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://shapequestuser:shapequest@cluster0.iecn0o7.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })

//serve static files
app.use(express.static(path.join(__dirname, 'assets')));

// CORS middleware
app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const db = mongoose.connection
db.on('error', (err) => {
    console.log('Error connecting to db');
});

db.once('open', () => {
    console.log('Connected to Database');
});

app.use(express.json());

app.use('/', apiRoutes);

// Handle requests for any route we haven't defined
app.use((req, res) => {
    console.log(`[${new Date().toUTCString()}] INFO: Client attempted to access unknown resource at ${req.originalUrl}. Returning 404.`);
    return res.status(404);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
