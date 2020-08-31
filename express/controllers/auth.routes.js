const express = require('express');
const app = express();
const router = express.Router();

const userModel = require('./../model/user.model');

router.get('/home', function (req, res, next) {
    res.end('hi i am from home page');
});

/* router.post('/login', function (res, req, next) {
    userModel.findOne({
        username: req.body.username
    })
        .exec(function (err, user) {
            console.log('user>>>>>>>>>>>',user)
            if (user) {
                if (user.password == req.body.password) {
                    res.json(user);

                } else {
                    console.log("password didn't match")
                    next("password didn't match");
                }
            } else {
                console.log("username didn't match")
                next("username didn't match");
            }
        })
})
 */

router.post('/login',(res,req,next)=>{
    userModel.findOne({
        username:req.body.username
    })
    .exec((err,user)=>{
        if (user){
            if(user.password == req.body.password){
                res.json(user);
            }else{
                next("Password Didn't Match");
            }
        }else{
            next("Username Didn't Match")
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
    if (req.body.password)
        newUser.password = req.body.password;
    if (req.body.number)
        newUser.phoneNumber = req.body.number;

    newUser.save(function (err, user) {
        if (err) {
            return next(err);
        }
        res.json(user);
    })
})

/* router.post('/login', function (res, req, next) {
    userModel.findOne({
        username: req.body.username
    })
        .exec(function (err, user) {
            console.log('user>>>>>>>>>>>',user)
            if (user) {
                if (user.password == req.body.password) {
                    res.json(user);

                } else {
                    console.log("password didn't match")
                    next("password didn't match");
                }
            } else {
                console.log("username didn't match")
                next("username didn't match");
            }
        })
}) */

/* router.route('/login')
.post(function (res, req, next) {
    userModel.findOne({
        username: req.body.username
    })
        .exec(function (err, user) {
            console.log('user>>>>',user)
            if (user) {
                if (user.password == req.body.password) {
                    res.json(user);

                } else {
                    console.log("password didn't match")
                    next("password didn't match");
                }
            } else {
                console.log("username didn't match")
                next("username didn't match");
            }
        })
}) */
module.exports = router;