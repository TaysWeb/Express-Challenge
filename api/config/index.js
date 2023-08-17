// only the db has to be configured
const mysql = require('mysql');

const myDB = mysql.createPool({
    port : process.env.DB_PORT,
    host: process.env.DB_HOST ,
    user : process.env.DB_USER,
    password : process.env.DB_PASS, 
    database : process.env.DB_NAME
});

myDB.getConnection((err) => {
  if (!err) {
     return err ;
  } 
  console.log("connected successful")
});

module.exports = myDB ;