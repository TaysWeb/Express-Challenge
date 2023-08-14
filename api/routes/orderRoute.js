const express = require('express');
const OrderRouter = express.Router();
const connection = require('../config/index')


OrderRouter.post('/order/:userID/:bookID' , function(res, req)  {
    
});

OrderRouter.patch('/order/:userID/:bookID' , function(res, req)  {
    
});


OrderRouter.delete('/order/:userID/:bookID' , function(res, req)  {
    
});

OrderRouter.get('/checkout/:userID/:bookID' , function(res, req)  {
    
});

module.exports = OrderRouter ;