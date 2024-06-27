const express = require('express');
const mongoose = require('mongoose');
const app = express();

// importing routes
const itemRoutes = require('./routes/item');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.get('/', (req, res) => {
    res.send("Hello World");
})


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