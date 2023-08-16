// const express = require('express');
// const router = express.Router();
const { result } = require('lodash');
const connection = require('../config/index');


//all the get HTTP methods

// router.get('/api/all' , (res, req ) => {
//     res.status(200).json ({
//         message: 'This is fetching all'
//     });

// });

//registering a new user
// router.post('/api/register' , function(res, req)  {
//         let user = req.body;
//         query = "INSERT INTO users (userID, firstName, LastName, gender, userDOB, emailAdd, userPass, profileUrl) VALUES ('?', '?',' ?', '?', '?', '?', '?', '?')";
//         connection.query = (query,[user.userID, user.firstName, user.LastName, user. userDOB, user.emailAdd, user.userPass, user.profileUrl],(err,result)=> {
//             if (!err) {
//              return res.status(200).json({message: 'User Registered'});
//             }
//             else {
//                 return res.status(500).json(err)
//             }
         
//         });
// });


module.exports = {
  create: (data, callback) => {
    connection.query (
        "INSERT INTO users (userID, firstName, LastName, gender, userDOB, emailAdd, userPass, profileUrl) VALUES ('?', '?',' ?', '?', '?', '?', '?', '?')",
        [
            data.userID,
            data.firstName,
            data.LastName,
            data.gender,
            data.emailAdd,
            data.userPass,
            data.profileUrl,
        ],
        (err,result)
    )
  }

}