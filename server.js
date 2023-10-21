const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const userController = require('./routes/userController');

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

const userSchema = new mongoose.Schema({
    userName: {type: String, requires: true},
    password: {type: String, require: true},
    progression: {type: Number}
})
const User = mongoose.model('User', userSchema)



app.use(express.json())

app.get('/', (req, res) => {
    res.send(200)
})

app.use('/', apiRoutes)

//unknown route handler
app.use((req, res) => {
    console.log('Invalid page')
    res.status(400)
})


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
