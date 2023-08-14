const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env || 8000 ;

// linking my diff routes
const routes = require('./routes/routing');
const books = require('./routes/bookRoute');
const user = require('./routes/userRoute');
const orders = require('./routes/orderRoute');


// adding my database
const myDb = require('./config/index') ;

require('dotenv').config();


//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json()) ;
app.use(cors());
// app.use('products', productRoute)

app.get( '/', (req, res) => {
    res.send('hii');
});


//my routes which i'm using
app.use('/all', routes);
app.use('/users', routes);
app.use('/orders', routes);
app.use('/books', routes);


app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on :`, process.env.APP_PORT);
  });
