module.exports = app => {
    const userRoute = require('../Model/userModel');
    
    const router =  require('express').Router();
    const control = require('../controllers/user_controller');
// const express = require('express');
// const router = express.Router();

// const connection = require('../config/index');



// //all the get HTTP methods


//    var query = 'select userID, firstName, LastName, gender, userDOB, emailAdd, userPass, profileUrl from users ';
//    connection.query(query, function(err, data){
//        if (err) {
//            throw err ;   
//        }
//        else
//        {
//         res.render('Sample data', {title:'List of Users', action: 'list', users:data})
//        }
//    });

// });



//registering a new user
// router.post('/api/users/register' , function(res, req)  {
 
//        let query = "INSERT INTO users SET ?";
//        let postData = {
//           userId : req.body.id,
//           FirstName : req.body.FirstName,
//           LastName: req.body.LastName,
//           gender : req.body.gender,
//           userDOB : req.body.userDOB,
//           emailAdd : req.body.emailAdd,
//           userPass : req.body.userPass,
//           ProfileUrl : req.body.ProfileUrl

//        };
//         connection.query = (query, postData, (err,result)=> {
//             if (err) {
//                 res.json({message : err });
//             } else {
//                 console.log('1 record added');
//             }
//         });
// });
router.post('/api/users/register', control.create);

 module.exports = router;

// module.exports = {
//   create: (data, callback) => {
//     connection.query (
//         "INSERT INTO users (userID, firstName, LastName, gender, userDOB, emailAdd, userPass, profileUrl) VALUES ('?', '?',' ?', '?', '?', '?', '?', '?')",
//         [
//             data.userID,
//             data.firstName,
//             data.LastName,
//             data.gender,
//             data.emailAdd,
//             data.userPass,
//             data.profileUrl,
//         ],
//         (err,result)
//     )
//   }



};