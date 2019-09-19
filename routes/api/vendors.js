const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");


// Load input validation
const validateVendorInput = require("../../validation/vendors");


// Load User model
const Vendor = require('../../models/Vendor');

router.post('/addVendor', (req, res) => {
    // Form validation
    const { errors, isValid } = validateVendorInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Vendor.findOne({ email: req.body._id }).then(vendor => {
        if (vendor) {
            return res.status(400).json({ vendor: "Vendor already exists" });
        } else {
            const newVendor = new Vendor({
                name: req.body.name,
                description: req.body.description,
                street: req.body.street,
                state: req.body.state,
                zipCode: req.body.zipCode
            });

            newVendor
                .save()
                .then(vendor => res.json(vendor))
                .catch(err => console.log(err));
        }
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;

    Vendor.findById(id, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    })
})




module.exports = router;