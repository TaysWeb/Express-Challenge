const express = require('express');
const BookRouter = express.Router();
const connection = require('../config/index')

//POST METHOD
BookRouter.post('/book' , function(res, req)  {
     
});

//POST METHOD
BookRouter.get('/book' , function(res, req)  {
    
});

BookRouter.get('/book:id' , function(res, req)  {
    
});

BookRouter.put('/book:id' , function(res, req)  {
    
});

//DELETE METHOD 
BookRouter.delete('/book:id' , function(res, req)  {
    
});

BookRouter.post('/bookDetails' , function(res, req)  {
    
});

BookRouter.put('/bookAuthor:id' , function(res, req)  {
    
});


BookRouter.delete('/bookAuthor:id' , function(res, req)  {
    
});

module.export = BookRouter ;