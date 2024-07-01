const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

// importing routes
const itemRoutes = require('./routes/item');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Using Express Static Middlewares to load static files
app.use(express.static(path.join(__dirname, './public')));

// Setting middleware Engines
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');


app.get('/home', (req, res) => {
    res.render('home',{
        title: 'CRUD App',
        message: 'Welcome to the CRUD App!'
    });
});


// Routes
app.use('/api/items', itemRoutes);

// Connecting to the MongoDb Data Base
mongoose.connect('mongodb+srv://admin:WlgsfiWKWPzNxPkp@backenddb.mubjluw.mongodb.net/Back-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to Database!');
})
  .catch(() => {
    console.log("Connection Failed");
});

app.listen(3000, ()=> {
    console.log("Server is running Successfully");
})