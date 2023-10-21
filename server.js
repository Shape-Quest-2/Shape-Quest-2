const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://shapequestuser:shapequest@cluster0.iecn0o7.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
    console.log('Error connecting to db')
})

db.once('open', () => {
console.log('Connected to Database');
});

app.use(express.json())

app.get('/', (req, res) => {
res.send(200)
})

app.post('/', (req, res) => {

})


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
