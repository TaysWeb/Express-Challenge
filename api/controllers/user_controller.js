const user = require("../Model/userModel");

// Create and Save a new Userz
exports.create = (req, res) => {
  
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

//   // Create a Tutorial
//   const user = function(user) {
//     this.userID = user.id;
//     this.firstName = user.FirstName;
//     this.LastName = user.LastName;
//     this.gender = user.gender ;
//     this.userDOB = user.D.O.B;
//     this.emailAdd = user.emailAdd ;
//     this.userPass = user.userPass ;
//     this.profileUrl = user.profileUrl ;
     
//   };
//   // Save Tutorial in the database
// user.create(user, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while adding user."
//       });
//     else res.send(data);
//   });
  
};
