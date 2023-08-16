const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer') ;
const express = require('express');
const User = require('./userRoute')


//registering a new user
router.post('/api/register' , async (res, req) => {
          try {
            const {username , password} = req.body;

            const hashedPass = await bcrypt.hash(password,10);

            const User = new User({
              username,
              password: hashedPass,
            });
            await username.save();
            res.status(201).json({message: 'User Registered Successfully'});
          }catch (err) {
            res.status(500).json({error: 'An Error occurred'});
          }
});
