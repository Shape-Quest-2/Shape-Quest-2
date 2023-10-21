const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const userController = require('./routes/userController');
const userModel = require('./userModel')

const app = express();
const PORT = process.env.PORT || 3000;



mongoose.connect('mongodb+srv://shapequestuser:shapequest@cluster0.iecn0o7.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })

//CORS middleware
app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const db = mongoose.connection
db.on('error', (err) => {
    console.log('Error connecting to db')
})

db.once('open', () => {
console.log('Connected to Database');
});



app.use(express.json())

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.use('/', apiRoutes)

//unknown route handler
app.use((req, res) => {
    console.log('Invalid page')
    res.status(400)
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
