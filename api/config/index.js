// only the db has to be configured

const mysql = require('mysql');

const myDB = mysql.createPool({
    port : process.env.DB_PORT,
    host: process.env.DB_HOST ,
    user : process.env.DB_USER,
    password : process.env.DB_PASS, 
    database : process.env.DB_NAME,
    connectionLimit : 10
});

myDB.getConnection(function(err){
  if (err) {
  console.log('connected Successful!')
  } else throw(err) 
});

module.exports = myDB ;