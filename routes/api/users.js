const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");


// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


// Load User model
const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

router.post('/register', (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

//Login route
router.post('/login', (req, res) => {
    //Form Validation

    const { errors, isValid } = validateLoginInput(req.body)

    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username }).then(user => {

        //find User 
        if (user) {

            //compare password
            if (bcrypt.compareSync(req.body.password, user.password)) {
                //passwords match 
                const userSession = new UserSession();

                userSession.userId = user._id;
                userSession.save((err, doc) => {
                    if (err) {
                        return res.send({
                            success: false,
                            message: 'Error: server error'
                        });
                    }

                    return res.send({
                        success: true,
                        message: 'Valid login',
                        token: doc._id,
                        id: doc.userId
                    });
                });
            } else {
                return res.status(400).json({ password: 'Password incorrect' })
            }
        } else {
            return res.status(400).json({ username: 'Username not found' })
        }
    });


});

//verify token
router.get('/verify', (req, res) => {
    //get the token
    const { query } = req;
    const { token } = query;

    // ?token=test

    //verify the token is one of a kind and is not deleted

    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }

        if (sessions.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            })
        } else {
            return res.send({
                success: true,
                message: 'Good',
                id: sessions
            })
        }
    })
})

//get user

router.get('/:id', (req, res) => {
    let id = req.params.id;

    User.findById(id, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    })
})

//Logout route
router.post('/logout', (req, res) => {
    //get the token
    const { query } = req;
    const { token } = query;

    //verify the token is one of a kind and is not deleted

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
            $set: {
                isDeleted: true
            }
        }, null, (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                })
            }

            return res.send({
                success: true,
                message: 'Good'
            })

        })
});


module.exports = router;