// package imports
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// local imports
const apiRoutes = require('./routes/api');


// server config / baseline middleware setup
// -----------------------------------------
const app = express();
const PORT = process.env.PORT || 3000;

// CORS middleware
app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Set up connection to the database
mongoose.connect('mongodb+srv://shapequestuser:shapequest@cluster0.iecn0o7.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', (err) => console.log(`Error connecting to db: ${err}`));
db.once('open', ()   => console.log('Connected to Database'));

// parse incoming JSON POST bodies
app.use(express.json());


// Shape Quest API routing
// -----------------------
// serve static files
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  return res.status(200).sendFile('/index.html');
});

// serve API routes
app.use('/api', apiRoutes);

// Handle requests for any route we haven't defined
app.use((req, res) => {
  console.log(`[${new Date().toUTCString()}] INFO: Client attempted to access unknown resource at ${req.originalUrl}. Returning 404.`);
  return res.status(404);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
