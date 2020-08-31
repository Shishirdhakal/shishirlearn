const express = require('express');
const router = express.Router();
const userModel = require('./../model/user.model');

//profile edit or update user information
//get all users from system
//get one user
//delete user information or delete user

router.get('/all',function(req,res,next){
    userModel.find({})
    .exec(function(err,user){
        if(err){
            return next(err)
        }
        res.json(user);
    })
})

module.exports= router;