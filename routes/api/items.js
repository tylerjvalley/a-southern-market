const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");


// Load input validation
const validateItemInput = require("../../validation/item"); 

// Load User model
const Item = require('../../models/Item');

router.post('/addItem', (req, res) => {
    // Form validation
    const { errors, isValid } = validateItemInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Item.findOne({ name: req.body.name }).then(item => {
        if (item) {
            return res.status(400).json({ item: "Item already exists" });
        } else {
            const newItem = new Item({
                name: req.body.name,
                description: req.body.description,
                vendor: req.body.vendor,
                category: req.body.category
            });
            newItem
                .save()
                .then(item => res.json(item))
                .catch(err => console.log(err));
        }
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;

    Item.findById(id, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    })
})




module.exports = router;