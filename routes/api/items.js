const express = require("express");
const router = express.Router();
const multer = require('multer');
const jwt = require("jsonwebtoken");

//storing item images
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})


const upload = multer({
    storage: storage, 
});

// Load input validation
const validateItemInput = require("../../validation/item"); 

// Load User model
const Item = require('../../models/Item');

router.post('/addItem', upload.single('itemImage'), (req, res) => {
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
                price: req.body.price,
                vendor: req.body.vendor,
                category: req.body.category,
                itemImage: req.file.path,
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