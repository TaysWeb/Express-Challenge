// this modal to execute for users
// const db = require('../config/index');
const sql = require('../config/index');
// class
// const user = function(user) {
//     this.userID = user.id;
//     this.firstName = user.FirstName;
//     this.LastName = user.LastName;
//     this.gender = user.gender ;
//     this.userDOB = user.D.O.B;
//     this.emailAdd = user.emailAdd ;
//     this.userPass = user.userPass ;
//     this.profileUrl = user.profileUrl ;

//   };
class user {
    addUser(req,res) {
        const data = req.body;


    sql.query="INSERT INTO users SET ?" ;
 sql.query(query, [data], (err)=> {
    if (err) {
        throw err ;
    } else {
        res.json({message : 'You are registered'}) 
    }
 })
    
}
}

  module.export = user;