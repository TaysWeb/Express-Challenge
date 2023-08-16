const express = require('express');
const router = express.Router();

const connection = require('../config/index');



// //all the get HTTP methods

// router.get('/api/users' ,function(res, req ) {
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
router.post('/api/register' , function(res, req)  {
        let user = req.body;
       let query = "INSERT INTO users (userID, firstName, LastName, gender, userDOB, emailAdd, userPass, profileUrl) VALUES ('?', '?',' ?', '?', '?', '?', '?', '?')";
        connection.query = (query, (err,result)=> {
            if (err) {
                res.json({message : err });
            } else {
                res.json({message : result }); 
            }
        });
});

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

// };