const express = require('express');
const router = express.Router();
const connection = require('../config/index')

//all the get HTTP methods

router.get('/' , (res, req) => {
    // res.status(200).json{

    // }
});

//registering a new user
router.post('/register' , function(res, req)  {
     
});


module.exports = router;