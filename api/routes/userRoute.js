const express = require('express');
const UserRouter = express.Router();
const connection = require('../config/index')

//getting all users
UserRouter.get('/users' , function(res, req)  {
    
});

UserRouter.get('/user:id' , function(res, req)  {
    
});

//PUT METHOD
UserRouter.put('/user:id' , function(res, req)  {
    
});

//PATCH METHOD
UserRouter.patch('/user:id' , function(res, req)  {
    
});

//DELETE METHOD
UserRouter.delete('/user/:id' , function(res, req)  {
    
});

module.exports = UserRouter ;