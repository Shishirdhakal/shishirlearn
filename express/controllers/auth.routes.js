const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userModel = require('./../model/user.model');

router.get('/home', function (req, res, next) {
    res.end('hi i am from home page');
});


/* router.post('/login',(res, req, next) => {
        userModel.findOne({
            username: req.body.username
        })
            .exec((err, user) => {
                if (user) {
                    if (user.password == req.body.password) {
                        res.json(user);
                    } else {
                        next("Password Didn't Match");
                    }
                } else {
                    next("Username Didn't Match")
                }
            })
    }) */

router.post('/login', (req, res, next) => {
    userModel.findOne({
        username: req.body.username
    })
        .exec((err, user) => {
            if (user) {
             const isMatched = bcrypt.compareSync(req.body.password,user.password);
                if(isMatched){
                    res.json(user);
                }else{
                    next('Wrong Password');
                }
            } else {
                next('Username Wrong');
            }
        })

})

router.post('/register', function (req, res, next) {
    const newUser = new userModel({});
    console.log("req>>>>", req.body);
    if (req.body.firstName)
        newUser.firstNAme = req.body.firstName;
    if (req.body.lastName)
        newUser.lastname = req.body.lastname;
    if (req.body.email)
        newUser.emailAddress = req.body.email;
    if (req.body.username)
        newUser.username = req.body.username;
    if (req.body.password){
        newUser.password= bcrypt.hashSync(req.body.password,saltRounds);
    }
    if (req.body.number)
        newUser.phoneNumber = req.body.number;

    newUser.save(function (err, user) {
        if (err) {
            return next(err);
        }
        res.json(user);
    })
})


module.exports = router;