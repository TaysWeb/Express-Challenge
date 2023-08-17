const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env || 8000 
const path = require('path');
const jwt = require('jsonwebtoken');

// linking my diff routes
const routes = require('./routes/routing');
const books = require('./routes/bookRoute');
const user = require('./routes/userRoute');
const orders = require('./routes/orderRoute');
// const control = require('./Model/userModel');

// adding my database
const myDb = require('./config/index') ;

require('dotenv').config();


//middleware
app.use(express.urlencoded({extended: true})); //this decodes my html form
app.use(express.json()) ;
app.use(cors());

// this next line will show my html page
app.use('/api',express.static(path.join(__dirname , '/html')));
app.use('/api', express.static( path.join( './css/style.css')));

app.get( '/api/', (req, res) => {
      res.sendFile('./html/index.html');
})
// app.use('/api/users', (req,res) => {
// res.json( user);
// })
app.use('/api/users/register', (req,res) => {
    res.json(routes);
})


// this is used when it's typed wrong
app.use((req,res) => {
    res.status(404);
    res.send('<h2> Error 404 : Page not Found</h2>')
})

//my routes which i'm using
// app.use('/api/users/register',routes);

// app.use('/orders', () => orders);
// app.use('/books', () =>  books);


app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on :`, process.env.APP_PORT);
  });
