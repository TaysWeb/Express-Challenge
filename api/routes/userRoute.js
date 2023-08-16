const express = require('express');
const UserRouter = express.Router();
const connection = require('../config/index')

//getting all users
UserRouter.get('/users' , function(res, req)  {

    let query = " select  userID, firstName, LastName, gender, userDOB, emailAdd, userPass, profileUrl from users ";
    connection.query('',(err,result) => {
        if (err) {
            res.json({message : err });
        } else {
            res.json({message : result }); 
        }
        
    });
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